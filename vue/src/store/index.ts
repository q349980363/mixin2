import { createStore } from "vuex";
import router from "../router";
import Hub from "../hub";
import { EventEmitter2 } from "eventemitter2";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import {
  LocalNotifications,
  PermissionStatus,
} from "@capacitor/local-notifications";
import { Capacitor } from "@capacitor/core";
import { Toast } from "@capacitor/toast";

//IMPORTANCE_DEFAULT
//IMPORTANCE_HIGH
// 更高的通知重要性：无处不在，发出噪音和窥视。可以使用全屏意图。
// 恒定值：4 （0x00000004）
//IMPORTANCE_LOW
// 低通知重要性：显示在阴影中，并可能显示在状态栏中（请参阅），但不会有明显的干扰性。shouldHideSilentStatusBarIcons()
// 恒定值：2 （0x00000002）
//IMPORTANCE_MIN
// 最小通知重要性：仅显示在阴影中，首屏下方。这不应该使用，因为前台服务应该是用户关心的东西，所以将其通知标记为最小重要性没有语义意义。如果您在Android版本上执行此操作，系统将显示有关您的应用程序在后台运行的更高优先级的通知。Service.startForegroundBuild.VERSION_CODES.O
// 恒定值：1 （0x00000001）

(async () => {
  //初始化通知权限
  var permissionStatus = await LocalNotifications.requestPermissions();
  await LocalNotifications.createChannel({
    id: "im",
    name: "普通消息",
    description: "聊天消息,屏蔽后无法收到通知",
    importance: 4, //12345代表最高优先级别
  });
})();

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

const hapticsNotification = async () => {
  await Haptics.notification();
};

const hapticsImpactLight = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
};

const hapticsVibrate = async () => {
  await Haptics.vibrate();
};

const hapticsSelectionStart = async () => {
  await Haptics.selectionStart();
};

const hapticsSelectionChanged = async () => {
  await Haptics.selectionChanged();
};

const hapticsSelectionEnd = async () => {
  await Haptics.selectionEnd();
};

hapticsVibrate();
console.log(process.env.NODE_ENV);
let serverHost = location.hostname;

const isNativePlatform = Capacitor.isNativePlatform();
// alert(isNativePlatform)
var isDevelopment = process.env.NODE_ENV === "development";

//如果是app环境则没有host,需要手动指定服务器地址.
if (isNativePlatform) {
  serverHost = "192.168.1.157:8000";
} else {
  //web环境
  // serverHost = "192.168.1.157";
}
if (localStorage.host) {
  serverHost = localStorage.host + ":8000";
}

export default createStore({
  state: {
    connectionInitPromise: new Promise((resolve, reject) => {
      console.log("占位函数");
    }),
    connectionInitPromiseResolve: (value: unknown) => {
      console.log("占位函数");
    },
    // 页面连接状态
    hubConnection: 0,
    reconnectCount: 0,
    tipsList: Array<string>(),
    emitter: new EventEmitter2({
      wildcard: true,
    }),
    userInfo: <any>{
      // UserName: "",
    },
    loginState: false,
    serverHost: serverHost,
    hub: new Hub("ws://" + serverHost + "/ws?token=" + localStorage.token),
  },
  mutations: {
    LoginSuccess(state, userInfo) {
      if (!userInfo) {
        state.loginState = false;
        return;
      }
      state.loginState = true;
      // console.log("#############################", userInfo);
      state.userInfo = userInfo;
      //TODO userInfo需要检查 如果登陆失败有可能 userinfo 返回空用户
    },
    ConnectionSuccess(state) {
      state.hubConnection = 10;
      state.reconnectCount = 0;
      state.connectionInitPromiseResolve("");
    },
    ConnectionReconnect(state) {
      state.hubConnection = -1;
    },
    ConnectionStop(state) {
      state.hubConnection = -2;
    },
    reconnectCountIncrement(state) {
      state.reconnectCount++;
    },

    addTips(state, msg: string) {
      state.tipsList.push(msg);
    },
    shiftTips(state) {
      state.tipsList.shift();
    },
  },
  actions: {
    back() {
      if (window.history.length <= 2) {
        //TODO 当页面进入时记录历史记录长度
        // 如果与页面进入时长度相等则无法后退
        router.replace("/homenav");
      } else {
        router.go(-1);
      }
    },
    //初始化
    async init({ dispatch, commit, state }) {
      state.hub.onclose = () => {
        setTimeout(() => {
          dispatch("reconnect");
        }, 1000);
      };

      dispatch("emitterOn");
      try {
        await state.hub.open();
        // commit("ConnectionSuccess");
        dispatch("connectionSuccess");
      } catch (error) {
        dispatch("reconnect");
      }
    },
    emitterOn({ dispatch, commit, state }) {
      state.hub.emitter.on("MessageEvent.tips", (json: any) => {
        dispatch("tips", json.message);
      });
      state.hub.emitter.on("MessageEvent.event", (json: any) => {
        state.emitter.emit("event." + json.name);
      });
      state.hub.emitter.on("MessageEvent.event", (json: any) => {
        state.emitter.emit("event." + json.name);
      });
      state.hub.emitter.on("MessageEvent.friends", async (json: any) => {
        console.log("friends." + json.data.UserName + "-" + json.data.Target);
        //接收人等于自己是别人给自己发的消息
        if (json.data.Target == state.userInfo.UserName) {
          var ret = await LocalNotifications.schedule({
            notifications: [
              {
                title: json.data.UserName,
                body: json.data.Data,
                id: json.data.ID,
                autoCancel: true,
                channelId: "im",
                // schedule: { at: new Date() },
                // actionTypeId: "",
                // extra: null,
              },
            ],
          });

          await hapticsNotification();
        }
        state.emitter.emit(
          "friends." + json.data.UserName + "-" + json.data.Target,
          json.data
        );
      });
      state.hub.emitter.onAny(function (
        event: string | string[],
        ...values: any[]
      ) {
        state.emitter.emit(event, ...values);
      });
    },
    //连接错误 重连,重连次数无限.
    async reconnect({ dispatch, commit, state }) {
      commit("ConnectionReconnect");
      try {
        await state.hub.open();
        // commit("ConnectionSuccess");
        dispatch("connectionSuccess");
      } catch (error) {
        commit("reconnectCountIncrement");
        setTimeout(() => {
          dispatch("reconnect");
        }, 1000);
      }
    },
    async getMyUserInfo({ dispatch, commit, state }) {
      const json = await this.state.hub.invoke("User", "GetMy");
      commit("LoginSuccess", json);
      console.log(json);
      // commit("LoginSuccess", {});
    },
    async tokenLogin({ dispatch, commit, state }, token: string) {
      console.log("tokenLogin:" + token);
      localStorage.token = token;
      const json = await this.state.hub.invoke("User", "GetMy");
      console.log("json", json);
      commit("LoginSuccess", json);
      router.replace("/HomeNav");
    },
    async connectionSuccess({ dispatch, commit, state }, token: string) {
      try {
        const json = await this.state.hub.invoke("User", "GetMy");
        commit("LoginSuccess", json);
        commit("ConnectionSuccess");
      } catch (error) {
        // commit("LoginSuccess", json);
        commit("ConnectionSuccess");
      }
    },
    async tips({ dispatch, commit, state }, msg: string) {
      console.log("Tips:" + msg);
      commit("addTips", msg);
      setTimeout(() => {
        commit("shiftTips");
      }, 2000);
    },

    async SetServerHost({ dispatch, commit, state }, host: string) {
      localStorage.host = host;
      location.reload();
    },

    // async invokeHub({ dispatch, commit, state }): Promise<T> {},
  },
  modules: {},
});

//TODO 滚动问题

//https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md

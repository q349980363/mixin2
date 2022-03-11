import { createStore } from "vuex";
import router from "../router";
import Hub from "../hub";

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
    userInfo: <any>{
      // UserName: "",
    },
    loginState: false,
    hub: new Hub("ws://192.168.1.117:8000/ws?token=" + localStorage.token),
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

      try {
        await state.hub.open();
        // commit("ConnectionSuccess");
        dispatch("connectionSuccess");
      } catch (error) {
        dispatch("reconnect");
      }
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
    async tokenLogin({ dispatch, commit, state }, token: string) {
      console.log("tokenLogin:" + token);
      localStorage.token = token;
      const json = await this.state.hub.invoke("login", "GetMy");
      console.log("json", json);
      commit("LoginSuccess", json);
      router.replace("/HomeNav");
    },
    async connectionSuccess({ dispatch, commit, state }, token: string) {
      const json = await this.state.hub.invoke("login", "GetMy");
      commit("LoginSuccess", json);
      commit("ConnectionSuccess");
    },
    async tips({ dispatch, commit, state }, msg: string) {
      console.log("Tips:" + msg);
      commit("addTips", msg);
      setTimeout(() => {
        commit("shiftTips");
      }, 1000);
    },
    // async invokeHub({ dispatch, commit, state }): Promise<T> {},
  },
  modules: {},
});

//TODO 滚动问题

//https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md

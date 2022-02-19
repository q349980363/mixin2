import { createStore } from "vuex";
import router from "../router";
import Hub from "../hub";

export default createStore({
  state: {
    // 页面连接状态
    hubConnection: 0,
    reconnectCount: 0,
    hub: new Hub("ws://192.168.1.157:8000/ws"),
  },
  mutations: {
    ConnectionSuccess(state) {
      state.hubConnection = 10;
    },
    ConnectionReconnect(state) {
      state.hubConnection = -1;
    },
    ConnectionClose(state) {
      state.hubConnection = -1;
    },
    ConnectionStop(state) {
      state.hubConnection = -2;
    },
    setConnectionState(state, connectionState: number) {
      state.hubConnection = connectionState;
    },
    reconnectCountIncrement(state) {
      state.reconnectCount++;
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
      try {
        await state.hub.open();
        commit("ConnectionSuccess");
      } catch (error) {
        dispatch("reconnect");
      }
    },
    //连接错误 重连,重连次数无限.
    async reconnect({ dispatch, commit, state }) {
      commit("ConnectionReconnect");
      try {
        await state.hub.open();
        commit("ConnectionSuccess");
      } catch (error) {
        commit("reconnectCountIncrement");
        setTimeout(() => {
          dispatch("reconnect");
        }, 1000);
      }
    },
  },
  modules: {},
});

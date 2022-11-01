<template>
  <BaseMask>
    <div>
      <img src="@/assets/images/disconnect.svg" alt="" />
      <div class="disconnect">连接断开,正在重连{{ reconnectCount }}...</div>
      <div class="disconnect-time">
        <small>{{ reconnectCount }}秒后重连</small>
      </div>
      <div class="switch">
        <div class="switch-title">
          服务器IP切换
          <br />
          <small>当前 :{{ serverHost }}</small>
        </div>
        <div class="switch-item" @click="SetServerHost('')">重置为默认</div>
        <div class="switch-item" @click="SetServerHost(url)">
          {{ url }} (本机同端口)
        </div>
        <div class="switch-item" @click="SetServerHost('127.0.0.1:8000')">
          127.0.0.1:8000 (本机)
        </div>
        <div class="switch-item" @click="SetServerHost('192.168.1.157:8000')">
          192.168.1.157:8000 (Mg1024)
        </div>
        <div class="switch-item" @click="SetServerHost('192.168.1.117:8000')">
          192.168.1.117:8000 (Mg1025)
        </div>
        <div class="switch-item" @click="SetServerHost('192.168.1.235:8000')">
          192.168.1.235:8000
        </div>
        <div class="switch-item" @click="SetServerHost('home.lingy.top:89')">
          home.lingy.top:89
        </div>

        <div class="switch-item" @click="SetServerHost('198.211.7.244:8000')">
          198.211.7.244:8000 (服务器1)
        </div>
      </div>
    </div>
  </BaseMask>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseMask from "./BaseMask.vue"; // @ is an alias to /src

import { Action, State } from "vuex-class";
@Options({
  components: {
    BaseMask,
  },
})
export default class ReconnectMask extends Vue {
  @State("reconnectCount") reconnectCount!: string;
  @State("serverHost")
  serverHost!: string;
  @Action("SetServerHost")
  SetServerHost!: (host: string) => void;
  url = "127.0.0.1";
  created() {
    if (location.port) {
      this.url = this.url + ":" + location.port;
    }
  }
}
</script>
<style scoped lang="less">
img {
  width: 280px;
  height: 246px;
}
.disconnect {
  margin-top: 5px;
}
.disconnect-time {
  margin-top: 0;
}
.switch {
  margin: 0 auto;
  margin-top: 50px;
  font-size: 16px;
  text-align: left;
  border-left: 5px solid rgba(0, 0, 0, 0.3);
  max-width: 245px;
  padding-left: 5px;
}
.switch-title {
  font-size: 18px;
}
.switch-item {
  padding: 4px 8px;
  margin-top: 5px;
  display: inline-block;
  background-color: #fff;
  text-align: left;
  color: #000;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.3);
}
.switch-item:hover {
  background-color: #cbcbcb;
}
</style>

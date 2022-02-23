<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link>
  </div> -->
  <!-- <keep-alive> -->

  <router-view class="views" v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>

  <ConnectMask v-if="stateHubConnection == 0" />
  <ReconnectMask v-if="stateHubConnection == -1" />
  <ConnectStopMask v-if="stateHubConnection == 0" />

  <Tips />

  <!-- </keep-alive> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ConnectMask from "@/components/Mask/ConnectMask.vue";
import ConnectStopMask from "@/components/Mask/ConnectStopMask.vue";
import ReconnectMask from "@/components/Mask/ReconnectMask.vue";
import Tips from "@/components/Tips.vue";

import { State, Action } from "vuex-class";

@Options({
  components: {
    ConnectMask,
    ConnectStopMask,
    ReconnectMask,
    Tips,
  },
})
export default class App extends Vue {
  @State("hubConnection")
  stateHubConnection!: boolean;
}
</script>

<style lang="less">
@import "assets/normalize.css";
@import "assets/body.css";
@import "assets/app.less";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<style scoped lang="less">
.views {
  // position: absolute;
  // width: 100%;
  // transition: all 0.8s ease;
  // top: 0;

  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

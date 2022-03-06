<template>
  <router-view class="views" v-slot="{ Component, route }">
    <transition :name="route.meta.transition || ''">
      <component :is="Component" />
    </transition>
  </router-view>

  <ConnectMask v-if="stateHubConnection == 0" />
  <ReconnectMask v-if="stateHubConnection == -1" />
  <ConnectStopMask v-if="stateHubConnection == 0" />

  <Tips />
  <!-- <div id="iphoneX">
    <img src="@/assets/images/iphoneX.png" alt="" />
  </div> -->
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
  background-color: #f5f5f5;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  position: relative;
}
@media screen and (min-width: 900px) {
  #app {
    /* box-shadow: 1px 1px 5px #f5f5f5; */
    max-width: 400px;
    max-height: 900px;
    margin: auto;
    margin-top: 120px;
  }
  #iphoneX {
    display: block !important;
    position: absolute;
    position: absolute;
    top: -100px;
    right: -31px;
    bottom: -61px;
    left: -29px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}
#iphoneX {
  display: none;
}
</style>

<style scoped lang="less">
.views {
  // position: absolute;
  width: 100%;
  // transition: all 0.8s ease;
  // top: 0;

  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

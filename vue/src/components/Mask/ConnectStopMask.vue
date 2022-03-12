<template>
  <BaseMask>
    <div>
      <img src="@/assets/images/nonetwork.svg" alt="" />
      <div>连接失败,服务器异常.</div>
      <div><small>请刷新页面后重试.</small></div>
    </div>
  </BaseMask>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseMask from "./BaseMask.vue"; // @ is an alias to /src

import { Action } from "vuex-class";
@Options({
  components: {
    BaseMask,
  },
})
export default class ConnectStopMask extends Vue {}
</script>
<style scoped lang="less">
img {
  width: 280px;
  height: 246px;
}
div {
  margin-top: 5px;
}
div:last-child {
  margin-top: 0;
}
</style>

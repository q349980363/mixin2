<template>
  <BaseMask>
    <div>连接失败,服务器异常.</div>
    <div><small>请刷新页面后重试.</small></div>
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
<style scoped lang="less"></style>

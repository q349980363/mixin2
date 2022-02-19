<template>
  <BaseMask>
    <div>连接断开,正在重连{{ reconnectCount }}....</div>
    <div><small>1秒后重连</small></div>
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
}
</script>
<style scoped lang="less"></style>

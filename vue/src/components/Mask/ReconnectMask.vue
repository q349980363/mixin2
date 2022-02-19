<template>
  <BaseMask>连接断开,正在重连....</BaseMask>
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
export default class ReconnectMask extends Vue {}
</script>
<style scoped lang="less"></style>

<template>
  <BaseMask>正在连接....</BaseMask>
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
export default class ConnectMask extends Vue {}
</script>
<style scoped lang="less">

</style>

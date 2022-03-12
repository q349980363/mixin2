<template>
  <BaseMask>
    <div>
      <img src="@/assets/images/loading.svg" alt="" />
      <div>正在连接...</div>
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
export default class ConnectMask extends Vue {}
</script>
<style scoped lang="less">
img {
  width: 280px;
  height: 246px;
}
div {
  margin-top: 5px;
}
</style>

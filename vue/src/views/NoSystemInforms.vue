<template>
  <div class="nosysteminforms">
    <BaseTopBarBack title="通知" />
    <div class="nosysteminforms-main">
      <img src="@/assets/images/nonotice.svg" alt="" />
      <div class="main-text">暂无通知</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class NoSystemInforms extends Vue {}
</script>

<style lang="less" scoped>
.nosysteminforms {
  .nosysteminforms-main {
    flex: 1;
    img {
      width: 280px;
      height: 246px;
      margin: auto;
      margin-top: 125px;
    }
    .main-text {
      margin-top: 5px;
    }
  }
}
</style>
<template>
  <!-- 等待进入 -->
  <div class="waitingload">
    <img src="@/assets/images/logo.svg" alt="" />
    <div>纸飞机</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
})
export default class WaitingLoad extends Vue {}
</script>

<style lang="less" scoped>
.waitingload {
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  /* height: 100%; */
  text-align: center;
}
.waitingload img {
  margin: 0 auto;
  width: 60px;
}
.waitingload div {
  margin-top: 6px;
  color: #6e6e96;
}
</style>

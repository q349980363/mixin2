<template>
  <!-- 个人二维码名片 -->
  <div class="card">
    <BaseTopBarBack title="二维码名片" />

    <div class="card-body">
      <div class="top">
        <div class="portrait">
          <img src="@/assets/images/nv.svg" alt="" />
          <span>Mg1</span>
        </div>
      </div>
      <div class="box"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Card extends Vue {}
</script>

<style lang="less" scoped>
.card-body {
  margin: 100px 30px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  .top {
    flex: 1;
    margin-top: 20px;
    .portrait {
      width: 35px;
      height: 35px;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      img {
        width: 32px;
        height: 32px;
      }
    }
  }
  .box {
    margin: 30px;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
}
</style>
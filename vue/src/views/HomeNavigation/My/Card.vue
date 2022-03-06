<template>
  <!-- 个人二维码名片 -->
  <div class="card">
    <BaseTopBarBack title="二维码名片" />

    <div class="card-main">
      <div class="main-top">
        <img class="headportrait" src="@/assets/images/avatar/nv.svg" alt="" />
        <div class="top-name">Mg1</div>
      </div>
      <div class="main-box"></div>
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
.card {
  .card-main {
    display: flex;
    flex-direction: column;
    margin: 90px auto;
    padding: 0 40px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    .main-top {
      flex: 1;
      display: flex;
      margin-top: 20px;
      font-size: 16px;
      line-height: 50px;
      .headportrait {
        width: 50px;
        height: 50px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        vertical-align: middle;
      }
      .top-name {
        margin-left: 10px;
      }
    }
    .main-box {
      margin-top: 30px;
      margin-bottom: 60px;
      width: 260px;
      height: 260px;
      border: 1px solid #000;
    }
  }
}
</style>

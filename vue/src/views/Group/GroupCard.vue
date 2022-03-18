<template>
  <!-- 群二维码 -->
  <div class="groupcard">
    <BaseTopBarBack title="群二维码名片" />
    <div class="groupcard-main">
      <div class="main-top">
        <img class="headportrait" src="@/assets/images/group-head.svg" alt="" />
        <div class="top-name">群1</div>
      </div>
      <div class="main-box">
        <img src="@/assets/images/qrcode.png" alt="" />
      </div>
      <div class="main-text">扫一扫上面的二维码图案,进入群聊</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class GroupCard extends Vue {}
</script>

<style lang="less" scoped>
.groupcard {
  .groupcard-main {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 120px;
    padding: 0 30px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    .main-top {
      flex: 1;
      margin-top: 20px;
      margin-left: 20px;
      display: flex;
      line-height: 50px;
      font-size: 16px;
      .headportrait {
        width: 50px;
        height: 50px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        vertical-align: middle;
      }
      .top-name {
        flex: 1;
        margin-left: 10px;
        text-align-last: left;
      }
    }
    .main-box {
      margin-top: 30px;
      margin-bottom: 30px;
      width: 280px;
      height: 280px;
      img {
        width: 280px;
        height: 280px;
      }
    }
    .main-text {
      margin-bottom: 20px;
    }
  }
}
</style>

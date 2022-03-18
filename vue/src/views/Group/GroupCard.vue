<template>
  <!-- 群二维码 -->
  <div class="groupcard">
    <BaseTopBarBack title="群二维码名片" />
    <div class="groupcard-main">
      <div class="main-top">
        <img class="headportrait" src="@/assets/images/group-head.svg" alt="" />
        <div class="top-name">群1</div>
      </div>
      <div class="main-box"></div>
      <div>扫一扫上面的二维码图案,进入群聊</div>
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
    margin: 90px auto;
    padding: 0 40px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    .main-top {
      flex: 1;
      margin-top: 20px;
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

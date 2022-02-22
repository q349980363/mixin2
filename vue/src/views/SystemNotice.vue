<template>
  <!-- 系统通知 -->
  <div class="systemnotice">
    <BaseTopBarBack title="通知" />

    <div class="systemnotice-list">
      <div class="tip">好友通知</div>
      <div class="row" v-for="i in 15" :key="i">
        <div class="portrait">
          <img src="@/assets/images/group-head.svg" alt="" />
        </div>
        <div class="main">
          <div>Mg2</div>
          <button>同意</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class SystemNotice extends Vue {}
</script>

<style lang="less" scoped>
.systemnotice-list {
  overflow-y: auto;
  flex: 1;
  .tip {
    margin-top: 10px;
    text-align: left;
    padding: 0 15px;
  }
  .row {
    display: flex;
    align-items: center;
    margin-top: 5px;
    padding: 0 15px;
    height: 52px;
    /* border: 1px solid #000; */
    border-bottom: 1px solid #cdcdcd;
    background-color: #fff;
    .portrait {
      width: 35px;
      height: 35px;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      img {
        width: 34px;
        height: 34px;
      }
    }
    .main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 10px;
      font-size: 14px;
      button {
        width: 50px;
        height: 25px;
        border: 0;
      }
    }
  }
}
</style>

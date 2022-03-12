<template>
  <div class="selectprompt">
    <div class="selectprompt-main">
      <div class="main-title">删除联系人</div>
      <!-- <div class="main-text">确定删除和Mg的聊天记录吗?</div> -->
      <div class="main-text">
        将联系人"Mg"删除,将同时删除与该联系人的聊天记录
      </div>
      <div class="main-btn">
        <div class="btn-cancel">取消</div>
        <div class="btn-empty">清空</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class SelectPrompt extends Vue {}
</script>

<style lang="less" scoped>
.selectprompt-main {
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 100;
  top: 280px;
  left: 0;
  right: 0;
  text-align: center;
  background-color: #fff;
  width: 280px;
  margin: auto;
  border-radius: 6px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  .main-title {
    padding-top: 15px;
    margin-bottom: -10px;
    font-weight: bold;
  }
  .main-text {
    padding: 25px 35px;
  }
  .main-btn {
    display: flex;
    text-align: center;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    .btn-cancel {
      flex: 1;
      padding: 15px 0;
      border-right: 1px solid rgba(0, 0, 0, 0.1);
    }
    .btn-empty {
      flex: 1;
      padding: 15px 0;
      color: #dc3545;
    }
  }
}
</style>
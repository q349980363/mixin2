<template>
  <div class="promptbox">
    <div class="tips">
      <span class="title">提示</span>
      <span class="content">
        111111111111111111111111111111111111111111111111111111111111111111111111
      </span>
      <div class="but">
        <button class="cancel">取消</button>
        <button class="determine">确定</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class PromptBox extends Vue {}
</script>

<style lang="less" scoped>
.promptbox {
  .tips {
    margin: 200px 30px;
    padding: 20px;
    height: 200px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    word-wrap: break-word;
    .title {
      padding: 10px;
      font-size: 18px;
    }
    .content {
      flex: 1;
      padding: 5px;
      height: 100px;
    }
    .but {
      .cancel {
        width: 60px;
        padding: 5px;
        margin: 0 30px;
        background-color: #ffff;
        border: 1px solid #ccc;
        color: #878787;
        border-radius: 3px;
        font-size: 14px;
      }
      .determine {
        width: 60px;
        padding: 5px;
        margin: 0 30px;
        background-color: #007bff;
        color: #fff;
        border: 1px solid #007bff;
        border-radius: 3px;
        font-size: 14px;
      }
    }
  }
}
</style>
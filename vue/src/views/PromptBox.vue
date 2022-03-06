<template>
  <div class="promptbox">
    <div class="tips">
      <div class="tips-title">提示</div>
      <div class="tips-content">
        111111111111111111111111111111111111111111111111111111111111111111111111
      </div>
      <div class="tips-but">
        <button class="but-cancel">取消</button>
        <button class="but-determine">确定</button>
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
    display: flex;
    flex-direction: column;
    margin: 200px 30px;
    padding: 20px;
    height: 200px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    word-wrap: break-word;
    .tips-title {
      padding: 10px;
      font-size: 18px;
    }
    .tips-content {
      flex: 1;
      padding: 5px;
      height: 100px;
    }
    .tips-but {
      .but-cancel {
        width: 60px;
        padding: 5px;
        margin: 0 30px;
        font-size: 14px;
        background-color: #ffff;
        border: 1px solid #ccc;
        color: #878787;
        border-radius: 3px;
      }
      .but-determine {
        padding: 5px;
        margin: 0 30px;
        width: 60px;
        font-size: 14px;
        background-color: #007bff;
        color: #fff;
        border: 1px solid #007bff;
        border-radius: 3px;
      }
    }
  }
}
</style>

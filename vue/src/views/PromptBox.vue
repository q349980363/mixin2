<template>
  <div class="promptbox">
    <div class="tips">
      <span class="tip">提示</span>
      <span class="text">
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
.tips {
  margin: 100px 30px;
  padding: 10px;
  height: 200px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  word-wrap: break-word;
  .tip {
    font-size: 20px;
  }
  .text {
    height: 100px;
    flex: 1;
  }
  .but {
    .cancel {
      width: 60px;
      padding: 5px;
      margin: 0 20px;
      background-color: #ffff;
      border:1px solid #ccc;
    }
    .determine {
      width: 60px;
      padding: 5px;
      margin: 0 20px;
      background-color: #007bff;
     border:none;
    }
  }
}
</style>
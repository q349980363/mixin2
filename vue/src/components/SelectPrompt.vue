<template>
  <div class="selectprompt">
    <div class="selectprompt-main">
      <div class="main-title">{{ title }}</div>
      <div class="main-text">{{ text }}</div>
      <div class="main-btn">
        <div class="btn-cancel">{{ cancel }}</div>
        <div class="btn-empty">{{ empty }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    title: String,
    text: String,
    cancel: String,
    empty: String,
  },
})
export default class SelectPrompt extends Vue {}
</script>

<style lang="less" scoped>
.selectprompt {
  // position: absolute;
  // background-color: rgba(204, 204, 204, 0.678);
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
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
        cursor: pointer;
      }
      .btn-empty {
        flex: 1;
        padding: 15px 0;
        color: #dc3545;
        cursor: pointer;
      }
    }
  }
}
</style>
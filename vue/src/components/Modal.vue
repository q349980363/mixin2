<template>
  <!-- 弹出删除框 -->
  <div class="modal" v-if="show">
    <div class="modal-main">
      <div class="main-title" v-if="title">{{ title }}</div>
      <div class="main-text">
        <slot></slot>
      </div>
      <div class="main-btn">
        <div class="btn-cancel" @click="onCancel">{{ cancel }}</div>
        <div
          class="btn-ok"
          :style="{
            color: color,
          }"
          @click="onOk"
        >
          {{ ok }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: {
      type: String,
      default: "",
    },
    show: Boolean,
    cancel: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "#000",
    },
    ok: {
      type: String,
      default: "确定",
    },
  },
})
export default class Modal extends Vue {
  show!: boolean;
  onCancel() {
    this.$emit("update:show", false);
    this.$emit("onCancel");
  }
  onOk() {
    this.$emit("update:show", false);
    this.$emit("onOk");
  }
}
</script>

<style scoped lang="less">
.modal {
  position: absolute;
  background-color: rgba(204, 204, 204, 0.678);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .modal-main {
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
      .btn-ok {
        flex: 1;
        padding: 15px 0;
        cursor: pointer;
      }
    }
  }
}
</style>

<template>
  <div class="head">
    <slot name="left" class="left"></slot>
    <img class="headportrait" :src="src" alt="" />
    <!-- <slot></slot> -->
  </div>
  <div class="main">
    <div class="left">
      <div class="name">{{ name }}</div>
      <div class="content">{{ content }}</div>
    </div>
  </div>
  <div class="time">
    <div>{{ time }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    src: String,
    name: String,
    content: String,
    time: String,
  },
})
export default class MessageBarItem extends Vue {}
</script>

<style lang="less" scoped>
// 头像
.head {
  display: flex;
  // position: relative;
  margin: auto;
  .headportrait {
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }
}
.main {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-left: 10px;
  font-size: 14px;
  .left {
    flex: 1;
    text-align: left;
    .name {
      margin-bottom: 5px;
    }
    .content {
      font-size: 12px;
    }
  }
}
.time {
  margin: auto;
  width: 70px;
}
</style>

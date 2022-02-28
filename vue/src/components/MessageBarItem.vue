<template>
  <div class="head">
    <img :src="src" alt="" />
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
.head {
  // position: relative;
  width: 35px;
  height: 35px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  img {
    width: 32px;
    height: 32px;
  }
}
.main {
  flex: 1;
  display: flex;
  justify-content: space-between;
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
  width: 70px;
}
</style>
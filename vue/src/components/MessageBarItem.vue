<template>
  <div class="head">
    <slot name="left" class="left"></slot>
    <!-- <img :src="src" alt="" /> -->
    <Icons class="headportrait" default="defaultAvatar" :name="src" />
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
import Icons from "@/components/Icons.vue";

@Options({
  components: { Icons },
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
      color: #999;
      font-size: 10px;
    }
  }
}
.time {
  color: #999;
  font-size: 14px;
}
</style>

<template>
  <!-- 消息 - 消息栏 -->
  <router-link :to="to" class="messagebar">
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    to: String,
  },
})
export default class MessageBar extends Vue {}
</script>

<style lang="less" scoped>
.messagebar {
  display: flex;
  padding: 10px 15px;
  height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #d5d5d5;
}
</style>
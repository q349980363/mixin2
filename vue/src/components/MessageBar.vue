<template>
  <router-link :to="to" class="messageline">
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
.messageline {
  display: flex;
  // align-items: center;
  // margin-top: 10px;
  padding: 0 15px;
  height: 52px;
  // line-height: 52px;
  background-color: #fff;
  // box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e6e6e6;
}
</style>
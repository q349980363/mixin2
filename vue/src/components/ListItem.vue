<template>
  <!-- 列表框 -->
  <router-link :to="to" class="listitem" v-if="to">
    <slot name="left" class="left"></slot>
    <div class="info">{{ name }}</div>
    <slot></slot>
    <img
      v-if="to != ''"
      class="return-right"
      src="@/assets/images/return-right.svg"
      alt=""
    />
  </router-link>
  <div :to="to" class="listitem" v-else>
    <slot name="left" class="left"></slot>
    <div class="info">{{ name }}</div>
    <slot></slot>
    <img
      v-if="to != ''"
      class="return-right"
      src="@/assets/images/return-right.svg"
      alt=""
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    to: {
      type: String,
      default: "",
    },
    name: String,
  },
})
export default class ListItem extends Vue {}
</script>

<style lang="less" scoped>
.listitem {
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  height: 45px;
  line-height: 45px;
  padding: 0 15px;
  background-color: #fff;
  cursor: pointer;
  &:last-child {
    border-bottom: none;
  }
  .info {
    flex: 1;
    text-align: left;
  }
  // img {
  //   width: 22px;
  //   height: 22px;
  // }
  .return-right {
    margin-top: 16px;
    margin-left: 10px;
    width: 12px;
    height: 12px;
  }
}
</style>

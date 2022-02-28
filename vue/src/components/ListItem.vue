<template>
  <!-- 列表框 -->
  <router-link :to="to" class="listitem">
    <slot name="left" class="left"></slot>
    <div class="info">{{ name }}</div>
    <slot></slot>
    <img class="return-right" src="@/assets/images/return-right.svg" alt="" />
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    to: String,
    name: String,
  },
})
export default class ListItem extends Vue {}
</script>

<style lang="less" scoped>
.listitem {
  border-bottom: 1px solid #cdcdcd;
  display: flex;
  align-items: center;
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
    width: 12px;
    height: 12px;
    margin-left: 8px;
  }
}
</style>

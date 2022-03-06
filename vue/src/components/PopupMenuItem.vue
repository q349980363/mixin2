<template>
  <router-link :to="to" class="PopupMenuItem">
    <img :src="src" alt="" />
    <div class="PopupMenuName">{{ title }}</div>
  </router-link>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    src: String,
    title: String,
    to: String,
  },
})
export default class PopupMenuItem extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.PopupMenuItem {
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: #fff;
  cursor: pointer;
  img {
    width: 18px;
    height: 18px;
  }
  border-top: 1px solid #e5e5e5;
  &:first-child {
    border-top: none;
  }
}
.PopupMenuName {
  margin-left: 10px;
  flex: 1;
  text-align: left;
}
</style>

<style lang="less"></style>

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
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  // align-self: center;
  align-items: center;
  // margin: 0 auto;
  // text-align: left;
  padding: 5px;
  img {
    // padding-top: 5px;
    width: 18px;
    height: 18px;
  }

  // line-height: 25px;
  // height: 25px;

  border-top: 1px solid #e5e5e5;
  &:first-child {
    border-top: none;
  }
}
.PopupMenuName {
  margin-left: 10px;
  flex: 1;
  // text-align:justify;
  text-align: left;
}
</style>

<style lang="less"></style>

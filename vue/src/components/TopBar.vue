<template>
  <div class="TopBar">
    <div>{{ title }}</div>
    <div class="title-icons">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
  },
})
export default class TopBar extends Vue {
  title!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.TopBar {
  display: flex;
  // justify-content: space-between;

  padding: 12px 15px;
  height: 45px;
  border-bottom: 1px solid #cdcdcd;
  font-size: 18px;
  font-weight: 700;
}
.title-icons {
  flex: 1;
  text-align: right;
}
</style>
<style lang="less">
.title-icons > * {
  display: inline-block;
  // text-align: right;
}
</style>

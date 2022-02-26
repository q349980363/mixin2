<template>
  <div class="TopBarBack">
    <img src="@/assets/images/return.svg" class="back" @click="back()" alt="" />
    <div class="title-name">{{ title }}</div>
    <div class="tool">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { Action } from "vuex-class";
@Options({
  props: {
    title: String,
  },
})
export default class BaseTopBarBack extends Vue {
  title!: string;
  @Action("back")
  back?: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.TopBarBack {
  display: flex;
  justify-content: space-between;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #cdcdcd;
  font-size: 18px;
  font-weight: 700;
}
.back {
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
}
.title-name{
  flex:1;
}
.tool {
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
}
</style>

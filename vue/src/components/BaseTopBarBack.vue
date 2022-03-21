<template>
  <div class="BaseTopBarBack">
    <div class="back">
      <div @click="back()" class="back-trigger">
        <img v-if="showBack" src="@/assets/images/return.svg" alt="" />
      </div>
    </div>
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
    title: {
      type: String,
      default: () => "",
    },
    showBack: {
      type: Boolean,
      default: () => true,
    },
  },
})
export default class BaseTopBarBack extends Vue {
  title!: string;
  showBack!: boolean;
  @Action("back")
  back?: () => void;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.BaseTopBarBack {
  display: flex;
  // justify-content: space-between;
  height: 48px;
  line-height: 48px;
  // padding: 12px 0;
  @color: #fff;
  background-color: @color;
  border-bottom: 1px solid darken(@color, 10%);
  // border-top: 1px solid darken(@color, 10%);
  font-size: 18px;
  font-weight: 700;
}
.back {
  flex: 1;
  text-align: left;
  cursor: pointer;
  img {
    height: 16px;
    margin: auto 0;
    // padding: 5px;
  }
  .back-trigger {
    display: inline-block;
    padding: 0 15px;
  }
}
.title-name {
}

.tool {
  flex: 1;
  text-align: right;
  // padding-left: 15px;
  // padding-right: 15px;
  // display: flex;
  // justify-content: flex-end;
}
</style>

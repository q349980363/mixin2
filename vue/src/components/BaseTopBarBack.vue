<template>
  <div class="BaseTopBarBack">
    <div class="back">
      <img
        v-if="showBack"
        src="@/assets/images/return.svg"
        @click="back()"
        alt=""
      />
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
  height: 45px;
  line-height: 45px;
  @color: #fff;
  background-color: @color;
  border-bottom: 1px solid darken(@color, 10%);
  border-top: 1px solid darken(@color, 10%);
  font-size: 18px;
  font-weight: 700;
}
.back {
  cursor: pointer;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  flex: 1;
  justify-content: flex-start;
  display: flex;
  img {
    height: 16px;
    margin: auto 0;
  }
}
.title-name {
}
.tool {
  text-align: right;
  flex: 1;
  margin-left: 15px;
  margin-right: 15px;
  display: flex;
  // align-items: center;
  justify-content: flex-end;
}
</style>

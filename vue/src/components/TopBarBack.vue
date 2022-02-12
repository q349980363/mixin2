<template>
  <div class="TopBarBack">
    <img
      src="../assets/images/return.svg"
      class="back"
      @click="back()"
      alt=""
    />
    <div class="title-name">{{ title }}</div>
    <div class="tool">
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
export default class TopBarBack extends Vue {
  title!: string;
  back() {
    if (window.history.length <= 2) {
      //TODO 当页面进入时记录历史记录长度
      // 如果与页面进入时长度相等则无法后退
      this.$router.replace("/homenav");
    } else {
      this.$router.go(-1);
    }
  }
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
.tool {
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;
}
</style>

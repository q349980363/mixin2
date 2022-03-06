<template>
  <!-- 搜索页 -->
  <div class="searchpage">
    <div class="searchpage-main">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索" />
      <div class="main-text" @click="back()">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

export default class SearchPage extends Vue {
  @Action("back")
  back?: () => void;
}
</script>

<style lang="less" scoped>
.searchpage {
  .searchpage-main {
    position: relative;
    display: flex;
    padding: 0 15px;
    width: 100%;
    height: 45px;
    line-height: 45px;
    img {
      position: absolute;
      left: 20px;
      top: 14px;
      width: 16px;
      height: 16px;
    }
    input {
      flex: 1;
      margin: auto;
      padding: 0 30px;
      height: 36px;
      border-radius: 5px;
      font-size: 16px;
      border: none;
    }
    .main-text {
      margin-left: 5px;
      cursor: pointer;
    }
  }
}
</style>

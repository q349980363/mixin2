<template>
  <!-- 搜索页 -->
  <div class="search-users">
    <div class="title">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索" />
      <div @click="back()">取消</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

export default class SearchUsers extends Vue {
  @Action("back")
  back?: () => void;
}
</script>

<style lang="less" scoped>
.search-users {
  .title {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 15px;
    width: 100%;
    height: 45px;
    img {
      position: absolute;
      left: 20px;
    }
    input {
      flex: 1;
      height: 36px;
      border-radius: 5px;
      padding: 0 30px;
      font-size: 16px;
      border: none;
    }
  }
}
</style>

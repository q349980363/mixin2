<template>
  <!-- 查找聊天记录 -->
  <div class="searchbox">
    <img class="searchbox-ico" src="@/assets/images/search.svg" alt="" />
    <input class="searchbox-input" type="text" placeholder="搜索" />
    <div>
      <div class="searchbox-btn">搜索</div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";

@Options({
  components: {},
})
export default class SearchBox extends Vue {}
</script>
<style lang="less" scoped>
.searchbox {
  position: relative;
  display: flex;
  padding: 0 15px;
  background-color: #ffffff;
  border-bottom: 1px solid #d5d5d5;

  .searchbox-ico {
    position: absolute;
    top: 15px;
    left: 15px;
    width: 16px;
  }
  .searchbox-input {
    flex: 1;
    height: 45px;
    padding-left: 26px;
    border: none;
  }
  .searchbox-input:focus {
    border-color: none;
    outline: 0;
    box-shadow: none;
  }
  .searchbox-btn {
    padding: 5px 10px;
    background-color: #e2e2e2;
    margin-top: 8px;
    margin-left: 15px;
    color: #000;
    cursor: pointer;
  }
}
</style>

<template>
  <!-- 搜索页 -->
  <div class="searchpageuser">
    <BaseTopBarBack title="查找聊天记录" />
    <div class="searchpageuser-searchbox">
      <img class="searchbox-ico" src="@/assets/images/search.svg" alt="" />
      <input
        class="searchbox-input"
        type="text"
        placeholder="搜索联系人"
        v-model="username"
      />
      <div>
        <div class="searchbox-btn" @click="clickSearch">搜索</div>
      </div>
    </div>

    <div class="searchpageuser-list"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Options({
  components: {},
})
export default class SearchPage extends Vue {}
</script>

<style lang="less" scoped>
.searchpageuser {
  .searchpageuser-searchbox {
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
  .searchpageuser-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

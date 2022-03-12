<template>
  <!-- 搜索页 -->
  <div class="searchpagegroup">
    <BaseTopBarBack title="查找聊天记录" />
    <div class="searchpagegroup-searchbox">
      <div class="searchbox-group">
        <input type="text" placeholder="搜索" v-model="username" />
        <img class="input-ico" src="@/assets/images/search.svg" alt="" />
      </div>

      <div class="searchbox-text" @click="back()">取消</div>
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
.searchpagegroup {
  .searchpagegroup-searchbox {
    display: flex;
    padding: 5px 10px;
    background-color: #ccc;
    border-bottom: 1px solid #cdcdcd;
    .searchbox-group {
      flex: 1;
      position: relative;
      input {
        width: 100%;
        height: 36px;
        padding-left: 25px;
        line-height: 36px;
        font-size: 16px;
        border: none;
        border-radius: 5px;
      }
      .input-ico {
        position: absolute;
        top: 10px;
        left: 5px;
        width: 15px;
      }
    }
    .searchbox-text {
      margin-left: 10px;
      padding-left: 8px;
      padding-right: 8px;
      background-color: #fff;
      color: #000;
      line-height: 36px;
      cursor: pointer;
    }
  }
}
</style>

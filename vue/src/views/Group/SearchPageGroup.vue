<template>
  <!-- 搜索页 -->
  <div class="searchpagegroup">
    <BaseTopBarBack title="查找聊天记录" />
    <div class="searchpagegroup-searchbox">
      <img class="searchbox-ico" src="@/assets/images/search.svg" alt="" />
      <input
        class="searchbox-input"
        v-model="searchInput"
        type="text"
        placeholder="搜索"
      />
      <div>
        <div class="searchbox-btn" v-if="!search" @click="search = searchInput">
          搜索
        </div>
        <div class="searchbox-btn" v-else @click="search = ''">取消</div>
      </div>
    </div>
    <div class="searchpagegroup-list"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";

@Options({
  components: {},
})
export default class SearchPageGroup extends Vue {
  searchInput = "";
  search = "";
  users: any[] = [];
  get Users() {
    return this.users.filter((v) => v.Nickname.indexOf(this.search) != -1);
  }
}
</script>

<style lang="less" scoped>
.searchpagegroup {
  .searchpagegroup-searchbox {
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
  .searchpagegroup-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

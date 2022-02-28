<template>
  <!-- 添加朋友 -->
  <div class="addusers">
    <BaseTopBarBack title="搜索用户" />
    <div class="searchbox">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索联系人" v-model="username" />
      <div class="search" @click="clickSearch">搜索</div>
    </div>

    <div class="list">
      <router-link
        to="/askusers"
        class="row"
        v-for="(item, i) in usernameList"
        :key="i"
      >
        <div class="headportrait">
          <img src="@/assets/images/nan1.svg" alt="" />
        </div>
        <div class="name">{{ item }}</div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";

@Options({
  components: {},
})
export default class AddUsers extends Vue {
  username = "";
  @State("hub") hub!: Hub;

  usernameList: string[] = [];
  async clickSearch() {
    this.usernameList = await this.hub.invoke(
      "friends",
      "SearchUsername",
      this.username
    );
    console.log(this.username, this.usernameList);
  }
}
</script>

<style lang="less" scoped>
.addusers {
  .searchbox {
    position: relative;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    background-color: #ccc;
    // margin-top: 10px;
    // margin-bottom: 10px;
    border-bottom: 1px solid #cdcdcd;
    img {
      position: absolute;
      left: 22px;
      width: 18px;
    }
    input {
      flex: 1;
      height: 36px;
      border-radius: 5px;
      padding: 0 30px;
      font-size: 16px;
      border: none;
    }
    .search {
      background-color: #fff;
      color: #000;
      margin-left: 10px;
      padding-left: 8px;
      padding-right: 8px;
      line-height: 36px;

      cursor: pointer;
    }
  }
  .list {
    overflow-y: auto;
    flex: 1;
    .row {
      display: flex;
      align-items: center;
      padding: 0 15px;
      height: 80px;
      background-color: #fff;
      color: #000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .headportrait {
        width: 50px;
        height: 50px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        img {
          width: 48px;
          height: 48px;
        }
      }
      .name {
        flex: 1;
        text-align: left;
        margin-left: 20px;
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
</style>

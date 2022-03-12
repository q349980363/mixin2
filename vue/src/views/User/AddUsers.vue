<template>
  <!-- 添加朋友 -->
  <div class="addusers">
    <BaseTopBarBack title="搜索用户" />

    <div class="addusers-searchbox">
      <div class="searchbox-group">
        <input type="text" placeholder="搜索联系人" v-model="username" />
        <img class="input-ico" src="@/assets/images/search.svg" alt="" />
      </div>

      <div class="searchbox-text" @click="clickSearch">搜索</div>
    </div>

    <div class="addusers-list">
      <div class="addusers-list-row" v-for="(item, i) in usernameList" :key="i">
        <img
          class="row-headportrait"
          src="@/assets/images/avatar/nan1.svg"
          alt=""
        />
        <div class="row-content">
          <div class="content-name">{{ item }}</div>
          <div class="content-number">UID:0</div>
        </div>
        <div class="row-but" @click="clickSend()">添加</div>
      </div>
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
  @State("userInfo") userInfo!: any;
  @Action("tips") tips!: (msg: string) => void;

  usernameList: string[] = [];
  async clickSearch() {
    // this.usernameList = [];
    const data = await this.hub.invoke<string[]>(
      "Friends",
      "SearchUsername",
      this.username
    );

    console.log(this.username, data);
    if (!data) {
      this.tips("未找到用户.");
    } else {
      this.tips(`查找成功,共找到${data.length}名用户.`);
      data.forEach((v) => {
        this.usernameList.push(v);
      });
    }
  }
  async clickSend() {
    var response = await this.hub.invoke("Friends", "Apply", this.username);
    //response[0] 请求是否成功
    this.tips(response[1]);
    if (response[0]) {
      // this.$router.go(-2);
    }
  }
}
</script>

<style lang="less" scoped>
.addusers {
  .addusers-searchbox {
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
  .addusers-list {
    overflow-y: auto;
    flex: 1;
    .addusers-list-row {
      display: flex;
      padding: 12px 15px;
      background-color: #fff;
      color: #000;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .row-headportrait {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
      }
      .row-content {
        flex: 1;
        margin: auto;
        font-size: 18px;
        text-align: left;
        .content-name {
          flex: 1;
          font-weight: 600;
          text-align: left;
        }
        .content-number {
          margin-top: 10px;
          font-size: 16px;
        }
      }
      .row-but {
        margin: auto 0;
        width: 50px;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        background-color: #0b5ed7;
        color: #fff;
        border-radius: 5px;
      }
    }
  }
}
</style>

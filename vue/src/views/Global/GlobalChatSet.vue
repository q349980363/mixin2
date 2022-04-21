<template>
  <!-- 聊天设置 -->
  <div class="globalchatset">
    <BaseTopBarBack title="世界聊天设置" />

    <div class="globalchatset-list">
      <ListItem to="/searchpageuser" name="查找聊天记录" />
      <ListItem
        @click="showModel1 = true"
        name="清空聊天记录"
        class="list-clear"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
import Hub from "@/hub";
import Icons from "@/components/Icons.vue";
import Modal from "@/components/Modal.vue";
@Options({
  components: {
    ListItem,
    Icons,
    Modal,
  },
})
export default class GlobalChatSet extends Vue {
  //好友用户信息
  UserInfo!: any;
  showModel1 = false;
  showModel2 = false;
  @State("hub") hub!: Hub;
  msg!: string;
  @State("userInfo") MyUserInfo!: any;
  @Action("tips") tips!: (msg: string) => void;
  @Action("back")
  back!: () => void;
  created() {
    this.UserInfo = this.$route.query;
  }
  clickLogin() {
    localStorage.clear();
    this.$router.push("/login");
    this.$store.commit("LoginSuccess", null);
    // this.$store.commit("xxx");
  }
  async clickClear() {
    var response = await this.hub.invoke<string>(
      "Friends",
      "ClearChat",
      this.UserInfo.UserName
    );
    this.tips(response);
  }
  async clickDelete() {
    var response = await this.hub.invoke<string>(
      "Friends",
      "Delete",
      this.UserInfo.UserName
    );
    this.tips(response);
    this.$router.go(-2);
  }
}
</script>

<style lang="less" scoped>
.userchatset {
  .userchatset-info {
    display: flex;
    padding: 25px 15px;
    background-color: #fff;
    border-bottom: 1px solid #d5d5d5;
    img {
      width: 50px;
      border: 1px solid #d5d5d5;
    }
    .info-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      text-align: left;
      .main-name {
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 700;
      }
      .main-down {
        font-size: 16px;
      }
    }
  }
  .userchatset-list {
    overflow-y: auto;
    flex: 1;
    text-align: left;
    color: #000;
    .list-clear {
      color: #0b5ed7;
    }
    .list-del {
      text-align: center;
      color: #dc3545;
    }
  }
}
</style>

<template>
  <!-- 聊天设置 -->
  <div class="userchatset">
    <BaseTopBarBack title="聊天设置" />
    <div class="userchatset-info">
      <Icons
        class="headportrait"
        default="defaultAvatar"
        :name="UserInfo.Avatars"
      />
      <div class="info-main">
        <div class="main-name">{{ UserInfo.UserName }}</div>
        <div class="main-down">UID:{{ UserInfo.ID }}</div>
      </div>
    </div>
    <div class="userchatset-list">
      <ListItem
        :to="{ path: '/setusername', query: UserInfo }"
        name="设置备注"
      />
      <ListItem to="/searchpageuser" name="查找聊天记录" />
      <ListItem @click="clickClear" name="清空聊天记录" class="list-clear" />
      <ListItem @click="clickDelete" name="删除好友" class="list-del" />
      <SelectPrompt
        text="确定删除和Mg的聊天记录吗?"
        cancel="取消"
        empty="清空"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
import SelectPrompt from "@/components/SelectPrompt.vue";
import Hub from "@/hub";
import Icons from "@/components/Icons.vue";
@Options({
  components: {
    ListItem,
    SelectPrompt,
    Icons,
  },
})
export default class UserChatSet extends Vue {
  //好友用户信息
  UserInfo!: any;
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

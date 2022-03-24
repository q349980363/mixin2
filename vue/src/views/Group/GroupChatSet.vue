<template>
  <!-- 聊天设置 -->
  <div class="groupchatset">
    <BaseTopBarBack title="群聊设置" />
    <div class="groupchatset-info">
      <Icons name="groupHead" />
      <div class="main-name">群1</div>
    </div>
    <div class="groupchatset-list">
      <ListItem to="/setgroupname" name="设置备注" />
      <ListItem to="/groupcard" name="群二维码">
        <img class="list-icon" src="@/assets/images/qrCode.svg" alt="" />
      </ListItem>
      <ListItem to="/searchpagegroup" name="查找聊天记录" />
      <ListItem
        @click="showModel1 = true"
        name="清空聊天记录"
        class="list-clear"
      />
      <ListItem @click="showModel2 = true" name="删除并退出" class="list-del" />
      <Modal
        v-model:show="showModel1"
        cancel="取消"
        color="#DC3545"
        ok="清空"
        @onOk="clickClear"
      >
        确定删除群的聊天记录吗?
      </Modal>
      <Modal
        v-model:show="showModel2"
        cancel="取消"
        ok="确定"
        color="#DC3545"
        @onOk="clickDelete"
      >
        删除并退出后,将不再接收此群聊信息
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
import Icons from "@/components/Icons.vue";
import Modal from "@/components/Modal.vue";
@Options({
  components: {
    ListItem,
    Icons,
    Modal,
  },
})
export default class GroupChatSet extends Vue {
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
.groupchatset {
  .groupchatset-info {
    display: flex;
    padding: 25px 15px;
    background-color: #fff;
    border-bottom: 1px solid #d5d5d5;
    img {
      width: 50px;
      border: 1px solid #d5d5d5;
    }
    .main-name {
      flex: 1;
      margin-top: 15px;
      margin-left: 10px;
      text-align: left;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .groupchatset-list {
    overflow-y: auto;
    flex: 1;
    color: #000;
    text-align: left;
    .list-icon {
      margin-top: 15px;
      width: 15px;
      height: 15px;
    }
    .list-clear {
      color: #0b5ed7;
    }
    .list-del {
      color: #dc3545;
      text-align: center;
    }
  }
}
</style>

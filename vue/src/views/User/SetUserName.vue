<template>
  <!-- 修改用户名称 -->
  <div class="setusername">
    <BaseTopBarBack title="设置备注">
      <div class="setusername-submit" @click="SetNickname()">提交</div>
    </BaseTopBarBack>
    <!-- 设置备注 -->
    <div class="setusername-main">
      <div class="main-top">备注</div>
      <input type="text" v-model="OtherName" />
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
export default class SetUserName extends Vue {
  //好友用户信息
  UserInfo!: any;
  msg!: string;
  @State("hub") hub!: Hub;
  @Action("tips") tips!: (msg: string) => void;
  @Action("getMyUserInfo") getMyUserInfo!: () => void;
  @Action("back")
  back?: () => void;
  // created() {
  //   this.UserInfo = this.$route.query;
  // }
  OtherName: any = "";
  async created() {
    this.OtherName = this.$route.query.Nickname;
  }
  async SetNickname() {
    var response = await this.hub.invoke("User", "SetNickname", this.OtherName);
    this.tips(response);
    await this.getMyUserInfo();
  }
}
</script>

<style lang="less" scoped>
.setusername {
  .setusername-submit {
    display: inline-block;
    margin-right: 15px;
    font-weight: 400;
    font-size: 16px;
    color: #515151;
    cursor: pointer;
  }
  .setusername-main {
    padding: 10px 15px;
    .main-top {
      margin-bottom: 10px;
      text-align: left;
    }
    input {
      padding: 10px;
      width: 100%;
      height: 46px;
      border: none;
      background-color: #e2e2e2;
      border-radius: 5px;
    }
    input::-webkit-input-placeholder {
      color: #989898;
    }
  }
}
</style>

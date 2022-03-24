<template>
  <!-- 设置昵称 -->
  <div class="setnickname">
    <BaseTopBarBack title="设置昵称">
      <div class="setnickname-submit" @click="SetNickname()">提交</div>
    </BaseTopBarBack>

    <div class="setnickname-list">
      <div class="list-content">
        <input type="text" v-model="UserName" />
        <div class="content-tips">好名字可以让你的朋友更容易记住你</div>
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
export default class SetNickname extends Vue {
  @State("userInfo") userInfo!: any;
  msg!: string;
  @Action("back")
  back?: () => void;
  @State("hub") hub!: Hub;
  @Action("getMyUserInfo") getMyUserInfo!: () => void;
  @Action("tips") tips!: (msg: string) => void;
  UserName = "";
  async created() {
    this.UserName = this.userInfo.Nickname;
  }
  async SetNickname() {
    var response = await this.hub.invoke("User", "SetNickname", this.UserName);
    this.tips(response);
    await this.getMyUserInfo();
  }
}
</script>

<style lang="less" scoped>
.setnickname {
  .setnickname-submit {
    margin-right: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #515151;
    cursor: pointer;
  }
  .setnickname-list {
    overflow-y: auto;
    flex: 1;
    .list-content {
      input {
        padding: 12px 0 12px 15px;
        width: 100%;
        border: none;
        border-bottom: 1px solid #d5d5d5;
        border-radius: 5px;
      }
      input::-webkit-input-placeholder {
        color: #999999;
      }
      .content-tips {
        padding-top: 10px;
        padding-left: 15px;
        text-align: left;
        color: #999999;
        font-size: 14px;
      }
    }
  }
}
</style>

<template>
  <!-- 修改群名称 -->
  <div class="setmyname">
    <BaseTopBarBack title="设置名字">
      <div class="setmyname-submit" @click="SetNickname()">提交</div>
    </BaseTopBarBack>
    <div class="setmyname-main">
      <input type="text" v-model="UserName" />
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
export default class SetMyName extends Vue {
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
  async SetNickname(name: string) {
    var response = await this.hub.invoke("User", "SetNickname", this.UserName);
    this.tips(response);
    await this.getMyUserInfo();
  }
}
</script>

<style lang="less" scoped>
.setmyname {
  .setmyname-submit {
    font-size: 16px;
    font-weight: 400;
    color: #515151;
    cursor: pointer;
  }
  .setmyname-main {
    padding: 5px 10px;
    background-color: #ccc;
    input {
      padding-left: 10px;
      width: 100%;
      height: 36px;
      border: none;
      background-color: #fff;
      border-radius: 5px;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
    }
  }
}
</style>

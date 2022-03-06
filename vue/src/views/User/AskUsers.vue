<template>
  <!-- 添加朋友-详情页  不要了!!-->
  <div class="askusers">
    <BaseTopBarBack title="添加朋友">
      <div class="submit" @click="clickSend()">发送</div>
    </BaseTopBarBack>

    <div class="askusers-row">
      <img class="headportrait" src="@/assets/images/avatar/nan1.svg" alt="" />

      <div class="info">
        <div class="name">{{ username }}</div>
        <div class="number">账号:1111111</div>
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
export default class AskUsers extends Vue {
  @State("hub") hub!: Hub;
  @Action("tips") tips!: (msg: string) => void;

  public get username(): string {
    return this.$route.params.username as string;
  }

  async clickSend() {
    var response = await this.hub.invoke("Friends", "Apply", this.username);
    //response[0] 请求是否成功

    if (response[0]) {
      this.tips(response[1]);
      this.$router.go(-2);
    }
  }
}
</script>

<style lang="less" scoped>
.askusers {
  .submit {
    font-weight: normal;
    cursor: pointer;
  }
  .row {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor: pointer;
    .headportrait {
      width: 50px;
      height: 50px;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
    }
    .info {
      flex: 1;
      text-align: left;
      margin-left: 20px;
      font-size: 18px;
      .number {
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }
}
</style>

<template>
  <div class="material">
    <!-- 个人信息 -->
    <div class="container">
      <img src="@/assets/images/avatar/nv.svg" alt="" />
      <div class="container-main">
        <div class="main-name">{{ userInfo.UserName }}</div>
        <div class="main-down">UID:{{ userInfo.ID }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class My extends Vue {
  msg!: string;
  @State("userInfo") userInfo!: any;
  clickLogin() {
    localStorage.clear();
    this.$router.push("/login");
    this.$store.commit("LoginSuccess", null);
    // this.$store.commit("xxx");
  }
}
</script>

<style lang="less" scoped>
.material {
  .container {
    display: flex;
    padding: 25px 15px;
    background-color: #fff;
    border-bottom: 1px solid #d5d5d5;
    img {
      width: 50px;
      border: 1px solid #d5d5d5;
    }
    .container-main {
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
}
</style>
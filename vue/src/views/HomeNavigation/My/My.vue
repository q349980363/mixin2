<template>
  <!-- 我的页 -->
  <div class="my">

      <router-link to="/userinfo" class="my-message">
       
        <!-- 个人信息 -->
        <div class="portrait">
          <img src="@/assets/images/nv.svg" alt="" />
        </div>
        <div class="main">
          <div class="name">{{ userInfo.UserName }}</div>
          <div class="account">账号:11111111</div>
        </div>
        <div class="card"><img src="@/assets/images/card.svg" alt="" /></div>
        <div class="return-right">
          <img src="@/assets/images/return-right.svg" alt="" />
        </div>
      

    </router-link>

    <div class="my-list">
 
        <router-link ta to="/settings" class="row">
          <img src="@/assets/images/set.svg" alt="" />
          <span>设置</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </router-link>

        <router-link to="/about" class="row">
          <img src="@/assets/images/about.svg" alt="" />
          <span>关于</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </router-link>

        <router-link to="/administer" class="row">
          <img src="@/assets/images/administer.svg" alt="" />
          <span>后台管理</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </router-link>

      <div class="but" @click="clickLogin()">
        退出登录
        <router-link to="/login">123</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
import { State, Action } from "vuex-class";

@Options({
  components: { BottomNavigationBar },
})
export default class My extends Vue {
  msg!: string;
  @State("userInfo") userInfo!: any;
  clickLogin() {
    localStorage.clear();
    this.$router.push("/login");
  }
}
</script>
<style lang="less" scoped>
.my {
  overflow-y: auto;
  height: 100%;
  // flex: 1;
  display: flex;
  flex-direction: column;
  .my-message {
    display: flex;
    align-items: center;
    height: 170px;
    background-color: #fff;
    font-size: 18px;
    .portrait {
      margin-left: 30px;
      width: 70px;
      height: 70px;
      border: 1px solid #f5f5f5;
      img{
         width: 70px;
      height: 70px;
      }
    }
    .main {
      flex: 1;
      margin-left: 10px;
      text-align: left;
      .name {
        font-weight: 700;
      }
      .account {
        margin-top: 5px;
        font-size: 16px;
      }
    }
    .card {
      margin-right: 30px;
    }
    .return-right {
      width: 12px;
      height: 12px;
      margin-right: 15px;
    }
  }

  .my-list {
    overflow-y: auto;
    flex: 1;
    text-align: left;
    .row {
      display: flex;
      align-items: center;
      height: 45px;
      line-height: 45px;
      padding: 0 15px;
      margin: 10px 0;
      background-color: #fff;
      cursor: pointer;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      img {
        width: 22px;
        height: 22px;
      }
      span {
        flex: 1;
        margin-left: 5px;
      }
      .return-right {
        width: 12px;
        height: 12px;
      }
    }
    .but {
      padding: 0 15px;
      margin: 10px 0;
      text-align: center;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      color: #dc3545;
      // a {
      //   display: block;
      //   color: #dc3545;
      // }
    }
  }
}
</style>

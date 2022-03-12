<template>
  <!-- 登录 -->
  <div class="login">
    <div class="login-title">雅茹软件</div>
    <img class="login-icon" src="@/assets/images/logo.svg" alt="" />

    <input
      class="username"
      type="text"
      placeholder="用户名"
      v-model="username"
    />
    <input
      class="password"
      type="password"
      placeholder="密码"
      v-model="password"
    />

    <!-- <router-link :to="{ name: 'MessageList' }"> -->
    <button class="login-but" @click="clickLogin()">登录</button>
    <!-- </router-link> -->
    <router-link class="login-reg" to="/register">注册新用户</router-link>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";

// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    // HelloWorld,
  },
})
export default class Login extends Vue {
  username: string = localStorage.username;
  password!: string;
  @State("hub") hub!: Hub;
  @Action("tokenLogin") tokenLogin!: (token: string) => void;
  @Action("tips") tips!: (msg: string) => void;
  async clickLogin() {
    localStorage.username = this.username;
    if (!this.username || !this.password) {
      this.tips("用户名或密码不能为空");
      return;
    }
    var response = await this.hub.invoke(
      "Login",
      "Login",
      this.username,
      this.password
    );
    console.log(response);
    const msg = response[1];
    const state = response[0];
    if (state) {
      this.tips("登录成功");
      const token = msg;
      this.tokenLogin(msg);
    } else {
      this.tips("登录失败," + msg);
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  padding: 15px;
  margin: auto;
  width: 100%;
  max-width: 330px;
  text-align: center;
  padding-top: 170px;
  .login-icon {
    margin: 30px auto;
    width: 60px;
    height: 60px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .username {
    padding-left: 10px;
    width: 300px;
    height: 40px;
    border: 1px solid #bbbbbb;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
  }
  .username:focus-within {
    z-index: 2;
    position: relative;
  }
  .password {
    padding-left: 10px;
    width: 300px;
    height: 40px;
    border: 1px solid #bbbbbb;
    border-radius: 0 0 8px 8px;
  }
  .login-but {
    margin-top: 30px;
    width: 300px;
    height: 40px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border: 1px solid #ced4da;
    border-radius: 8px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    cursor: pointer;
  }
  .login-but:focus {
    background-color: #0b5ed7;
    color: #fff;
    border-color: #0a58ca;
    box-shadow: rgba(13, 110, 253, 0.25) 0px 0px 0px 4px;
  }
  .login-but:active {
    background-color: #0b5ed7;
  }
  .login-reg {
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
  }
}
</style>

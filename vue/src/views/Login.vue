<template>
  <!-- 登录 -->
  <div class="login">
    <img src="@/assets/images/logo.svg" alt="" />

    <input class="text" type="text" placeholder="用户名" v-model="username" />
    <input class="pass" type="password" placeholder="密码" v-model="password" />

    <!-- <router-link :to="{ name: 'MessageList' }"> -->
    <button class="but" @click="clickLogin()">登录</button>
    <!-- </router-link> -->
    <router-link class="reg" to="/register">注册新用户</router-link>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    // HelloWorld,
  },
})
export default class Login extends Vue {
  username!: string;
  password!: string;
  @State("hub") hub!: Hub;
  async clickLogin() {
    if (!this.username || !this.password) {
      alert("用户名或密码不能为空");
      return;
    }
    var response = await this.hub.invoke(
      "login",
      "Login",
      this.username,
      this.password
    );
    console.log(response);
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  text-align: center;
  /* background-color: #fff; */
  padding-top: 170px;
  img {
    width: 60px;
    height: 60px;
    margin: 30px auto;
  }
  .text {
    padding-left: 10px;
    width: 300px;
    height: 40px;
    border: 1px solid #bbbbbb;
    border-bottom: none;
    border-radius: 8px 8px 0 0;
  }
  .text:focus-within {
    z-index: 2;
    position: relative;
  }
  .pass {
    padding-left: 10px;
    width: 300px;
    height: 40px;
    border: 1px solid #bbbbbb;
    border-radius: 0 0 8px 8px;
  }
  .but {
    margin-top: 30px;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    background-color: #007bff;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .but:focus {
    color: #fff;
    background-color: #0b5ed7;
    border-color: #0a58ca;
    box-shadow: rgba(13, 110, 253, 0.25) 0px 0px 0px 4px;
  }
  .but:active {
    background-color: #0b5ed7;
  }
  .reg {
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
  }
}
</style>

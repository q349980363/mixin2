<template>
  <!-- 注册 -->
  <div class="register">
    <div class="register-title">注册</div>

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

    <div class="register-tips">请记住您的密码</div>
    <!--
    <div class="clause">
      <img  src="@/assets/images/checked.svg" alt="" />
      <img src="@/assets/images/unchecked.svg" alt="" />

      <span>我已阅读并同意用户注册协议</span>
    </div>
 -->
    <button class="register-but" @click="clickRegister()">注册</button>
    <router-link class="register-reg" to="/">返回登录</router-link>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
@Options({
  components: {},
})
export default class Register extends Vue {
  username: string = localStorage.username;
  password = "";
  @State("hub") hub!: Hub;
  @Action("tokenLogin") tokenLogin!: (token: string) => void;
  @Action("tips") tips!: (msg: string) => void;
  async clickRegister() {
    if (!this.username || !this.password) {
      this.tips("用户名或密码不能为空");
      return;
    }
    var response = await this.hub.invoke(
      "Login",
      "Register",
      this.username,
      this.password
    );
    console.log(response);
    const msg = response[1];
    const state = response[0];
    localStorage.username = this.username;
    if (state) {
      this.tips("注册成功");
      const token = msg;
      this.tokenLogin(msg);
    } else {
      this.tips("注册失败," + msg);
    }
  }
}
</script>

<style lang="less" scoped>
.register {
   padding: 15px;
  margin: auto;
  width: 100%;
  max-width: 330px;
  text-align: center;
  /* background-color: #fff; */
  padding-top: 170px;
  .register-title {
    margin-bottom: 30px;
    font-size: 30px;
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
  .register-tips {
    margin: 5px 0;
    text-align: left;
    font-size: 10px;
  }
  // .clause {
  //   margin: 10px 0;
  //   display: flex;
  //   align-items: center;
  //   font-size: 14px;
  //   height: 20px;
  //   span {
  //     flex: 1;
  //     text-align: left;
  //   }
  // }
  .register-but {
    margin-top: 30px;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: #fff;
    cursor: pointer;
    background-color: #28a745;
    border: 1px solid #ced4da;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .register-but:focus {
    color: #fff;
    background-color: #199235;
    border-color: #227535;
    box-shadow: rgba(19, 82, 0, 0.25) 0px 0px 0px 4px;
  }
  .register-but:active {
    background-color: #199235;
  }
  .register-reg {
    margin-top: 10px;
    font-size: 14px;
    text-align: left;
  }
}
</style>

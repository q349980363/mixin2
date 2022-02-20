<template>
  <!-- 登录 -->
  <div class="login">
    <div class="login-ico"><img src="@/assets/images/logo.svg" alt="" /></div>
    <div class="login-text">
      <input type="text" placeholder="用户名" v-model="username" />
    </div>
    <div class="login-pass">
      <input type="password" placeholder="密码" v-model="password" />
    </div>
    <!-- <router-link :to="{ name: 'MessageList' }"> -->
    <button class="login-but" @click="clickLogin()">登录</button>
    <!-- </router-link> -->
    <div class="login-reg">
      <router-link to="/register">注册新用户</router-link>
    </div>
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
  }
}
</script>

<style scoped>
.login-ico {
  margin-bottom: 30px;
}
</style>

<template>
  <!-- 登录 -->
  <div class="login">
    <div class="login-ico"><img src="../assets/images/logo.svg" alt="" /></div>
    <div class="login-text"><input type="text" placeholder="用户名" /></div>
    <div class="login-pass">
      <input type="password" placeholder="密码" />
    </div>
    <router-link :to="{ name: 'MessageList' }">
      <button class="login-but">登录</button></router-link
    >
    <div class="login-reg">
      <router-link to="/register">注册新用户</router-link>
    </div>
  </div>
</template>

<style scoped>
.login-ico {
  margin-bottom: 30px;
}
</style>

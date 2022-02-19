<template>
  <!-- 注册 -->
  <div class="register">
    <div class="register-word">注册</div>
    <div class="register-text">
      <input type="text" placeholder="用户名" />
    </div>
    <div class="register-pass">
      <input type="password" placeholder="密码" />
    </div>
    <div class="register-tips">请记住您的密码</div>
    <div class="register-clause">
      <div class="clause-item">
        <img src="@/assets/images/unchecked.svg" alt="" />
      </div>
      <div>我已阅读并同意用户注册协议</div>
    </div>
    <button class="register-but">注册</button>
    <div class="register-reg">
      <router-link to="/">返回登录</router-link>
    </div>

    <!-- <img src="../ass"> -->
  </div>
</template>

<style scoped>
.register-word {
  margin-bottom: 30px;
  font-size: 30px;
}

.register-but {
  background-color: #28a745;
}

.register-tips {
  margin: 5px 0;
  text-align: left;
  font-size: 10px;
}

.register-clause {
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  height: 20px;
}
.register-clause .clause-item {
  display: flex;
  align-items: center;
}
</style>

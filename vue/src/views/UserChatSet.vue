<template>
  <!-- 聊天设置 -->
  <div class="userchatset">
    <BaseTopBarBack title="聊天设置" />

    <div class="userchatset-body">
      <div><router-link to="/setusername">修改备注</router-link></div>
      <div><router-link to="/searchusers">查找聊天记录</router-link></div>
      <div class="userchatset-clear">删除聊天记录</div>
      <div class="userchatset-del">删除好友</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.userchatset-body {
  text-align: left;
  color: #000;
}
.userchatset-body  div {
  margin: 5px 0;
  padding: 0 15px;
  height: 49px;
  line-height: 49px;
  background-color: #fff;
  cursor: pointer;
  a {
    display: block;
  }
}
.userchatset-clear {
  color: #0b5ed7;
}
.userchatset-del {
  text-align: center;
  color: #dc3545;
}
</style>

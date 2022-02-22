<template>
  <!-- 聊天设置 -->
  <div class="userchatset">
    <BaseTopBarBack title="聊天设置" />

    <div class="userchatset-list">
      <div><router-link to="/setusername">修改备注</router-link></div>
      <div><router-link to="/searchusers">查找聊天记录</router-link></div>
      <div class="clear">删除聊天记录</div>
      <div class="del">删除好友</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class UserChatSet extends Vue {}
</script>

<style lang="less" scoped>
.userchatset-list {
  overflow-y: auto;
  flex: 1;
  text-align: left;
  color: #000;
  div {
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
  .clear {
    color: #0b5ed7;
  }
  del {
    text-align: center;
    color: #dc3545;
  }
}
</style>

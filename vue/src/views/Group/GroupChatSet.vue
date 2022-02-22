<template>
  <!-- 聊天设置 -->
  <div class="groupchatset">
    <BaseTopBarBack title="群聊设置" />

    <div class="groupchatset-list">
      <div><router-link to="/setgroupname">修改备注</router-link></div>
      <router-link to="/groupcard">
        <div class="card">
          <span>群二维码</span>
          <img src="@/assets/images/card.svg" alt="" />
        </div>
      </router-link>
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
export default class GroupChatSet extends Vue {}
</script>

<style lang="less" scoped>
.groupchatset-list {
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
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    a {
      display: block;
    }
  }
  .card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 22px;
      height: 22px;
    }
  }
  .clear {
    color: #0b5ed7;
  }
  .del {
    text-align: center;
    color: #dc3545;
  }
}

</style>

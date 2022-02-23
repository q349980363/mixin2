<template>
  <!-- 聊天设置 -->
  <div class="groupchatset">
    <BaseTopBarBack title="群聊设置" />

    <div class="groupchatset-list">
      <router-link to="/setgroupname">
        <div>
          <span>修改备注</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </div>
      </router-link>

      <router-link to="/groupcard">
        <div class="card">
          <span>群二维码</span>
          <img src="@/assets/images/card.svg" alt="" />
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </div>
      </router-link>
      <router-link to="/searchusers">
        <div>
          <span>查找聊天记录</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </div>
      </router-link>
      <div class="clear">
        <span>清空聊天记录</span>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
      <div>
        <span class="del">删除并退出</span>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
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
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin: 10px 0;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    span {
      flex: 1;
      text-align: left;
    }
    img {
      width: 22px;
      height: 22px;
    }
    .return-right {
      width: 12px;
      height: 12px;
      margin-left: 8px;
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

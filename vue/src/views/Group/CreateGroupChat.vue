<template>
  <div class="creategroupchat">
    <BaseTopBarBack title="群1">
      <router-link to="/groupchatset" class="tool-trigger">
        <img src="@/assets/images/more.svg" alt="" />
      </router-link>
    </BaseTopBarBack>
    <div class="creategroupchat-list">
      <div class="list-tips">群聊创建成功</div>
    </div>
    <div class="creategroupchat-bar">
      <input type="text" />
      <div>
        <div class="bar-btn">发送</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class CreateGroupChat extends Vue {}
</script>

<style lang="less" scoped>
.creategroupchat {
  .tool-trigger {
    display: inline-block;
    padding: 0 15px;
    img {
      vertical-align: middle;
    }
  }
  .creategroupchat-list {
    overflow-y: auto;
    flex: 1;
    .list-tips {
      margin-top: 10px;
      font-size: 14px;
      color: #999;
    }
  }
  .creategroupchat-bar {
    display: flex;
    background-color: #efefef;
    input {
      flex: 1;
      margin: 5px 10px;
      height: 35px;
      border-radius: 3px;
      border: none;
    }
    .bar-btn {
      padding: 5px 10px;
      margin-top: 10px;
      margin-right: 10px;
      background-color: #007bff;
      color: #ffffff;
      cursor: pointer;
      border-radius: 3px;
    }
  }
}
</style>
<template>
  <!-- 聊天设置 -->
  <div class="userchatset">
    <BaseTopBarBack title="聊天设置" />

    <div class="userchatset-list">
      <ListItem to="/setusername" name="设置备注" />
      <ListItem to="/searchpage" name="查找聊天记录" />
      <ListItem to="/userchatset" name="清空聊天记录" class="list-clear" />
      <ListItem to="/userchatset" name="删除好友" class="list-del" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
@Options({
  components: {
    ListItem,
  },
})
export default class UserChatSet extends Vue {}
</script>

<style lang="less" scoped>
.userchatset {
  .userchatset-list {
    overflow-y: auto;
    flex: 1;
    text-align: left;
    color: #000;
    .list-clear {
      color: #0b5ed7;
    }
    .list-del {
      text-align: center;
      color: #dc3545;
    }
  }
}
</style>

<template>
  <!-- 聊天设置 -->
  <div class="groupchatset">
    <BaseTopBarBack title="群聊设置" />

    <div class="groupchatset-list">
      <ListItem to="/setgroupname" name="设置备注" />
      <ListItem to="/groupcard" name="群二维码">
        <img class="list-icon" src="@/assets/images/qrCode.svg" alt="" />
      </ListItem>
      <ListItem to="/searchpagegroup" name="查找聊天记录" />
      <ListItem to="/groupchatset" name="清空聊天记录" class="list-clear" />
      <ListItem to="/groupchatset" name="删除并退出" class="list-del" />
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
export default class GroupChatSet extends Vue {}
</script>

<style lang="less" scoped>
.groupchatset {
  .groupchatset-list {
    overflow-y: auto;
    flex: 1;
    color: #000;
    text-align: left;
    .list-icon {
      margin: auto;
      width: 16px;
      height: 16px;
    }
    .list-clear {
      color: #0b5ed7;
    }
    .list-del {
      color: #dc3545;
      text-align: center;
    }
  }
}
</style>

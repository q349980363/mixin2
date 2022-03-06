<template>
  <!-- 我的页-设置-聊天 -->
  <div class="settingschat">
    <BaseTopBarBack title="聊天" />

    <div class="settingschat-list">
      <ListItem to="/settingschat" name="清空聊天记录" />
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
.settingschat {
  .settingschat-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

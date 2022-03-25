<template>
  <!-- 我的页-设置-聊天 -->
  <div class="settingschat">
    <BaseTopBarBack title="聊天" />

    <div class="settingschat-list">
      <ListItem name="清空聊天记录" @click="showModel = true" />
      <Modal v-model:show="showModel" cancel="取消" ok="确定" color="#DC3545">
        删除所有数据
      </Modal>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
import Modal from "@/components/Modal.vue";
@Options({
  components: {
    ListItem,
    Modal,
  },
})
export default class UserChatSet extends Vue {
  showModel = false;
}
</script>

<style lang="less" scoped>
.settingschat {
  .settingschat-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

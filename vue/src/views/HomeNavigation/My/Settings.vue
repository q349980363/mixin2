<template>
  <!-- 我的页-设置 -->
  <div class="settings">
    <BaseTopBarBack title="设置" />

    <div class="settings-list">
      <ListItem to="/settingschat" name="聊天" />
      <ListItem to="/settingscurrency" name="通用" />
      <ListItem name="注销账户" @click="showModel = true" class="account" />
      <Modal v-model:show="showModel" cancel="取消" ok="确定" color="#DC3545">
        删除所有数据,永久注销
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
export default class Settings extends Vue {
  showModel = false;
}
</script>

<style lang="less" scoped>
.settings {
  .settings-list {
    overflow-y: auto;
    flex: 1;
    .account {
      color: #dc3545;
    }
  }
}
</style>

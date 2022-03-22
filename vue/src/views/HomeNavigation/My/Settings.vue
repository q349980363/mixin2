<template>
  <!-- 我的页-设置 -->
  <div class="settings">
    <BaseTopBarBack title="设置" />

    <div class="settings-list">
      <ListItem to="/settingschat" name="聊天" />
      <ListItem to="/settingscurrency" name="通用" />
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
export default class Settings extends Vue {}
</script>

<style lang="less" scoped>
.settings {
  .settings-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

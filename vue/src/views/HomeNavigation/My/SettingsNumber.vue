<template>
  <!-- 我的页-设置-账号与安全 -->
  <div class="settingsnumber">
    <BaseTopBarBack title="账号与安全" />

    <div class="settingsnumber-list">
      <ListItem to="/settingsnumber" name="账号" class="list-bar">
        <div>11111111</div>
      </ListItem>
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
.settingsnumber {
  .settingsnumber-list {
    overflow-y: auto;
    flex: 1;
    .list-bar {
      border-bottom: 1px solid #e6e6e6;
    }
  }
}
</style>

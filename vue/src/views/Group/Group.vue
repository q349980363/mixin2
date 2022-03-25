<template>
  <!-- 群列表 -->
  <div class="group">
    <BaseTopBarBack title="群聊" />

    <div class="group-list">
      <UsersColumn to="/groupchat" src="groupHead" name="群"></UsersColumn>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UsersColumn from "@/components/UsersColumn.vue";

@Options({
  components: {
    UsersColumn,
  },
})
export default class Group extends Vue {}
</script>
<style lang="less" scoped>
.group {
  .group-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

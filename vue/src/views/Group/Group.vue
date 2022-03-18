<template>
  <!-- 群列表 -->
  <div class="group">
    <BaseTopBarBack title="群聊" />

    <div class="group-list">
      <MessageBar to="/groupchat">
        <MessageBarItem
          :src="require('@/assets/images/group-head.svg')"
          name="群1"
        >
        </MessageBarItem>
      </MessageBar>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";
@Options({
  components: {
    MessageBar,
    MessageBarItem,
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

<template>
  <!-- 我的页-设置-通用-字体大小 -->
  <div class="settingscurrencysize">
    <BaseTopBarBack title="字体大小" />
    <div class="settingscurrencysize-list">
      <div class="list-main">
        <div class="main-left">
          <Icons class="icons" name="logo" />
        </div>
        <div class="main-right">
          <ChatBubble direction="right" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import ChatBubble from "@/components/ChatBubble.vue";
@Options({
  components: {
    Icons,
    ChatBubble,
  },
})
export default class SettingsCurrencySize extends Vue {}
</script>
<style lang="less" scoped>
.settingscurrencysize {
  .settingscurrencysize-list {
    overflow-y: auto;
    flex: 1;
    .list-main {
      display: flex;
      .main-right {
        flex: 1;
      }
    }
  }
}
</style>
<template>
  <!-- 我的页-设置-通用 -->
  <div class="settingscurrency">
    <BaseTopBarBack title="通用" />
    <div class="settingscurrency-list">
      <ListItem to="/settingscurrencysize" name="字体大小" />
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
export default class SettingsCurrency extends Vue {}
</script>

<style lang="less" scoped>
.settingscurrency {
  .settingscurrency-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

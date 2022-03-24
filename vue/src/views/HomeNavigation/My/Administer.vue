<template>
  <div class="administer">
    <BaseTopBarBack title="后台管理" />

    <div class="administer-list">
      <ListItem to="/administerusers" name="用户列表" />
      <ListItem to="/administergroup" name="群列表" />
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
export default class Administer extends Vue {}
</script>

<style lang="less" scoped>
.administer {
  .administer-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

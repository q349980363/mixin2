<template>
  <!-- 搜索页 -->
  <div class="searchpageuser">
    <BaseTopBarBack title="查找聊天记录" />
    <SearchBox />
    <div class="searchpageuser-list"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import SearchBox from "@/components/SearchBox.vue";

@Options({
  components: { SearchBox },
})
export default class SearchPage extends Vue {}
</script>

<style lang="less" scoped>
.searchpageuser {
  .searchpageuser-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

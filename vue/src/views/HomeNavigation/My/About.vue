<template>
  <div class="about">
    <BaseTopBarBack title="关于" />
    <Icons name="logo" class="logo-icon" />

    <div class="about-list">
      <ListItem to="/aboutIntroduce" name="功能介绍" />
      <ListItem name="检查新版本" />
      <ListItem name="官网" />
    </div>
    <div class="about-info">灵翼软件开发</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
import Icons from "@/components/Icons.vue";
@Options({
  components: {
    ListItem,
    Icons,
  },
})
export default class About extends Vue {}
</script>

<style lang="less" scoped>
.about {
  .logo-icon {
    margin: 20px auto;
    width: 60px;
    height: 60px;
  }
  .about-list {
    overflow-y: auto;
    flex: 1;
  }
  .about-info {
    height: 40px;
  }
}
</style>

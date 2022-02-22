<template>
  <!-- 群二维码 -->
  <div class="groupcard">
    <BaseTopBarBack title="群二维码名片" />
    <div class="groupcard-body">
      <div class="body-top">
        <img src="@/assets/images/group-head.svg" alt="" />
        <span>群1</span>
      </div>
      <div class="body-box"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class GroupCard extends Vue {}
</script>

<style lang="less" scoped>
.groupcard-body {
  margin: 100px 30px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  .body-box {
    margin: 30px;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
}
</style>
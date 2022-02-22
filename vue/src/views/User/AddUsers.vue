<template>
  <!-- 添加用户 -->
  <div class="addusers">
    <BaseTopBarBack title="添加" />

    <div class="search">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索联系人" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class AddUsers extends Vue {}
</script>

<style lang="less" scoped>
.addusers {
  .search {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-top: 10px;
    width: 100%;
    height: 45px;
    img {
      position: absolute;
      left: 20px;
    }
    input {
      flex: 1;
      height: 49px;
      border-radius: 5px;
      padding: 0 30px;
      font-size: 16px;
      border: 1px solid #cdcdcd;
    }
  }
}
</style>

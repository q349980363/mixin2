<template>
  <div class="administergroup">
    <BaseTopBarBack title="群列表" />

    <div class="administergroup-list">
      <div class="row" v-for="i in 15" :key="i">
        <div class="left">
          <div class="portrait">
            <img src="@/assets/images/group-head.svg" alt="" />
            <span>群1</span>
          </div>
        </div>
        <div class="main">
          <div>群主</div>
          <div>群人数</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class AdministerGroup extends Vue {}
</script>

<style lang="less" scoped>
.administergroup-list {
  overflow-y: auto;
  flex: 1;
  .row {
    display: flex;
    margin-top: 10px;
    padding: 0 15px;
    height: 65px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    .left {
      padding: 5px 0;
      .portrait {
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
    .main {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      text-align: left;
      padding: 8px 0;
      line-height: 1.5;
    }
  }
}
</style>
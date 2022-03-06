<template>
  <div class="administergroup">
    <BaseTopBarBack title="群列表" />

    <div class="administergroup-list">
      <div class="administergroup-list-row" v-for="i in 20" :key="i">
        <div class="row-left">
          <img
            class="headportrait"
            src="@/assets/images/group-head.svg"
            alt=""
          />
          <div class="row-left-text">群1</div>
        </div>
        <div class="row-main">
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
.administergroup {
  .administergroup-list {
    overflow-y: auto;
    flex: 1;
    .administergroup-list-row {
      display: flex;
      padding: 0 15px;
      height: 65px;
      background-color: #fff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid #e6e6e6;
      .row-left {
        padding: 5px 0;
        .headportrait {
          width: 35px;
          height: 35px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
          vertical-align: middle;
        }
        .row-left-text {
          font-size: 14px;
        }
      }
      .row-main {
        flex: 1;
        margin-left: 10px;
        padding: 8px 0;
        font-size: 14px;
        line-height: 1.5;
        text-align: left;
      }
    }
  }
}
</style>

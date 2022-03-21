<template>
  <div class="administergroup">
    <BaseTopBarBack title="群列表" />

    <div class="administergroup-list">
      <div class="administergroup-list-row">
        <img class="headportrait" src="@/assets/images/group-head.svg" alt="" />
        <div class="row-left-text">群1</div>
        <div class="row-left-text1">群主:</div>
        <div class="row-left-text2">群人数:</div>
        <input type="checkbox" class="toggle-button-big" />
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
      padding: 10px 15px;
      background-color: #fff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid #e6e6e6;
      line-height: 2;
      .headportrait {
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        vertical-align: middle;
      }
      .row-left-text {
        margin-left: 10px;
      }
      .row-left-text1,
      .row-left-text2 {
        margin-left: 60px;
      }

      .toggle-button-big {
        margin-top: 7px;
        margin-left: 55px;
        appearance: none;
        position: relative;
        display: inline-block;
        width: 36px;
        height: 18px;
        background: #ffffff;
        border: 1px solid #bbc1e1;
        border-radius: 30px;
        outline: none;
        cursor: pointer;
        transition: 0.3s;
        transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      .toggle-button-big::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: 1px;
        top: 1px;
        width: 14px;
        height: 14px;
        background-color: #0d6efd;
        border-radius: 50%;
        transform: translateX(0);
        transition: 0.3s;
        transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
      }
      .toggle-button-big:checked::after {
        transform: translateX(calc(100% + 4px));
        background-color: #fff;
      }
      .toggle-button-big:checked {
        background-color: #0d6efd;
      }
    }
  }
}
</style>

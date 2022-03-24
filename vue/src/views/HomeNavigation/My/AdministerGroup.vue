<template>
  <div class="administergroup">
    <BaseTopBarBack title="群列表" />

    <div class="administergroup-list">
      <div class="list-content">
        <Icons name="groupHead" class="content-headportrait" />
        <div class="content-text">群1</div>
        <div class="content-text1">群主:</div>
        <div class="content-text2">群人数:</div>
        <input type="checkbox" class="toggle-button-big" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";

@Options({
  components: {
    Icons,
  },
})
export default class AdministerGroup extends Vue {}
</script>

<style lang="less" scoped>
.administergroup {
  .administergroup-list {
    overflow-y: auto;
    flex: 1;
    .list-content {
      display: flex;
      padding: 0 15px;
      height: 55px;
      line-height: 55px;
      font-size: 14px;
      background-color: #fff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      border-bottom: 1px solid #e6e6e6;

      .content-headportrait {
        margin: auto;
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
      }
      .content-text {
        margin-left: 10px;
      }
      .content-text1,
      .content-text2 {
        margin-left: 60px;
      }

      .toggle-button-big {
        margin-top: 18px;
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

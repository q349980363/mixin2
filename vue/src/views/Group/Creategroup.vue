<template>
  <!-- 创建群聊 -->
  <div class="creategroup">
    <BaseTopBarBack title="创建群聊" />

    <div class="search">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索" />
    </div>

    <div class="creategroup-list">
      <div class="row" v-for="i in 20" :key="i">
        <img
          class="check-icon"
          src="@/assets/images/creategroup-unchecked.svg"
          alt=""
        />
        <div class="headportrait">
          <img src="@/assets/images/nan.svg" alt="" />
        </div>
        <div class="name">Mg</div>
      </div>
    </div>

    <div class="creategroup-bar">
      <button class="but-active">发送(2)</button>
      <button class="but">发送</button>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";

@Options({
  components: {},
})
export default class Creategroup extends Vue {}
</script>

<style lang="less" scoped>
.creategroup {
  .search {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 10px;
    width: 100%;
    height: 45px;
    img {
      position: absolute;
      left: 15px;
    }
    input {
      flex: 1;
      padding: 0 40px;
      height: 49px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
    }
  }

  .creategroup-list {
    overflow-y: auto;
    flex: 1;
    .row {
      display: flex;
      align-items: center;
      margin-top: 10px;
      padding: 0 15px;
      height: 52px;
      background-color: #fff;
      // border-bottom: 1px solid #cdcdcd;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      .check-icon {
        padding-right: 15px;
      }
      .headportrait {
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        img {
          width: 34px;
          height: 34px;
        }
      }
      .name {
        flex: 1;
        display: flex;
        justify-content: space-between;
        margin-left: 10px;
        font-size: 14px;
      }
    }
  }

  .creategroup-bar {
    text-align: right;
    width: 100%;
    height: 49px;
    line-height: 49px;
    background-color: #efefef;
    .but {
      margin-right: 15px;
      width: 65px;
      height: 36px;
      border-radius: 5px;
      border: none;
      background-color: #dbdbdb;
      color: #8a8a8a;
      font-size: 16px;
    }
    .but-active {
      margin-right: 15px;
      width: 65px;
      height: 36px;
      border-radius: 5px;
      border: none;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>

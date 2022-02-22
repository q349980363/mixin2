<template>
  <!-- 创建群聊 -->
  <div class="creategroup">
    <BaseTopBarBack title="创建群聊" />

    <div class="creategroup-search">
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
        <div class="portrait">
          <img src="@/assets/images/nan.svg" alt="" />
        </div>
        <div class="name">Mg</div>
      </div>
    </div>

    <div class="creategroup-bar">
      <button>发送</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Creategroup extends Vue {}
</script>

<style lang="less" scoped>
.creategroup-search {
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
    border-bottom: 1px solid #cdcdcd;
    .check-icon {
      padding-right: 15px;
    }
    .portrait {
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
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background-color: #efefef;
  button {
    margin-right: 15px;
    width: 55px;
    height: 36px;
    border-radius: 5px;
    border: none;
    background-color: #dbdbdb;
    color: #8a8a8a;
    font-size: 16px;
  }
}
</style>

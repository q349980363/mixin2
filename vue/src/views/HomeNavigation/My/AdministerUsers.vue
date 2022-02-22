<template>
  <div class="administerusers">
    <BaseTopBarBack title="用户列表" />
    <div class="administerusers-list">
      <div class="row" v-for="i in 15" :key="i">
        <div class="portrait">
          <img src="@/assets/images/nan.svg" alt="" />
          <div>Mg</div>
        </div>
        <div class="main">
          <div>IP</div>
          <div>注册时间</div>
          <div>最后登录时间</div>
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
export default class AdministerUsers extends Vue {}
</script>

<style lang="less" scoped>
.administerusers-list {
  overflow-y: auto;
  flex: 1;
  .row {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 15px;
    height: 90px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    background-color: #fff;
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
    .main {
      flex: 1;
      margin-left: 10px;
      font-size: 14px;
      text-align: left;
    }
  }
}
</style>
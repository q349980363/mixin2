<template>
  <div class="administerusers">
    <BaseTopBarBack title="用户列表" />
    <div class="administerusers-list">
      <div class="administerusers-list-row" v-for="i in 20" :key="i">
        <div class="row-left">
          <img
            class="headportrait"
            src="@/assets/images/avatar/nan.svg"
            alt=""
          />

          <div class="row-left-text">Mg</div>
        </div>
        <div class="row-main">
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
.administerusers {
  .administerusers-list {
    overflow-y: auto;
    flex: 1;
    .administerusers-list-row {
      display: flex;
      padding: 0 15px;
      height: 70px;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      .row-left {
        padding: 8px 0;
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
        padding: 5px 0;
        font-size: 14px;
        line-height: 1.5;
        text-align: left;
      }
    }
  }
}
</style>

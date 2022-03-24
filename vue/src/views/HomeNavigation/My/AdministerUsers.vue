<template>
  <div class="administerusers">
    <BaseTopBarBack title="用户列表" />
    <div class="administerusers-list">
      <div class="administerusers-list-row">
        <div class="row-left">
          <div class="left-head">
            <img
              class="headportrait"
              src="@/assets/images/avatar/nan.svg"
              alt=""
            />
            <div class="row-left-name">Mg</div>
          </div>

          <div class="left-tips">
            <input type="checkbox" class="toggle-button-big" />
            <div class="row-left-text">禁止登录</div>
          </div>
        </div>
        <div class="row-main">
          <div>注册时间:2022.22.22</div>
          <div>注册IP:127.127.127.127</div>
          <div>最后登录时间:2022.22.22</div>
          <div>最后登录IP:127.127.127.127</div>
        </div>
        <div class="row-right"></div>
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
      padding: 10px 15px;
      background-color: #fff;
      border-bottom: 1px solid #e6e6e6;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      .row-left {
        .left-head {
          display: flex;
        }
        .headportrait {
          width: 35px;
          height: 35px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
          vertical-align: middle;
        }
        .row-left-name {
          flex: 1;
          margin-left: 10px;
          text-align: left;
          font-size: 14px;
          line-height: 35px;
        }
        .row-left-text {
          padding-left: 10px;
          font-size: 14px;
        }
        .left-tips {
          display: flex;
          padding-top: 28px;
          .toggle-button-big {
            appearance: none;
            position: relative;
            display: inline-block;
            width: 36px;
            height: 18px;
            margin: 0;
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
      .row-main {
        flex: 1;
        margin-left: 35px;
        font-size: 14px;
        line-height: 1.5;
        text-align: left;
        div {
          margin-bottom: 5px;
        }
        div:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>

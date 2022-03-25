<template>
  <!-- 一键登录 -->
  <div class="akeytologin">
    <BaseTopBarBack title="一键登录" />
    <div class="akeytologin-list">
      <div class="list-content">
        <Icons name="logo" class="akeytologin-icon" />
        <div class="content-number">132****2193</div>
        <div class="content-text">联通提供认证服务</div>
        <button class="content-but">一键登录</button>
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
export default class AKeyToLogIn extends Vue {}
</script>

<style lang="less" scoped>
.akeytologin {
  .akeytologin-list {
    overflow-y: auto;
    flex: 1;
    .list-content {
      padding: 0 15px;
      margin: 0 auto;
      width: 100%;
      max-width: 330px;
      text-align: center;
      padding-top: 170px;
      .akeytologin-icon {
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      .content-number {
        margin-top: 45px;
        font-size: 20px;
      }
      .content-text {
        margin-top: 10px;
        margin-bottom: 45px;
        font-size: 14px;
        color: #999;
      }

      .content-but {
        height: 40px;
        width: 300px;
        border: none;
        background-color: #007bff;
        color: #fff;
        font-size: 18px;
        border: 1px solid #ced4da;
        border-radius: 8px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        cursor: pointer;
      }
      .content-but:focus {
        background-color: #0b5ed7;
        color: #fff;
        border-color: #0a58ca;
        box-shadow: rgba(13, 110, 253, 0.25) 0px 0px 0px 4px;
      }
      .content-but:active {
        background-color: #0b5ed7;
      }
    }
  }
}
</style>

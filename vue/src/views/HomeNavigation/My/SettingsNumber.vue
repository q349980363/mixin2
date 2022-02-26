<template>
  <!-- 我的页-设置-账号与安全 -->
  <div class="settingsnumber">
    <BaseTopBarBack title="账号与安全" />

    <div class="settingsnumber-list">
      <div class="info">
        <span>账号</span>
        <div>11111111</div>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class UserChatSet extends Vue {}
</script>

<style lang="less" scoped>
.settingsnumber {
  .settingsnumber-list {
    overflow-y: auto;
    flex: 1;
    .info {
      display: flex;
      align-items: center;
      height: 45px;
      line-height: 45px;
      padding: 0 15px;
      margin: 10px 0;
      background-color: #fff;
      cursor: pointer;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      span {
        flex: 1;
        text-align: left;
      }
      .return-right {
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>

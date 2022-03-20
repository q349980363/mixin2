<template>
  <!-- 我的页-设置-账号与安全-设置账号 -->
  <div class="settingsnumberlist">
    <BaseTopBarBack title="更改账号">
      <div class="settingsnumberlist-submit" @click="back">提交</div>
    </BaseTopBarBack>

    <!-- 设置备注 -->
    <div class="settingsnumberlist-main">
      <input type="text" value="" placeholder="11111111" />
      <div class="main-tips">填写新的账号</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
@Options({
  components: {},
})
export default class SettingsNumberList extends Vue {
  @State("userInfo") userInfo!: any;
  msg!: string;
  @Action("back")
  back?: () => void;
  UserName = "";
  async created() {
    this.UserName = this.userInfo.UserName;
  }
}
</script>

<style lang="less" scoped>
.settingsnumberlist {
  .settingsnumberlist-submit {
    display: inline-block;
    margin-right: 15px;
    font-size: 16px;
    font-weight: 400;
    color: #515151;
    cursor: pointer;
  }
  .settingsnumberlist-main {
    input {
      padding: 12px 0 12px 15px;
      width: 100%;
      border: none;
      border-bottom: 1px solid #d5d5d5;
      border-radius: 5px;
    }
    input::-webkit-input-placeholder {
      color: #999999;
    }
    .main-tips {
      padding-top: 10px;
      padding-left: 15px;
      text-align: left;
      color: #999999;
      font-size: 14px;
    }
  }
}
</style>
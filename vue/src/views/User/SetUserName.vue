<template>
  <!-- 修改用户名称 -->
  <div class="setusername">
    <BaseTopBarBack title="编辑名称">
      <div class="setusername-submit" @click="back()">提交</div>
    </BaseTopBarBack>
    <div class="setusername-main">
      <input type="text" value="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Action } from "vuex-class";
@Options({
  components: {},
})
export default class SetUserName extends Vue {
  msg!: string;
  @Action("back")
  back?: () => void;
}
</script>

<style lang="less" scoped>
.setusername {
  .setusername-submit {
    font-weight: 400;
    font-size: 16px;
    color: #515151;
    cursor: pointer;
  }
  .setusername-main {
    margin: 10px 0;
    height: 45px;
    background-color: #ffffff;
    input {
      padding-left: 10px;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>

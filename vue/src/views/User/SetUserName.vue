<template>
  <!-- 修改用户名称 -->
  <div class="setusername">
    <BaseTopBarBack title="设置备注">
      <div class="setusername-submit" @click="back()">提交</div>
    </BaseTopBarBack>
    <div class="setusername-main">
      <input type="text" value="" placeholder="Mg" />
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
    padding: 5px 10px;
    background-color: #ccc;
    input {
      padding-left: 10px;
      width: 100%;
      height: 36px;
      border: none;
      background-color: #fff;
      border-radius: 5px;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
    }
  }
}
</style>

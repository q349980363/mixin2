<template>
  <!-- 修改群名称 -->
  <div class="setmyname">
    <BaseTopBarBack title="更改名字">
      <div class="setmyname-submit" @click="back">提交</div>
    </BaseTopBarBack>
    <div class="setmyname-main">
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
export default class SetMyName extends Vue {
  msg!: string;
  @Action("back")
  back?: () => void;
}
</script>

<style lang="less" scoped>
.setmyname {
  .setmyname-submit {
    font-size: 16px;
    font-weight: 400;
    color: #515151;
  }
  .setmyname-main {
    margin: 10px 0;
    height: 45px;
    background-color: #ffffff;
    input {
      padding: 5px;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
}
</style>

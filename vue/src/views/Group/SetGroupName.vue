<template>
  <!-- 修改群名称 -->
  <div class="setgroupname">
    <BaseTopBarBack title="编辑名称">
      <div class="setgroupname-submit" @click="back">提交</div>
    </BaseTopBarBack>
    <div class="setgroupname-main">
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
export default class SetGroupName extends Vue {
  msg!: string;
  @Action("back")
  back?: () => void;
}
</script>

<style lang="less" scoped>
.setgroupname {
  .setgroupname-submit {
    font-weight: 400;
    font-size: 16px;
    color: #515151;
    cursor: pointer;
  }
  .setgroupname-main {
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

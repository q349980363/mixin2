<template>
  <!-- 修改群名称 -->
  <div class="setgroupname">
    <BaseTopBarBack title="设置备注">
      <div class="setgroupname-submit" @click="back">提交</div>
    </BaseTopBarBack>
    <div class="setgroupname-main">
      <input type="text" value="" placeholder="群1" />
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

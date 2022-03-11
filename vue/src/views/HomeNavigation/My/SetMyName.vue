<template>
  <!-- 修改群名称 -->
  <div class="setmyname">
    <BaseTopBarBack title="设置名字">
      <div class="setmyname-submit" @click="back">提交</div>
    </BaseTopBarBack>
    <div class="setmyname-main">
      <input type="text" value="" placeholder="1" />
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
    cursor: pointer;
  }
  .setmyname-main {
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

<template>
  <!-- 修改群名称 -->
  <div class="setmyname">
    <BaseTopBarBack title="更改名字">
      <router-link to="/userinfo">
        <span class="setmyname-submit">提交</span>
      </router-link>
    </BaseTopBarBack>
    <div class="setmyname-body">
      <input type="text" value="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class New extends Vue {
  msg!: string;
}
</script>

<style lang="less" scoped>
.setmyname-submit {
  font-weight: 400;
  font-size: 16px;
  color: #515151;
}
.setmyname-body {
  margin: 10px 0;
  height: 45px;
  background-color: #ffffff;
  input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 5px;
  }
}
</style>

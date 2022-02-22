<template>
  <!-- 修改用户名称 -->
  <div class="setusername">
    <BaseTopBarBack title="编辑名称">
      <router-link to="/userchat">
        <span class="submit">提交</span>
      </router-link>
    </BaseTopBarBack>
    <div class="body">
      <input type="text" value="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class SetUserName extends Vue {
  msg!: string;
}
</script>

<style lang="less" scoped>
.setusername {
  .submit {
    font-weight: 400;
    font-size: 16px;
    color: #515151;
  }
  .body {
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
}
</style>

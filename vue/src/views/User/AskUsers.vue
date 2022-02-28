<template>
  <!-- 添加朋友-详情页 -->
  <div class="askusers">
    <BaseTopBarBack title="添加朋友">
      <div class="submit" @click="back()">发送</div>
    </BaseTopBarBack>

    <div class="row">
      <div class="headportrait">
        <img src="@/assets/images/nan1.svg" alt="" />
      </div>
      <div class="info">
        <div class="name">Mg2</div>
        <div class="number">账号:1111111</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
@Options({
  components: {},
})
export default class AskUsers extends Vue {}
</script>

<style lang="less" scoped>
.askusers {
  .submit{
    font-weight: normal;
    cursor:pointer
  }
  .row {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 80px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    cursor:pointer;
    .headportrait {
      width: 50px;
      height: 50px;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      img {
        width: 48px;
        height: 48px;
      }
    }
    .info {
      flex: 1;
      text-align: left;
      margin-left: 20px;
      font-size: 18px;
      .number {
        font-size: 16px;
        margin-top: 5px;
      }
    }
  }
}
</style>

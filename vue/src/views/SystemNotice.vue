<template>
  <!-- 系统通知 -->
  <div class="systemnotice">
    <BaseTopBarBack title="通知" />
    <div class="systemnotice-list">
      <div class="systemnotice-tip">好友通知</div>
      <div class="systemnotice-notice" v-for="i in 15" :key="i">
        <div class="systemnotice-head">
          <img src="@/assets/images/group-head.svg" alt="" />
        </div>
        <div class="systemnotice-body" >
          <div class="body-name">Mg2</div>
          <button>同意</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";


@Options({
  components: {},
})
export default class Login extends Vue {}
</script>

<style lang="less" scoped>
.systemnotice-list {
  overflow-y: auto;
  flex: 1;
}
.systemnotice-tip {
  margin-top: 10px;
  text-align: left;
  padding: 0 15px;
}
.systemnotice-notice {
  display: flex;
  align-items: center;
  margin-top: 5px;
  padding: 0 15px;
  height: 52px;
  /* border: 1px solid #000; */
  border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
  .systemnotice-head {
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    img {
      width: 34px;
      height: 34px;
    }
  }
  .systemnotice-body {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 14px;
    button {
      width: 50px;
      height: 25px;
      border:0;
    }
  }
}
</style>

<template>
  <!-- 我的页 -->
  <div class="my">
    <div class="my-message">
      <div class="message-head">
        <img src="@/assets/images/nv.svg" alt="" />
      </div>
      <div class="message-name">Mg1</div>
    </div>
    <div class="my-list">
      <div class="list-item">设置</div>
    </div>
    <div class="my-but">
      <router-link to="/login"> <button>退出登录</button></router-link>
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
<style scoped>
.my {
  height: 100%;
}
.my-message {
  display: flex;
  align-items: center;
  height: 170px;
  background-color: #fff;
  font-size: 18px;
}
.my-message .message-head {
  margin-left: 30px;
  width: 70px;
  height: 70px;
  border: 1px solid #f5f5f5;
}
.my-message .message-name {
  flex: 1;
  margin-left: 10px;
  text-align: left;
}
.my-list{
  display:flex;
  flex-direction: column;
}
.my-list .list-item{
  height: 40px;
  background-color: #cdcdcd
}
.my-but {
  text-align: center;
}
.my-but button {
  margin-top: 170px;
  width: 300px;
  height: 40px;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #dc3545;
}
</style>

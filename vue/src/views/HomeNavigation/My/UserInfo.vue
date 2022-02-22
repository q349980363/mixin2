<template>
  <div class="userinfo">
    <BaseTopBarBack title="个人信息" />
    <div class="userinfo-list">
      <div class="icons">
        <img src="@/assets/images/nv.svg" alt="" />
        <img src="@/assets/images/nv1.svg" alt="" />
        <img src="@/assets/images/nv2.svg" alt="" />
        <img src="@/assets/images/nan.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
        <img src="@/assets/images/nan1.svg" alt="" />
      </div>
      <div class="info">
        <span>头像</span>
        <img src="@/assets/images/nv.svg" alt="" />
      </div>

      <router-link to="/setmyname" class="info">
        <span>名字</span>
        <div>Mg1</div>
      </router-link>

      <div class="info">
        <span>账号</span>
        <div>11111111</div>
      </div>
      <router-link to="/card" class="info">
        <span>二维码名片</span>
        <img src="@/assets/images/card.svg" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class UserInfo extends Vue {}
</script>

<style lang="less" scoped>
.userinfo-list {
  position: relative;
  overflow-y: auto;
  flex: 1;
  .icons {
    position: absolute;
    top: 56px;
    right: 0;
    width: 180px;
    height: 180px;
    border: 1px solid #ccc;
    img {
      width: 40px;
      height: 40px;
    }
  }
  .info {
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin: 10px 0;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    span {
      flex: 1;
      text-align: left;
    }
    img {
      width: 22px;
      height: 22px;
    }
  }
}
</style>

<template>
  <!-- 我的页 -->
  <div class="my">
    <router-link to="/userinfo">
      <div class="my-message">
        <!-- 个人信息 -->
        <div class="message-head">
          <img src="@/assets/images/nv.svg" alt="" />
        </div>
        <div class="message-name">
          <div class="name">Mg1</div>
          <div class="account">账号:</div>
        </div>
        <router-link to="/card">
          <img class="message-card" src="@/assets/images/card.svg" alt="" />
        </router-link>
      </div>
    </router-link>

    <div class="my-list">
      <router-link to="/settings">
        <div class="list-set">
          <img src="@/assets/images/set.svg" alt="" />
          <span>设置</span>
        </div>
      </router-link>
      <router-link to="/about">
        <div class="list-set">
          <img src="@/assets/images/about.svg" alt="" />
          <span>关于</span>
        </div>
      </router-link>
      <router-link to="/administer">
        <div class="list-set">
          <img src="@/assets/images/administer.svg" alt="" />
          <span>后台管理</span>
        </div>
        <div class="list-but">
          <router-link to="/login">退出登录</router-link>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";

@Options({
  components: { BottomNavigationBar },
})
export default class New extends Vue {
  msg!: string;
}
</script>
<style lang="less" scoped>
.my {
  overflow-y: auto;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.my-message {
  display: flex;
  align-items: center;
  height: 170px;
  background-color: #fff;
  font-size: 18px;
  // background-color: rgba(0,0,0,0.1);
  // background-image: url("../../assets/images/pic.png");
  .message-head {
    margin-left: 30px;
    width: 70px;
    height: 70px;
    border: 1px solid #f5f5f5;
  }
  .message-name {
    flex: 1;
    margin-left: 10px;
    text-align: left;
    .name {
      font-weight: 700;
    }
    .account {
      margin-top: 5px;
      font-size: 16px;
    }
  }
  .message-card {
    margin-right: 30px;
  }
}

.my-list {
  overflow-y: auto;
  flex: 1;
  text-align: left;
  .list-set {
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin: 10px 0;
    background-color: #fff;
    cursor: pointer;
    img {
      width: 22px;
      height: 22px;
    }
    span {
      flex: 1;
      margin-left: 5px;
    }
  }
  .list-but {
    padding: 0 15px;
    margin: 10px 0;
    text-align: center;
    height: 45px;
    line-height: 45px;
    background-color: #fff;
    a {
      display: block;
      color: #dc3545;
    }
  }
}
</style>

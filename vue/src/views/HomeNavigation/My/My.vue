<template>
  <!-- 我的页 -->
  <div class="my">
    <router-link to="/userinfo" class="my-message">
      <!-- 个人信息 -->
      <img
        class="message-headportrait"
        src="@/assets/images/avatar/nv.svg"
        alt=""
      />
      <div class="message-main">
        <div class="main-top">
          <div class="main-name">{{ userInfo.UserName }}</div>
        </div>
        <div class="main-down">
          <div class="main-down-left">UID:{{ userInfo.ID }}</div>
          <div class="main-down-right">
            <img class="down-card" src="@/assets/images/qrCode.svg" alt="" />
            <img
              class="return-right"
              src="@/assets/images/return-right.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </router-link>

    <div class="my-list">
      <!-- <List name="用户信息">
        <ListItem to="/userinfo" name="头像">
          <img class="list-icon" src="@/assets/images/avatar/nv.svg" alt="" />
        </ListItem>
        <ListItem to="setmyname" name="名字">
          <div>Mg1</div>
        </ListItem>
        <ListItem to="/userinfo" name="账号">
          <div>11111111</div>
        </ListItem>
        <ListItem to="/card" name="二维码名片">
          <img class="list-icon" src="@/assets/images/qrCode.svg" alt="" />
        </ListItem>
      </List> -->
      <List name="用户信息">
        <ListItem to="/settings" name="设置">
          <template v-slot:left>
            <img class="list-icon" src="@/assets/images/set.svg" alt="" />
          </template>
        </ListItem>
        <ListItem to="/about" name="关于">
          <template v-slot:left>
            <img class="list-icon" src="@/assets/images/about.svg" alt="" />
          </template>
        </ListItem>
      </List>
      <List name="用户信息">
        <ListItem to="/administer" name="后台管理">
          <template v-slot:left>
            <img
              class="list-icon"
              src="@/assets/images/administer.svg"
              alt=""
            />
          </template>
        </ListItem>
        <ListItem to="/demo" name="Demo"></ListItem>
      </List>
      <div class="list-but" @click="clickLogin()">退出登录</div>
    </div>
  </div>
</template>

<script lang="ts">
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
import ListItem from "@/components/ListItem.vue";
import List from "@/components/List.vue";
@Options({
  components: {
    BottomNavigationBar,
    List,
    ListItem,
  },
})
export default class My extends Vue {
  msg!: string;
  @State("userInfo") userInfo!: any;
  clickLogin() {
    localStorage.clear();
    this.$router.push("/login");
    this.$store.commit("LoginSuccess", null);
    // this.$store.commit("xxx");
  }
}
</script>
<style lang="less" scoped>
.my {
  overflow-y: auto;
  height: 100%;
  // flex: 1;
  display: flex;
  flex-direction: column;
  .my-message {
    display: flex;
    height: 170px;
    font-size: 20px;
    padding-left: 30px;
    padding-right: 15px;
    // border: 1px solid #cdcdcd;
    background: url("~@/assets/images/bg.png") no-repeat;
    background-size: 100% auto;
    background-position: 0 -349px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    .message-headportrait {
      margin: auto;
      width: 60px;
      height: 60px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      background-color: rgba(0, 0, 0, 0.1);
      border-radius: 4px;
    }
    .message-main {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: auto;
      margin-left: 10px;
      line-height: 30px;
      text-align: left;
      .main-top {
        .main-name {
          font-weight: 700;
        }
      }
      .main-down {
        display: flex;
        justify-content: space-between;
        .main-down-left {
          font-size: 18px;
        }
        .main-down-right {
          .down-card {
            width: 13px;
          }
          .return-right {
            margin-left: 20px;
            width: 12px;
            height: 12px;
          }
        }
      }
    }
  }

  .my-list {
    overflow-y: auto;
    flex: 1;
    text-align: left;
    .list-icon {
      margin: auto;
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
    .list-but {
      padding: 0 15px;
      margin: 10px 0;
      text-align: center;
      height: 45px;
      line-height: 45px;
      background-color: #fff;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
      color: #dc3545;
      cursor: pointer;
    }
  }
}
</style>

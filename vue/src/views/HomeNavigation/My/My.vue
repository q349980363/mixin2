<template>
  <!-- 我的页 -->
  <div class="my">
    <router-link to="/userinfo" class="my-message">
      <!-- 个人信息 -->
      <div class="portrait">
        <img src="@/assets/images/nv.svg" alt="" />
      </div>
      <div class="main">
        <div class="name">{{ userInfo.UserName }}</div>
        <div class="account">UID:{{ userInfo.ID }}</div>
      </div>
      <div class="card"><img src="@/assets/images/card.svg" alt="" /></div>
      <div class="return-right">
        <img src="@/assets/images/return-right.svg" alt="" />
      </div>
    </router-link>

    <div class="my-list">
      <List name="用户信息">
        <ListItem to="/userinfo" name="头像">
          <img src="@/assets/images/nv.svg" alt="" />
        </ListItem>
        <ListItem to="setmyname" name="名字">
          <div>Mg1</div>
        </ListItem>
        <ListItem to="/userinfo" name="账号">
          <div>11111111</div>
        </ListItem>
        <ListItem to="/card" name="二维码名片">
          <img src="@/assets/images/card.svg" alt="" />
        </ListItem>
      </List>
      <List name="用户信息">
        <ListItem to="/settings" name="设置">
          <template v-slot:left>
            <img src="@/assets/images/set.svg" alt="" />
          </template>
        </ListItem>
        <ListItem to="/about" name="关于">
          <template v-slot:left>
            <img src="@/assets/images/about.svg" alt="" />
          </template>
        </ListItem>
      </List>
      <List name="用户信息">
        <ListItem to="/administer" name="后台管理">
          <template v-slot:left>
            <img src="@/assets/images/administer.svg" alt="" />
          </template>
        </ListItem>
      </List>
      <div class="but" @click="clickLogin()">
        退出登录
        <router-link to="/login">123</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
import { State, Action } from "vuex-class";
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
    align-items: center;
    height: 170px;
    background-color: #fff;
    font-size: 18px;
    .portrait {
      margin-left: 30px;
      width: 70px;
      height: 70px;
      border: 1px solid #f5f5f5;
      img {
        width: 70px;
        height: 70px;
      }
    }
    .main {
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
    .card {
      margin-right: 30px;
    }
    .return-right {
      width: 12px;
      height: 12px;
      margin-right: 15px;
    }
  }

  .my-list {
    overflow-y: auto;
    flex: 1;
    text-align: left;
    img {
      width: 22px;
      height: 22px;
      padding-right: 5px;
    }
    // .row {
    //   display: flex;
    //   align-items: center;
    //   height: 45px;
    //   line-height: 45px;
    //   padding: 0 15px;
    //   margin: 10px 0;
    //   background-color: #fff;
    //   cursor: pointer;
    //   box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    //   img {
    //     width: 22px;
    //     height: 22px;
    //   }
    //   span {
    //     flex: 1;
    //     margin-left: 5px;
    //   }
    //   .return-right {
    //     width: 12px;
    //     height: 12px;
    //   }
    // }
    .but {
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

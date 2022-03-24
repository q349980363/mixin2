<template>
  <!-- 我的页 -->
  <div class="my">
    <div class="my-message">
      <!-- 个人信息 -->
      <div class="message-head" @click="IsShowHeadEject = !IsShowHeadEject">
        <Icons
          class="headportrait"
          :name="userInfo.Avatars"
          default="defaultAvatar"
        />
        <div class="edit-avatar">
          <div>编辑头像</div>
        </div>
      </div>
      <router-link to="/myinfo" class="head-content">
        <div class="content-name">{{ userInfo.Nickname }}</div>
        <div class="content-info">
          <div class="info-left">
            UID:{{ userInfo.ID }} 账号:{{ userInfo.UserName }}
          </div>
          <div class="info-right">
            <Icons name="qrCode" class="qrcode" />
            <Icons name="return2" class="return-right" />
          </div>
        </div>
      </router-link>
    </div>
    <div
      class="head_eject"
      v-if="IsShowHeadEject"
      @click="IsShowHeadEject = !IsShowHeadEject"
    >
      <div class="head_eject_content">
        <BaseTopBarBack title="选择头像" :showBack="false" />
        <div class="row row-cols-4">
          <Icons class="col" name="nv" @click="SelectAvatar('nv')" />
          <Icons class="col" name="nv1" @click="SelectAvatar('nv1')" />
          <Icons class="col" name="nv2" @click="SelectAvatar('nv2')" />
          <Icons class="col" name="nv3" @click="SelectAvatar('nv3')" />
          <Icons class="col" name="nv4" @click="SelectAvatar('nv4')" />
          <Icons class="col" name="nv5" @click="SelectAvatar('nv5')" />
          <Icons class="col" name="nv6" @click="SelectAvatar('nv6')" />
          <Icons class="col" name="nv7" @click="SelectAvatar('nv7')" />
          <Icons class="col" name="nv8" @click="SelectAvatar('nv8')" />
          <Icons class="col" name="nv9" @click="SelectAvatar('nv9')" />
          <Icons class="col" name="nan" @click="SelectAvatar('nan')" />
          <Icons class="col" name="nan1" @click="SelectAvatar('nan1')" />
          <Icons class="col" name="nan2" @click="SelectAvatar('nan2')" />
          <Icons class="col" name="nan3" @click="SelectAvatar('nan3')" />
          <Icons class="col" name="nan4" @click="SelectAvatar('nan4')" />
          <Icons class="col" name="nan5" @click="SelectAvatar('nan5')" />
        </div>
      </div>
    </div>
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
            <Icons name="set" class="list-icon" />
          </template>
        </ListItem>
        <ListItem to="/about" name="关于">
          <template v-slot:left>
            <Icons name="about" class="list-icon" />
          </template>
        </ListItem>
      </List>
      <List name="用户信息">
        <ListItem to="/administer" name="后台管理">
          <template v-slot:left>
            <Icons name="administer" class="list-icon" />
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
import Icons from "@/components/Icons.vue";
import Hub from "@/hub";
@Options({
  components: {
    BottomNavigationBar,
    List,
    ListItem,
    Icons,
  },
})
export default class My extends Vue {
  msg!: string;
  @State("hub") hub!: Hub;
  @Action("tips") tips!: (msg: string) => void;
  IsShowHeadEject = false;
  async SelectAvatar(name: string) {
    var response = await this.hub.invoke("User", "SetAvatar", name);
    this.tips(response);
    await this.getMyUserInfo();
  }

  @State("userInfo") userInfo!: any;
  @Action("getMyUserInfo") getMyUserInfo!: () => void;
  created() {
    this.getMyUserInfo();
  }
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
    padding: 50px 15px;
    background: url("~@/assets/images/bg.png") no-repeat;
    background-size: 100% auto;
    background-position: 0 -349px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    .message-head {
      position: relative;
      width: 60px;
      height: 60px;
      .headportrait {
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
      }
      .edit-avatar {
        position: absolute;
        bottom: -12px;
        height: 12px;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 10px;
        color: #fff;
        border-radius: 5px;
      }
    }

    .head-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-left: 10px;
      line-height: 30px;
      text-align: left;
      .content-name {
        font-size: 20px;
        font-weight: 700;
      }
      .content-info {
        display: flex;
        // justify-content: space-between;
        .info-left {
          flex: 1;
          font-size: 18px;
        }
        .info-right {
          .qrcode {
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
  .head_eject {
    position: absolute;
    background-color: rgba(204, 204, 204, 0.678);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .head_eject_content {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    background-color: rgb(255, 255, 255);
    padding: 10px;
    padding-top: 0;
    border-radius: 3px;
    margin: 0 auto;
    margin-top: 20%;
    width: 70%;
  }
  .my-list {
    overflow-y: auto;
    flex: 1;
    text-align: left;
    .list-icon {
      margin-top: 14px;
      margin-right: 10px;
      width: 17px;
      height: 17px;
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

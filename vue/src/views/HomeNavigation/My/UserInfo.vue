<template>
  <div class="userinfo views">
    <BaseTopBarBack title="个人信息" />
    <div class="userinfo-list">
      <SetBar name="头像" @click="IsShowHeadEject = !IsShowHeadEject">
<<<<<<< HEAD
        <Icons
          class="list-icon"
          :name="userInfo.Avatars"
          default="defaultAvatar"
        />
        <!-- <img class="list-icon" src="@/assets/images/avatar/nv.svg" alt="" /> -->
=======
        <img
          class="list-icon-head"
          src="@/assets/images/avatar/nv.svg"
          alt=""
        />
>>>>>>> f39b41822fc6ae698ceab7aa86b19e39a444cd01
      </SetBar>
      <SetBar to="/setmyname" name="昵称">
        <div>{{ userInfo.Nickname }}</div>
      </SetBar>
      <SetBar name="账号">
        <div>{{ userInfo.UserName }}</div>
      </SetBar>
      <SetBar name="UID">
        <div>{{ userInfo.ID }}</div>
      </SetBar>
      <SetBar to="/card" name="二维码名片">
        <img class="list-icon-qr" src="@/assets/images/qrCode.svg" alt="" />
      </SetBar>
    </div>
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
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import SetBar from "@/components/ListItem.vue";
import { State, Action } from "vuex-class";
import Hub from "@/hub";
@Options({
  components: {
    SetBar,
    Icons,
  },
})
export default class UserInfo extends Vue {
  @State("hub") hub!: Hub;
  @Action("tips") tips!: (msg: string) => void;
  @Action("getMyUserInfo") getMyUserInfo!: () => void;

  @State("userInfo") userInfo!: any;
  IsShowHeadEject = false;
  async SelectAvatar(name: string) {
    var response = await this.hub.invoke("User", "SetAvatar", name);
    this.tips(response);
    await this.getMyUserInfo();
  }
}
</script>

<style lang="less" scoped>
.userinfo {
  .userinfo-list {
    position: relative;
    overflow-y: auto;
    flex: 1;
    .list-icon-head {
      margin-top: 10px;
      width: 25px;
      height: 25px;
    }
    .list-icon-qr {
      margin-top: 15px;
      width: 15px;
      height: 15px;
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
</style>

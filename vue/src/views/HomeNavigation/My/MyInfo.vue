<template>
  <div class="myinfo">
    <BaseTopBarBack title="个人信息" />

    <div class="myinfo-list">
      <ListItem name="头像" @click="IsShowHeadEject = !IsShowHeadEject">
        <Icons
          class="list-icon-head"
          :name="userInfo.Avatars"
          default="defaultAvatar"
        />
      </ListItem>
      <ListItem to="/setnickname" name="昵称">
        <div class="list-setnickname">{{ userInfo.Nickname }}</div>
      </ListItem>
      <ListItem name="账号">
        <div>{{ userInfo.UserName }}</div>
      </ListItem>
      <ListItem name="UID">
        <div>{{ userInfo.ID }}</div>
      </ListItem>
      <ListItem to="/myqrcode" name="二维码名片">
        <img class="list-icon-qr" src="@/assets/images/qrCode.svg" alt="" />
      </ListItem>
    </div>
  </div>
  <!-- <div
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
  </div> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import ListItem from "@/components/ListItem.vue";
import { State, Action } from "vuex-class";
import Hub from "@/hub";
@Options({
  components: {
    ListItem,
    Icons,
  },
})
export default class MyInfo extends Vue {
  @State("userInfo") userInfo!: any;
  @State("hub") hub!: Hub;
  @Action("tips") tips!: (msg: string) => void;
  @Action("getMyUserInfo") getMyUserInfo!: () => void;
  IsShowHeadEject = false;
  async SelectAvatar(name: string) {
    var response = await this.hub.invoke("User", "SetAvatar", name);
    this.tips(response);
    await this.getMyUserInfo();
  }
}
</script>

<style lang="less" scoped>
.myinfo {
  .myinfo-list {
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
    .list-setnickname {
      max-width: 245px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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

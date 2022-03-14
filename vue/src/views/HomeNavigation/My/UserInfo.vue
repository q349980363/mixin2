<template>
  <div class="userinfo views">
    <BaseTopBarBack title="个人信息" />
    <div class="userinfo-list">
      <SetBar name="头像" @click="IsShowHeadEject = !IsShowHeadEject">
        <img class="list-icon" src="@/assets/images/avatar/nv.svg" alt="" />
      </SetBar>
      <SetBar to="/setmyname" name="昵称">
        <div>{{ userInfo.UserName }}</div>
      </SetBar>
      <SetBar to="/userinfo" name="账号">
        <div>{{ userInfo.ID }}</div>
      </SetBar>
      <SetBar to="/card" name="二维码名片">
        <img class="list-icon" src="@/assets/images/qrCode.svg" alt="" />
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
        <Icons class="col" name="nv" />
        <Icons class="col" name="nv1" />
        <Icons class="col" name="nv2" />
        <Icons class="col" name="nv3" />
        <Icons class="col" name="nv4" />
        <Icons class="col" name="nv5" />
        <Icons class="col" name="nv6" />
        <Icons class="col" name="nv7" />
        <Icons class="col" name="nv8" />
        <Icons class="col" name="nv9" />
        <Icons class="col" name="nan" />
        <Icons class="col" name="nan1" />
        <Icons class="col" name="nan2" />
        <Icons class="col" name="nan3" />
        <Icons class="col" name="nan4" />
        <Icons class="col" name="nan5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import SetBar from "@/components/ListItem.vue";
import { State, Action } from "vuex-class";
@Options({
  components: {
    SetBar,
    Icons,
  },
})
export default class UserInfo extends Vue {
  @State("userInfo") userInfo!: any;
  IsShowHeadEject = false;
}
</script>

<style lang="less" scoped>
.userinfo {
  .userinfo-list {
    position: relative;
    overflow-y: auto;
    flex: 1;
    .list-icon {
      margin: auto;
      width: 22px;
      height: 22px;
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

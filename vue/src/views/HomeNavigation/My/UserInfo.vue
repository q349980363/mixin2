<template>
  <div class="userinfo">
    <BaseTopBarBack title="个人信息" />
    <div class="userinfo-list">
      <!-- <div class="icons">
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
      </div> -->

      <SetBar to="/userinfo" name="头像">
        <img class="list-icon" src="@/assets/images/avatar/nv.svg" alt="" />
      </SetBar>
      <SetBar to="/setmyname" name="名字">
        <div>Mg1</div>
      </SetBar>
      <SetBar to="/userinfo" name="账号">
        <div>11111111</div>
      </SetBar>
      <SetBar to="/card" name="二维码名片">
        <img class="list-icon" src="@/assets/images/card.svg" alt="" />
      </SetBar>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SetBar from "@/components/ListItem.vue";
@Options({
  components: {
    SetBar,
  },
})
export default class UserInfo extends Vue {}
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
</style>

<template>
  <!-- 个人二维码名片 -->
  <div class="myqrcode">
    <BaseTopBarBack title="二维码名片" />
    <div class="myqrcode-list">
      <div class="list-content">
        <div class="content-top">
          <Icons
            class="headportrait"
            :name="userInfo.Avatars"
            default="defaultAvatar"
          />
          <div class="top-name">
            <div>{{ userInfo.UserName }}</div>
          </div>
        </div>
        <div class="content-box">
          <img src="@/assets/images/qrcode.png" alt="" />
        </div>
        <div class="content-text">扫一扫上面的二维码图案,加我纸飞机</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";
import Icons from "@/components/Icons.vue";

@Options({
  components: {
    Icons,
  },
})
export default class MyQrCode extends Vue {
  @State("userInfo") userInfo!: any;
}
</script>

<style lang="less" scoped>
.myqrcode {
  .myqrcode-list {
    overflow-y: auto;
    flex: 1;
    .list-content {
      display: flex;
      flex-direction: column;
      margin: 0 auto;
      margin-top: 120px;
      width: 340px;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
      .content-top {
        flex: 1;
        margin-top: 20px;
        margin-left: 52px;
        display: flex;
        line-height: 50px;
        font-size: 16px;
        .headportrait {
          width: 50px;
          height: 50px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
          vertical-align: middle;
        }
        .top-name {
          flex: 1;
          margin-left: 10px;
          text-align-last: left;
        }
      }
      .content-box {
        margin: 0 auto;
        width: 280px;
        height: 280px;
        img {
          width: 280px;
          height: 280px;
        }
      }
      .content-text {
        margin-bottom: 20px;
      }
    }
  }
}
</style>

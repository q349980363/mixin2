<template>
  <div class="about">
    <BaseTopBarBack title="关于" />

    <img src="@/assets/images/logo.svg" alt="" />

    <div class="about-list">
      <div class="info">
        <span>版本更新</span>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
      <div class="info">
        <span>功能介绍</span>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
      <div class="info">
        <span>官网</span>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
    </div>

    <div class="company-info">灵翼软件开发</div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class About extends Vue {}
</script>

<style lang="less" scoped>
.about {
  img {
    margin: 20px auto;
    width: 60px;
    height: 60px;
  }
  .about-list {
    overflow-y: auto;
    flex: 1;
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
      .return-right {
        width: 12px;
        height: 12px;
      }
    }
  }
  .company-info {
    height: 40px;
  }
}
</style>

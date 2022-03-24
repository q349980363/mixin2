<template>
  <!-- 关于 - 功能介绍 -->
  <div class="aboutIntroduce">
    <BaseTopBarBack title="系统通知" />

    <div class="aboutIntroduce-list">
      <div class="list-content" v-for="i in 10" :key="i">
        <div class="content-left">
          <div class="left-text">纸飞机1.1主要更新</div>
          <div class="left-time">03月11日</div>
        </div>
        <Icons name="return2" class="content-right" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";

@Options({
  components: {
    Icons,
  },
})
export default class AboutIntroduce extends Vue {}
</script>

<style lang="less" scoped>
.aboutIntroduce {
  height: 100%;
  display: flex;
  flex-direction: column;
  .aboutIntroduce-list {
    overflow-y: auto;
    flex: 1;
    .list-content {
      flex: 1;
      display: flex;
      padding: 5px 15px;
      border-bottom: 1px solid #e6e6e6;
      background-color: #fff;
      .content-left {
        flex: 1;
        text-align: left;
        .left-text {
          font-size: 16px;
        }
        .left-time {
          padding-top: 5px;
          font-size: 14px;
          color: #727272;
        }
      }
      .content-right {
        margin: auto;
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>

<template>
  <!-- 版本更新 -->
  <div class="aboutIntroduce">
    <BaseTopBarBack title="系统通知" />
    <div class="aboutIntroduce-list">
      <div class="list-main" v-for="i in 10" :key="i">
        <div class="list-left">
          <div class="left-text">纸飞机1.1主要更新</div>
          <div class="left-time">03月11日</div>
        </div>
        <img class="list-right" src="@/assets/images/return-right.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class MessageList extends Vue {}
</script>

<style lang="less" scoped>
.aboutIntroduce {
  height: 100%;
  display: flex;
  flex-direction: column;
  .aboutIntroduce-list {
    overflow-y: auto;
    flex: 1;
    .list-main {
      flex: 1;
      display: flex;
      padding: 5px 15px;
      border-bottom: 1px solid #e6e6e6;
      .list-left {
        flex: 1;
        text-align: left;
        .left-text {
          font-size: 16px;
        }
        .left-time {
          padding-top: 5px;
          font-size: 14px;
        }
      }
      .list-right {
        margin: auto;
        width: 12px;
        height: 12px;
      }
    }
  }
}
</style>
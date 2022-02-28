<template>
  <!-- 系统通知 -->
  <div class="systemnotice">
    <BaseTopBarBack title="通知" />

    <div class="systemnotice-list">
      <div class="notice">好友通知</div>
      <MessageBar to="/homenav/messagelist">
        <MessageBarItem
          :src="require('@/assets/images/group-head.svg')"
          name="Mg2"
        >
          <button>同意</button>
        </MessageBarItem>
      </MessageBar>

      <div class="notice">群通知</div>
      <MessageBar to="/homenav/messagelist">
        <MessageBarItem
          :src="require('@/assets/images/group-head.svg')"
          name="群10"
        >
          <button>同意</button>
        </MessageBarItem>
      </MessageBar>
      <!-- <div class="row" v-for="i in 15" :key="i">
        <div class="headportrait">
          <img src="@/assets/images/group-head.svg" alt="" />
        </div>
        <div class="main">
          <div>Mg2</div>
          <button>同意</button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";
@Options({
  components: {
    MessageBar,
    MessageBarItem,
  },
})
export default class SystemNotice extends Vue {}
</script>

<style lang="less" scoped>
.systemnotice {
  .systemnotice-list {
    overflow-y: auto;
    flex: 1;
    .notice {
      margin-top: 10px;
      text-align: left;
      padding: 0 15px;
    }
    // .row {
    //   display: flex;
    //   align-items: center;
    //   margin-top: 5px;
    //   padding: 0 15px;
    //   height: 52px;
    //   border-bottom: 1px solid #cdcdcd;
    //   background-color: #fff;
    //   .headportrait {
    //     width: 35px;
    //     height: 35px;
    //     border: 1px solid #dbdbdb;
    //     border-radius: 5px;
    //     img {
    //       width: 34px;
    //       height: 34px;
    //     }
    //   }
    //   .main {
    //     flex: 1;
    //     display: flex;
    //     align-items: center;
    //     justify-content: space-between;
    //     margin-left: 10px;
    //     font-size: 14px;
    //     button {
    //       width: 50px;
    //       height: 25px;
    //       border: 0;
    //       cursor: pointer;
    //     }
    //   }
    // }
  }
}
</style>

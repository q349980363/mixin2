<template>
  <!-- 系统通知 -->
  <div class="systeminforms">
    <BaseTopBarBack title="通知" />

    <div class="systeminforms-list">
      <!-- <div class="friends-notice">好友通知</div> -->
      <MessageBar
        to="/homenav/messagelist"
        v-for="(item, i) in Friends"
        :key="i"
      >
        <MessageBarItem
          :src="require('@/assets/images/group-head.svg')"
          :name="item.Txt"
        >
          <button>同意</button>
        </MessageBarItem>
      </MessageBar>

      <!-- <div class="group-notice">群通知</div> -->
      <div class="chatbubble">
        <img class="headportrait" src="@/assets/images/logo.svg" alt="" />
        <ChatBubble direction="right">
          <div>Mg1添加你为好友</div>
          <button class="btn btn-primary btn-sm">同意</button>
          <button class="btn btn-secondary btn-sm">拒绝</button>
        </ChatBubble>
      </div>

      <!-- <MessageBar to="/homenav/messagelist">
        <MessageBarItem :src="require('@/assets/images/logo.svg')" name="群10">
          <button>同意</button>
        </MessageBarItem>
      </MessageBar> -->
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";
import ChatBubble from "@/components/ChatBubble.vue";
@Options({
  components: {
    MessageBar,
    MessageBarItem,
    ChatBubble,
  },
})
export default class SystemInforms extends Vue {
  @State("hub") hub!: Hub;
  @Action("tips") tips!: (msg: string) => void;
  dataList = [];
  async created() {
    var response = await this.hub.invoke("Systemchat", "Get");
    this.dataList = response;
  }

  public get Friends(): any {
    return this.dataList.filter((v: any) => v.Type == "Friends");
  }
}
</script>

<style lang="less" scoped>
.systeminforms {
  .systeminforms-list {
    overflow-y: auto;
    flex: 1;
    .list-notice {
      margin-top: 10px;
      text-align: left;
      padding: 0 15px;
    }
    .chatbubble {
      display: flex;
      justify-content: flex-start;
      .headportrait {
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
        margin-left: 10px;
      }
    }
  }
}
</style>

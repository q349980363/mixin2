<template>
  <!-- 系统通知 -->
  <div class="systeminforms">
    <BaseTopBarBack title="通知">
      <div class="systeminforms-submit" @click="clickClear()">清空通知</div>
    </BaseTopBarBack>
    <div class="systeminforms-list">
      <!-- 暂无通知 -->
      <div class="systeminforms-noNotice" v-if="dataList.length == 0">
        <img src="@/assets/images/nonotice.svg" alt="" />
        <div class="main-text">暂无通知</div>
      </div>
      <!-- 通知 -->
      <template v-for="(item, i) in dataList" :key="i">
        <div class="chatbubble" v-if="item.Type == 'Friends'">
          <img class="headportrait" src="@/assets/images/logo.svg" alt="" />
          <ChatBubble direction="right">
            <div class="chatbubble-text">{{ item.Txt }}</div>
            <div class="chatbubble-operation" v-if="!item.Result">
              <button
                class="btn btn-secondary btn-sm btn-reject"
                @click="rejectClick(item.ID)"
              >
                拒绝
              </button>
              <button
                class="btn btn-primary btn-sm btn-agree"
                @click="agreeClick(item.ID)"
              >
                同意
              </button>
            </div>
            <div v-else>
              {{ item.Result }}
            </div>
            <div class="chatbubble-time">{{ timenow(item.CreatedAt) }}</div>
          </ChatBubble>
        </div>
        <div class="chatbubble" v-else>
          <img class="headportrait" src="@/assets/images/logo.svg" alt="" />
          <ChatBubble direction="right">
            <div class="chatbubble-text">{{ item.Txt }}</div>
            <div class="chatbubble-time">{{ timenow(item.CreatedAt) }}</div>
          </ChatBubble>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { EventEmitter2 } from "eventemitter2";
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";
import ChatBubble from "@/components/ChatBubble.vue";
import dayjs from "dayjs";

@Options({
  components: {
    MessageBar,
    MessageBarItem,
    ChatBubble,
  },
})
export default class SystemInforms extends Vue {
  @State("hub") hub!: Hub;
  @State("emitter") emitter!: EventEmitter2;
  @Action("tips") tips!: (msg: string) => void;
  dataList = [];
  async created() {
    this.loadData();
    this.emitter.on("event.SystemChat", this.loadData.bind(this));
  }

  async destroyed() {
    this.emitter.off("event.SystemChat", this.loadData);
  }

  async loadData() {
    var response = await this.hub.invoke("Systemchat", "Get");
    this.dataList = response;
  }

  public get Friends(): any {
    return this.dataList.filter((v: any) => v.Type == "Friends");
  }
  //拒绝
  async rejectClick(id: number) {
    var response = await this.hub.invoke("Systemchat", "Operation", id, "no");
    this.dataList = response;
  }
  //同意
  async agreeClick(id: number) {
    var response = await this.hub.invoke("Systemchat", "Operation", id, "ok");
    this.dataList = response;
  }
  async clickClear() {
    var response = await this.hub.invoke("Systemchat", "Clear");
    this.tips(response);
    this.loadData();
  }
  timenow(txt: string) {
    return dayjs(txt).format("YYYY/MM/DD HH:mm:ss");
  }
}
</script>

<style lang="less" scoped>
.systeminforms {
  .systeminforms-submit {
    display: inline-block;
    margin-right: 15px;
    font-weight: 400;
    font-size: 16px;
    color: #515151;
    cursor: pointer;
  }
  .systeminforms-list {
    overflow-y: auto;
    flex: 1;
    .systeminforms-noNotice {
      img {
        width: 280px;
        height: 246px;
        margin: 0 auto;
        margin-top: 120px;
      }
      .main-text {
        margin-top: 5px;
      }
    }
    .chatbubble {
      display: flex;
      padding: 10px 15px 0 15px;
      .headportrait {
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
      }

      .chatbubble-text {
        margin-bottom: 5px;
      }
      .chatbubble-operation {
        text-align: right;
        .btn {
          margin-left: 5px;
        }
        .btn-reject {
          margin-right: 5px;
          width: 50px;
          height: 26px;
          font-size: 14px;
        }
        .btn-agree {
          width: 50px;
          height: 26px;
          font-size: 14px;
        }
      }
      .chatbubble-time {
        margin-top: 5px;
        font-size: 14px;
        color: #515151;
      }
    }
  }
}
</style>

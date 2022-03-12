<template>
  <!-- 系统通知 -->
  <div class="systeminforms">
    <BaseTopBarBack title="通知" />

    <div class="systeminforms-list">
      <div class="chatbubble" v-for="(item, i) in Friends" :key="i">
        <img class="headportrait" src="@/assets/images/logo.svg" alt="" />
        <ChatBubble direction="right">
          <!-- <div class="chatbubble-text">Mg1添加你为好友</div> -->
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
          {{item.CreatedAt}}
        </ChatBubble>
      </div>
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
      padding: 5px 15px;
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
    }
  }
}
</style>

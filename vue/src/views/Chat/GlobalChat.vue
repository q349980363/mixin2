<template>
  <!-- <transition name=""> -->
  <!-- 聊天页 -->
  <div class="globalchat">
    <BaseTopBarBack title="世界聊天">
      <router-link
        :to="{ path: '/globalchatset', query: UserInfo }"
        class="tool-trigger"
      >
        <img src="@/assets/images/more.svg" alt="" />
      </router-link>
    </BaseTopBarBack>
    <div class="globalchat-list" ref="list">
      <templete v-for="item in dataList" :key="item.ID">
        <div class="chatbox-my" v-if="item.UserName == MyUserInfo.UserName">
          <div class="my-time">{{ timenow(item.CreatedAt) }}</div>
          <div class="chatbubble-my">
            <ChatBubble direction="left">{{ item.Data }} </ChatBubble>
            <Icons
              class="headportrait"
              default="defaultAvatar"
              :name="MyUserInfo.Avatars"
            />
          </div>
        </div>

        <div class="chatbox-he" v-else>
          <div class="he-time">{{ timenow(item.CreatedAt) }}</div>
          <div class="chatbubble-he">
            <!-- <Icons
              class="headportrait"
              default="defaultAvatar"
              :name="UserInfo.Avatars"
            /> -->
            <!-- 头像问题暂时无法解决 -->
            <Icons class="headportrait" default="defaultAvatar" />
            <ChatBubble direction="right">{{ item.Data }}</ChatBubble>
          </div>
        </div>
      </templete>
    </div>

    <div class="globalchat-bar">
      <input type="text" v-model="txt" @keyup.enter="clickSend" />
      <div>
        <div class="bar-btn" @click="clickSend">发送</div>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatBubble from "@/components/ChatBubble.vue"; // @ is an alias to /src
import Icons from "@/components/Icons.vue";
import Hub from "@/hub";
import { State } from "vuex-class";
import { EventEmitter2, Listener } from "eventemitter2";
import dayjs from "dayjs";

@Options({
  components: {
    ChatBubble,
    Icons,
  },
})
export default class GlobalChat extends Vue {
  declare $refs: {
    list: HTMLDivElement;
  };
  @State("hub") hub!: Hub;
  @State("emitter") emitter!: EventEmitter2;
  //自身用户信息
  @State("userInfo") MyUserInfo!: any;
  ListenerList: Listener[] = [];
  dataList: any[] = [];
  txt = "";
  created() {
    this.loadData();
    var listener = this.emitter.on("global", this.addChat.bind(this), {
      objectify: true,
    }) as Listener;
    this.ListenerList.push(listener);
  }

  async unmounted() {
    this.ListenerList.forEach((listener) => {
      listener.off();
    });
    this.ListenerList = [];
  }

  async addChat(data: any) {
    this.dataList.push(data);
    this.$nextTick(function () {
      //  仅在整个视图都被重新渲染之后才会运行的代码
      this.chatListToEnd();
    });
  }

  timenow(txt: string) {
    return dayjs(txt).format("YYYY/MM/DD HH:mm:ss");
  }

  async loadData() {
    var response = await this.hub.invoke<[]>("Global", "GetChat");
    // this.dataList = response;
    response.forEach((item) => {
      this.dataList.push(item);
    });
    this.$nextTick(function () {
      //  仅在整个视图都被重新渲染之后才会运行的代码
      this.chatListToEnd();
    });
  }

  chatListToEnd(behavior: any = "auto") {
    var dom = this.$refs.list;
    // (<any>window)["asd"] = dom;
    // console.log(dom);
    dom.scrollTo({
      top: dom.scrollHeight,
      behavior: behavior,
    });
  }
  chatListIsEnd() {
    var dom = this.$refs.list;
    var top = dom.clientHeight + dom.scrollTop;
    return top >= dom.scrollHeight;
  }
  async clickSend() {
    var txt = this.txt;
    this.txt = "";
    var response = await this.hub.invoke<[]>("Global", "Send", txt);
    // this.$nextTick(function () {
    //   //  仅在整个视图都被重新渲染之后才会运行的代码
    //   this.chatListToEnd("smooth");
    // });
    // thischatListToEnd("smooth");
  }
}
</script>

<style lang="less" scoped>
.globalchat {
  .tool-trigger {
    display: inline-block;
    padding: 0 15px;
    img {
      vertical-align: middle;
    }
  }
  .globalchat-list {
    overflow-y: auto;
    flex: 1;
    .chatbox-my {
      text-align: center;
      .my-time {
        margin: 10px 0;
      }
      .chatbubble-my {
        display: flex;
        justify-content: flex-end;
        .headportrait {
          margin-right: 15px;
          width: 35px;
          height: 35px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
        }
      }
    }
    .chatbox-he {
      text-align: center;
      .he-time {
        margin: 10px 0;
      }
      .chatbubble-he {
        display: flex;
        justify-content: flex-start;
        .headportrait {
          margin-left: 15px;
          width: 35px;
          height: 35px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
        }
      }
    }
  }
  .globalchat-bar {
    display: flex;
    background-color: #efefef;
    input {
      flex: 1;
      margin: 5px 10px;
      height: 35px;
      border-radius: 3px;
      border: none;
    }
    .bar-btn {
      padding: 5px 10px;
      margin-top: 10px;
      margin-right: 10px;
      background-color: #007bff;
      color: #ffffff;
      cursor: pointer;
      border-radius: 3px;
    }
  }
}
</style>

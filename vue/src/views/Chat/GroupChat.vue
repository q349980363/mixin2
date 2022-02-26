<template>
  <!-- 群聊聊天页 -->
  <div class="groupchat">
    <BaseTopBarBack title="群1">
      <router-link to="/groupchatset">
        <img src="@/assets/images/more.svg" alt=""
      /></router-link>
    </BaseTopBarBack>

    <div class="groupchat-list" ref="list">
      <div class="list-my" v-for="i in 10" :key="i">
        <div class="time">上午9:41</div>
        <div class="chatbox-my">
          <ChatBubble direction="left">
            123123123123123123123123123123
            123123123123123123123123123123123123123123
            1231231231231231231231231231231231231231231231
            2312312312312312312312312312312312312312312312
            312312312312312312312312312312312312312312
            312312312312312312312312312312312312312312312312312312312312312
          </ChatBubble>
          <div class="headportrait">
            <img src="@/assets/images/nv.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="list-he">
        <div class="time">上午9:41</div>
        <div class="chatbox-he">
          <div class="headportrait">
            <img src="@/assets/images/nan.svg" alt="" />
          </div>
          <ChatBubble direction="right">
            123123123123123123123123123123
            123123123123123123123123123123123123123123
            1231231231231231231231231231231231231231231231
            2312312312312312312312312312312312312312312312
            312312312312312312312312312312
            3123123123123123123123123123123123123123123
            12312312312312312312312312312312
          </ChatBubble>
        </div>
      </div>
    </div>

    <div class="groupchat-bar">
      <input type="text" />
      <button>发送</button>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatBubble from "@/components/ChatBubble.vue"; // @ is an alias to /src

/**
 * 
 * 
 * 
 * https://blog.csdn.net/fifteen718/article/details/102544541
window.scrollTo({ 
    top: 0, 
    behavior: "smooth" 
});
 * 
 */
@Options({
  components: {
    ChatBubble,
  },
})
export default class GroupChat extends Vue {
  declare $refs: {
    list: HTMLDivElement;
  };
  created() {
    this.$nextTick(function () {
      //  仅在整个视图都被重新渲染之后才会运行的代码
      this.chatListToEnd();
    });
  }
  chatListToEnd(behavior: any = "auto") {
    var dom = this.$refs.list;
    // (<any>window)["asd"] = dom;
    console.log(dom);
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
}
</script>
<style lang="less" scoped>
.groupchat {
  .groupchat-list {
    overflow-y: auto;
    flex: 1;

    .list-my {
      text-align: center;
      .time {
        margin: 8px;
      }
      .chatbox-my {
        display: flex;
        justify-content: flex-end;
        .headportrait {
          width: 35px;
          height: 35px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
          margin-left: 10px;
          img {
            width: 34px;
            height: 34px;
          }
        }
      }
    }

    .list-he {
      text-align: center;
      .time {
        margin: 8px;
      }
      .chatbox-he {
        display: flex;
        justify-content: flex-start;
        .headportrait {
          width: 35px;
          height: 35px;
          border: 1px solid #dbdbdb;
          border-radius: 5px;
          margin-left: 10px;
          img {
            width: 34px;
            height: 34px;
          }
        }
      }
    }
  }

  .groupchat-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 49px;
    background-color: #efefef;
    padding: 0 8px;
    input {
      flex: 1;
      padding-left: 5px;
      height: 36px;
      border-radius: 5px;
      border: none;
    }
    button {
      margin-left: 5px;
      width: 55px;
      height: 36px;
      line-height: 36px;
      border-radius: 5px;
      border: none;
      background-color: #007bff;
      color: #ffffff;
      font-size: 16px;
    }
  }
}
</style>

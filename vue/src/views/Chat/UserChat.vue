<template>
  <!-- <transition name=""> -->
  <!-- 聊天页 -->
  <div class="userchat">
    <BaseTopBarBack title="Mg">
      <router-link to="/userchatset" class="userchat-icons">
        <img src="@/assets/images/more.svg" alt=""
      /></router-link>
    </BaseTopBarBack>

    <div class="userchat-list" ref="list">
      <div class="chatbox-my">
        <div class="my-time">上午9:41</div>
        <div class="chatbubble-my">
          <ChatBubble direction="left">
            123123123123123123123123123123
            123123123123123123123123123123123123123123
            1231231231231231231231231231231231231231231231
            2312312312312312312312312312312312312312312312
            312312312312312312312312312312312312312312
            312312312312312312312312312312312312312312312312312312312312312
          </ChatBubble>
          <Icons
            class="headportrait"
            default="defaultAvatar"
            :name="userInfo.Avatars"
          />
        </div>
      </div>

      <div class="chatbox-he">
        <div class="he-time">上午9:41</div>
        <div class="chatbubble-he">
          <Icons class="headportrait" default="defaultAvatar" />
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
    <div class="userchat-bar">
      <input type="text" />
      <div>
        <div class="bar-btn" @click="chatListToEnd('smooth')">发送</div>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ChatBubble from "@/components/ChatBubble.vue"; // @ is an alias to /src
import Icons from "@/components/Icons.vue";
import { State, Action } from "vuex-class";
import dayjs from "dayjs";
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
    Icons,
  },
})
export default class UserChat extends Vue {
  @State("userInfo") userInfo!: any;
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
  timenow(txt: string) {
    return dayjs(txt).format("YYYY/MM/DD HH:mm:ss");
  }
}
</script>

<style lang="less" scoped>
.userchat {
  .userchat-icons {
    display: inline-block;
    margin: 0 15px;
    img {
      vertical-align: middle;
    }
  }
  .userchat-list {
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

  .userchat-bar {
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

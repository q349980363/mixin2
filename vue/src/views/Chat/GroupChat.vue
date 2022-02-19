<template>
  <!-- 群聊聊天页 -->
  <div class="groupchat">
    <BaseTopBarBack title="群1">
      <router-link to="/groupchatset">
        <img src="@/assets/images/more.svg" alt=""
      /></router-link>
    </BaseTopBarBack>
    <div class="groupchat-body" ref="list">
      <div class="groupchat-body-my" v-for="i in 10" :key="i">
        <div class="groupchat-body-time">上午9:41</div>
        <div class="groupchat-body-talk-my">
          <ChatBubble direction="left">
            123123123123123123123123123123
            123123123123123123123123123123123123123123
            1231231231231231231231231231231231231231231231
            2312312312312312312312312312312312312312312312
            312312312312312312312312312312312312312312
            312312312312312312312312312312312312312312312312312312312312312
          </ChatBubble>
          <div class="my-right">
            <img src="@/assets/images/nv.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="groupchat-body-he">
        <div class="groupchat-body-time">上午9:41</div>
        <div class="groupchat-body-talk-he">
          <div class="he-right">
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
export default class Chatpage extends Vue {
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
  height: 100%;
  display: flex;
  flex-direction: column;
}

.groupchat-body {
  overflow-y: auto;
  flex: 1;
  .groupchat-body-my {
    text-align: center;
    .groupchat-body-time {
      margin: 8px;
    }
    .groupchat-body-talk-my {
      display: flex;
      justify-content: flex-end;
      .my-right {
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

  .groupchat-body-he {
    text-align: center;
    .groupchat-body-time {
      margin: 8px;
    }
    .groupchat-body-talk-he {
      display: flex;
      justify-content: flex-start;
      .he-right {
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
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
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
.my-left {
  // border: 10px solid transparent;
  padding: 10px;
  background-color: rgb(0, 123, 255);
  /* border-image: url(@/assets/images/talk_right.svg) 5 8 5 5 stretch; */
  color: #fff;
  max-width: 70%;
  border-radius: 5px;
  /* padding: 15px; */
  word-wrap: break-word;
  word-break: break-all;
  text-align: left;
  position: relative;
  .angle {
    position: absolute;
    top: 0px;
    right: -8px;
    width: 18px;
  }
}
.he-left {
  padding: 10px;
  margin-left: 10px;
  background-color: rgb(255, 255, 255);
  /* border-image: url(@/assets/images/talk_right.svg) 5 8 5 5 stretch; */
  color: #000;
  max-width: 70%;
  border-radius: 5px;
  /* padding: 15px; */
  word-wrap: break-word;
  word-break: break-all;
  text-align: left;
  position: relative;
  .angle {
    position: absolute;
    top: 0px;
    left: -8px;
    width: 18px;
  }
}
</style>

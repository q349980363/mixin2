<template>
  <!-- <transition name=""> -->
  <!-- 聊天页 -->
  <div class="userchat">
    <BaseTopBarBack :title="UserInfo.Nickname">
      <router-link
        :to="{ path: '/userchatset', query: UserInfo }"
        class="tool-trigger"
      >
        <img src="@/assets/images/more.svg" alt="" />
      </router-link>
    </BaseTopBarBack>

    <div class="userchat-list" ref="list">
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
            <Icons
              class="headportrait"
              default="defaultAvatar"
              :name="UserInfo.Avatars"
            />
            <ChatBubble direction="right">{{ item.Data }}</ChatBubble>
          </div>
        </div>
      </templete>
    </div>
    <div class="userchat-bar">
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
import Hub from "@/hub";
import { State } from "vuex-class";
import { EventEmitter2, Listener } from "eventemitter2";
import Icons from "@/components/Icons.vue";
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
export default class WorldChat extends Vue {

  timenow(txt: string) {
    return dayjs(txt).format("YYYY/MM/DD HH:mm:ss");
  }
}
</script>

<style lang="less" scoped>
.userchat {
  .tool-trigger {
    display: inline-block;
    padding: 0 15px;
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

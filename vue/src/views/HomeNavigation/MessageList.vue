<template>
  <!-- 消息页 -->
  <div class="messagelist">
    <TopBar title="消息">
      <!-- 系统中心 -->
      <router-link to="/systeminforms" class="systemCenter">
        <!-- <img
          src="@/assets/images/notice.svg"
          alt=""
          class="messagelist-icons"
        /> -->
        <Icons name="notice" class="messagelist-icon" />
        <!-- <div class="notice-dot"></div> -->
      </router-link>
      <!-- 添加 -->
      <PopupMenu :show="false" :src="require('@/assets/images/add.svg')">
        <PopupMenuItem
          to="/creategroup"
          :src="require('@/assets/images/group.svg')"
          title="创建群聊"
        />
        <PopupMenuItem
          to="/adduser"
          :src="require('@/assets/images/avatar/users.svg')"
          title="添加朋友"
        />
      </PopupMenu>
    </TopBar>

    <div class="messagelist-list">
      <MessageColumn
        :to="{ path: '/userchat', query: item }"
        v-for="item in users"
        :key="item.ID"
        :src="item.Avatars"
        :path="item.Path"
        :name="item.Nickname"
        :content="item.LastChat"
        :time="timenow(item.LastChatAt)"
      >
        <div class="messagelist-dot" v-if="item.Unread != 0"></div>
      </MessageColumn>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
import TopBar from "@/components/TopBar.vue";
import PopupMenu from "@/components/PopupMenu.vue";
import PopupMenuItem from "@/components/PopupMenuItem.vue";
import { EventEmitter2 } from "eventemitter2";
import MessageColumn from "@/components/MessageColumn.vue";
import { State } from "vuex-class";
import Hub from "@/hub";
import dayjs from "dayjs";
import Icons from "@/components/Icons.vue";

@Options({
  components: {
    BottomNavigationBar,
    TopBar,
    PopupMenu,
    PopupMenuItem,
    MessageColumn,
    Icons,
  },
})
export default class MessageList extends Vue {
  @State("hub") hub!: Hub;
  @State("emitter") emitter!: EventEmitter2;
  users = [];
  msg!: string;
  async created() {
    // this.users.length = 0;
    this.loadData();
    this.emitter.on("friends.*", this.addChat.bind(this));
  }
  async destroyed() {
    this.emitter.off("friends.*", this.addChat);
  }

  async addChat(data: any) {
    // console.log(data);
    this.loadData();
  }

  async loadData() {
    var response = await this.hub.invoke<[]>("User", "GetMessageList");

    this.users = [];
    response.forEach((item) => {
      this.users.push(item);
    });
  }

  timenow(txt: string) {
    return dayjs(txt).format("YYYY/MM/DD HH:mm");
  }
}
</script>

<style lang="less" scoped>
.messagelist {
  /* 父元素必须也有边框自动,子元素才能生效,不知道是为什么 */
  overflow-y: auto;
  height: 100%;
  // flex: 1;
  display: flex;
  flex-direction: column;
  .systemCenter {
    position: relative;
    .messagelist-icon {
      width: 20px;
      margin-right: 15px;
    }
    .notice-dot {
      position: absolute;
      left: 10px;
      top: 0;
      min-width: 10px;
      height: 10px;
      color: #fff;
      background: #dc3545;
      border-radius: 50%;
    }
  }

  .messagelist-list {
    /* 父元素必须也有边框自动,子元素才能生效,不知道是为什么 */
    overflow-y: auto;
    flex: 1;
    position: relative;
    .messagelist-dot {
      position: absolute;
      left: 45px;
      top: 6px;
      padding: 2px;
      min-width: 10px;
      height: 10px;
      font-size: 12px;
      border: none;
      background: #dc3545;
      color: #fff;
      text-align: center;
      border-radius: 50%;
    }
  }
}
</style>

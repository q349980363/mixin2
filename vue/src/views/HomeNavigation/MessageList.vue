<template>
  <!-- 消息页 -->
  <div class="messagelist">
    <TopBar title="消息">
      <!-- 系统中心 -->
      <router-link to="/systeminforms" class="messagelist-systemCenter">
        <img
          src="@/assets/images/notice.svg"
          alt=""
          class="messagelist-icons"
        />
        <div class="red-dot"></div>
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
      <MessageBar
        :to="{ path: '/userchat', query: item }"
        v-for="item in users"
        :key="item.ID"
      >
        <div class="red-dot1"></div>

        <MessageBarItem
          :src="item.Avatars"
          :name="item.Nickname"
          content="1111111"
          :time="timenow(item.CreatedAt)"
        />
      </MessageBar>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
import TopBar from "@/components/TopBar.vue";
import PopupMenu from "@/components/PopupMenu.vue";
import PopupMenuItem from "@/components/PopupMenuItem.vue";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";
import { State } from "vuex-class";
import Hub from "@/hub";
import dayjs from "dayjs";

@Options({
  components: {
    BottomNavigationBar,
    TopBar,
    PopupMenu,
    PopupMenuItem,
    MessageBar,
    MessageBarItem,
  },
})
export default class MessageList extends Vue {
  @State("hub") hub!: Hub;
  users = [];
  msg!: string;
  async created() {
    // this.users.length = 0;
    var response = await this.hub.invoke<[]>("Friends", "GetMyFriends");
    response.forEach((item) => {
      this.users.push(item);
    });
  }
  timenow(txt: string) {
    return dayjs(txt).format("YYYY/MM/DD HH:mm:ss");
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
  .messagelist-notice {
    position: relative;
    .messagelist-icons {
      width: 20px;
      margin-right: 15px;
    }
    .red-dot {
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
    .red-dot1 {
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

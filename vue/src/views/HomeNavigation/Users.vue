<template>
  <!-- 联系人页 -->
  <div class="users">
    <TopBar title="联系人">
      <!-- 系统中心 -->
      <router-link to="/systeminforms">
        <img
          src="@/assets/images/notice.svg"
          alt=""
          class="messagelist-icons"
        />
        <div class="red-dot"></div>
      </router-link>
      <!-- 搜索 -->
      <!-- <router-link to="/searchpage"> -->
      <!-- <img src="@/assets/images/search.svg" alt="" class="icons" /> -->
      <!-- </router-link> -->
      <!-- 添加 -->
      <PopupMenu
        :show="false"
        :src="require('@/assets/images/add.svg')"
        class="messagelist-icons"
      >
        <PopupMenuItem
          to="/creategroup"
          :src="require('@/assets/images/group.svg')"
          title="创建群聊"
        />
        <PopupMenuItem
          to="/addusers"
          :src="require('@/assets/images/avatar/users.svg')"
          title="添加朋友"
        />
      </PopupMenu>
    </TopBar>

    <div class="users-list">
      <MessageBar to="/group">
        <MessageBarItem
          :src="require('@/assets/images/group-head.svg')"
          name="群"
        >
        </MessageBarItem>
      </MessageBar>

      <MessageBar to="/userchat">
        <MessageBarItem
          :src="require('@/assets/images/avatar/nan.svg')"
          name="Mg"
        />
      </MessageBar>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue"; // @ is an alias to /src
import TopBar from "@/components/TopBar.vue"; // @ is an alias to /src
import PopupMenu from "@/components/PopupMenu.vue";
import PopupMenuItem from "@/components/PopupMenuItem.vue";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";

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
export default class Users extends Vue {
  msg!: string;
}
</script>
<style lang="less" scoped>
.users {
  overflow-y: auto;
  height: 100%;
  // flex: 1;
  display: flex;
  flex-direction: column;
  .red-dot {
    position: absolute;
    right: 30px;
    top: 0;
    min-width: 10px;
    height: 10px;
    padding: 2px;
    font-size: 12px;
    border: none;
    background: #dc3545;
    color: #fff;
    text-align: center;
    border-radius: 50%;
  }
  .messagelist-icons {
    margin-left: 10px;
  }
  .users-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

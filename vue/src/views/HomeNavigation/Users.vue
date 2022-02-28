<template>
  <!-- 联系人页 -->
  <div class="users">
    <TopBar title="联系人">
      <!-- 系统中心 -->
      <router-link to="/systemnotice">
        <img src="@/assets/images/notice.svg" alt="" class="icons" />
        <span class="red-dot"></span>
      </router-link>
      <!-- 搜索 -->
      <!-- <router-link to="/searchusers"> -->
      <img src="@/assets/images/search.svg" alt="" class="icons" />
      <!-- </router-link> -->
      <!-- 添加 -->
      <PopupMenu
        :show="false"
        :src="require('@/assets/images/add.svg')"
        class="icons"
      >
        <PopupMenuItem
          to="/creategroup"
          :src="require('@/assets/images/group.svg')"
          title="创建群聊"
        />
        <PopupMenuItem
          to="/addusers"
          :src="require('@/assets/images/users.svg')"
          title="添加朋友"
        />
      </PopupMenu>
    </TopBar>

    <div class="users-list">
      <MessageBar to="/group">
        <MessageBarItem
          :src="require('@/assets/images/group-head.svg')"
          name="群1"
        >
        </MessageBarItem>
      </MessageBar>

      <MessageBar to="/userchat">
        <MessageBarItem :src="require('@/assets/images/nan.svg')" name="Mg" />
      </MessageBar>
      <!-- <router-link to="/group" class="row">
        <div class="headportrait">
          <img src="@/assets/images/group-head.svg" alt="" />
        </div>
        <div class="name">群聊</div>
      </router-link>

      <router-link to="/userchat" class="row" v-for="i in 15" :key="i">
        <div class="headportrait">
          <img src="@/assets/images/nan.svg" alt="" />
        </div>
        <div class="name">Mg</div>
      </router-link> -->
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
    right: 60px;
    top: 0;
    min-width: 10px;
    height: 10px;
    text-align: center;
    border: none;
    background: #dc3545;
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
    padding: 2px;
  }
  .icons {
    margin-left: 10px;
  }
  .users-list {
    overflow-y: auto;
    flex: 1;
    // .row {
    //   display: flex;
    //   align-items: center;
    //   margin-top: 10px;
    //   padding: 0 15px;
    //   height: 52px;
    //   box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    //   background-color: #fff;
    //   .headportrait {
    //     width: 35px;
    //     height: 35px;
    //     border: 1px solid #dbdbdb;
    //     border-radius: 5px;
    //     img {
    //       width: 32px;
    //       height: 32px;
    //     }
    //   }
    //   .name {
    //     flex: 1;
    //     margin-left: 10px;
    //     font-size: 14px;
    //     text-align: left;
    //   }
    // }
  }
}
</style>

<template>
  <!-- 联系人页 -->
  <div class="users">
    <TopBar title="联系人">
      <!-- 系统中心 -->
      <router-link to="/systeminforms" class="users-notice">
        <Icons name="notice" class="users-icon" />
        <div class="notice-dot"></div>
      </router-link>
      <!-- 搜索 -->
      <!-- <router-link to="/searchpage"> -->
      <!-- <img src="@/assets/images/search.svg" alt="" class="icons" /> -->
      <!-- </router-link> -->
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

    <div class="users-list">
      <UsersColumn to="/group" src="groupHead" name="群"></UsersColumn>
      <UsersColumn
        :to="{ path: '/userchat', query: item }"
        v-for="item in users"
        :key="item.ID"
        :src="item.Avatars"
        :name="item.Nickname"
      ></UsersColumn>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { State } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import TopBar from "@/components/TopBar.vue"; // @ is an alias to /src
import BottomNavigationBar from "@/components/BottomNavigationBar.vue"; // @ is an alias to /src
import PopupMenu from "@/components/PopupMenu.vue";
import PopupMenuItem from "@/components/PopupMenuItem.vue";
import UsersColumn from "@/components/UsersColumn.vue";

@Options({
  components: {
    Icons,
    TopBar,
    BottomNavigationBar,
    PopupMenu,
    PopupMenuItem,
    UsersColumn,
  },
})
export default class Users extends Vue {
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
}
</script>
<style lang="less" scoped>
.users {
  overflow-y: auto;
  height: 100%;
  // flex: 1;
  display: flex;
  flex-direction: column;
  .users-notice {
    position: relative;
    .users-icon {
      margin-right: 15px;
      width: 20px;
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
  .users-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

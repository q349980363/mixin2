<template>
  <!-- 联系人页 -->
  <div class="users">
    <TopBar title="联系人">
      <!-- 系统中心 -->
      <router-link to="/systemnotice">
        <img src="@/assets/images/notice.svg" alt="" />
      </router-link>
      <!-- 搜索 -->
      <router-link to="/searchusers">
        <img src="@/assets/images/search.svg" alt="" class="icons" />
      </router-link>
      <!-- 添加 -->
      <PopupMenu :show="false" :src="require('@/assets/images/add.svg')">
        <PopupMenuItem
          :src="require('@/assets/images/group.svg')"
          title="添加群"
        />
        <PopupMenuItem
          :src="require('@/assets/images/users.svg')"
          title="添加朋友"
        />
        <PopupMenuItem
          :src="require('@/assets/images/users.svg')"
          title="添加朋友"
        />
        <PopupMenuItem
          :src="require('@/assets/images/users.svg')"
          title="添加朋友"
        />
        <!-- <img src="@/assets/images/add.svg" alt="" /> -->

        <!-- <div class="searchusers-users">
          <img src="@/assets/images/users.svg" alt="" />
          <div>添加朋友</div>
        </div> -->
      </PopupMenu>
    </TopBar>

    <div class="users-list">
      <router-link to="/group" class="users-talk">
        <div class="users-head">
          <img src="@/assets/images/group-head.svg" alt="" />
        </div>
        <div class="users-body">
          <div class="body-name">群聊</div>
        </div>
      </router-link>

      <router-link to="/userchat" class="users-talk" v-for="i in 15" :key="i">
        <div class="users-head">
          <img src="@/assets/images/nan.svg" alt="" />
        </div>
        <div class="users-body">
          <div class="body-name">Mg</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue"; // @ is an alias to /src
import TopBar from "@/components/TopBar.vue"; // @ is an alias to /src
import PopupMenu from "@/components/PopupMenu.vue";
import PopupMenuItem from "@/components/PopupMenuItem.vue";

@Options({
  components: {
    BottomNavigationBar,
    TopBar,
    PopupMenu,
    PopupMenuItem,
  },
})
export default class New extends Vue {
  msg!: string;
}
</script>
<style lang="less" scoped>
.users {
  overflow-y: auto;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.users-list {
  overflow-y: auto;
  flex: 1;
}
.users-talk {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
  height: 52px;
  /* border: 1px solid #000; */
  border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
}
.users-talk .users-body {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 14px;
}
.users-talk .users-head {
  width: 35px;
  height: 35px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
}

.users-talk .users-head img {
  width: 34px;
  height: 34px;
}
.title-icons .icons {
  margin: 0 10px;
}
</style>

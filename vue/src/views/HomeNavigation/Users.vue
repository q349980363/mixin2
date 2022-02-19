<template>
  <!-- 联系人页 -->
  <div class="users">
    <TopBar title="联系人">
      <!-- 系统中心 -->
      <router-link to="/systemnotice">
        <img src="@/assets/images/notice.svg" alt="" />
        <span class="add"></span>
      </router-link>
      <!-- 搜索 -->
      <router-link to="/searchusers">
        <img src="@/assets/images/search.svg" alt="" class="icons" />
      </router-link>
      <!-- 添加 -->
      <PopupMenu :show="false" :src="require('@/assets/images/add.svg')">
        <PopupMenuItem
          to="/creategroup"
          :src="require('@/assets/images/group.svg')"
          title="添加群"
        />
        <PopupMenuItem
          to="/addusers"
          :src="require('@/assets/images/users.svg')"
          title="添加朋友"
        />
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
.add {
  position: absolute;
  right: 60px;
  top: 0;
  min-width: 10px;
  height: 10px;
  /* line-height: 15px; */
  text-align: center;
  border: none;
  background: #dc3545;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  padding: 2px;
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
  // border-bottom: 1px solid #cdcdcd;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  .users-head {
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    img {
      width: 34px;
      height: 34px;
    }
  }
  .users-body {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 14px;
  }
}

.title-icons .icons {
  margin: 0 10px;
}
</style>

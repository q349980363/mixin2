<template>
  <!-- 消息页 -->
  <div class="messagelist">
    <TopBar title="消息">
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

    <div class="messagelist-list">
      <router-link
        to="/userchat"
        class="messagelist-talk"
        v-for="i in 20"
        :key="i"
      >
        <div class="messagelist-head">
          <img src="@/assets/images/nan.svg" alt="" />
          <span></span>
        </div>
        <div class="messagelist-body">
          <div class="body-left">
            <div class="body-name">Mg</div>
            <div class="body-content">11111111111</div>
          </div>
          <div class="body-right">
            <div>上午9:41</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
import TopBar from "@/components/TopBar.vue";
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
.messagelist {
  /* 父元素必须也有边框自动,子元素才能生效,不知道是为什么 */
  overflow-y: auto;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.messagelist-list {
  /* 父元素必须也有边框自动,子元素才能生效,不知道是为什么 */
  overflow-y: auto;
  flex: 1;
}
.messagelist-talk {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
  height: 52px;
  /* border: 1px solid #000; */
  // border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
  box-shadow: 0 2px 2px rgba(0,0,0,0.1);
  .messagelist-head {
    position: relative;
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    img {
      width: 34px;
      height: 34px;
    }
    span {
      position: absolute;
      left: 28px;
      top: -3px;
      min-width: 10px;
      height: 10px;
      // line-height: 10px;
      text-align: center;
      border: none;
      background: #dc3545;
      border-radius: 50%;
      color: #fff;
      font-size: 12px;
      padding: 2px;
    }
  }
  .messagelist-body {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 14px;
    .body-left {
      text-align: left;
      .body-name {
        margin-bottom: 5px;
      }
      .body-content {
        font-size: 12px;
      }
    }
  }
}
</style>

<template>
  <div class="demo-container">
    <BaseTopBarBack title="头像 女" :showBack="false" />
    <div class="demo-item demo-icons row row-cols-6">
      <Icons class="col demo-icons-item" name="nv" />
      <Icons class="col demo-icons-item" name="nv1" />
      <Icons class="col demo-icons-item" name="nv2" />
      <Icons class="col demo-icons-item" name="nv3" />
      <Icons class="col demo-icons-item" name="nv4" />
      <Icons class="col demo-icons-item" name="nv5" />
      <Icons class="col demo-icons-item" name="nv6" />
      <Icons class="col demo-icons-item" name="nv7" />
      <Icons class="col demo-icons-item" name="nv8" />
      <Icons class="col demo-icons-item" name="nv9" />
    </div>
    <BaseTopBarBack title="头像 男" :showBack="false" />
    <div class="demo-item demo-icons row row-cols-6">
      <Icons class="col demo-icons-item" name="nan" />
      <Icons class="col demo-icons-item" name="nan1" />
      <Icons class="col demo-icons-item" name="nan2" />
      <Icons class="col demo-icons-item" name="nan3" />
      <Icons class="col demo-icons-item" name="nan4" />
      <Icons class="col demo-icons-item" name="nan5" />
    </div>
    <BaseTopBarBack title="头像 其他" :showBack="false" />
    <div class="demo-item demo-icons row row-cols-6">
      <Icons class="col demo-icons-item" name="defaultSvg" />
      <Icons class="col demo-icons-item" name="defaultAvatar" />
      <Icons class="col demo-icons-item" name="defaultAvatar1" />
      <Icons class="col demo-icons-item" name="groupHead" />
      <Icons class="col demo-icons-item" name="logo" />
    </div>
    <BaseTopBarBack title="素材" :showBack="false" />
    <div class="demo-item demo-icons row row-cols-6">
      <Icons class="col demo-icons-item" name="notice" />
      <Icons class="col demo-icons-item" name="add" />
      <Icons class="col demo-icons-item" name="message" />
      <Icons class="col demo-icons-item" name="contact" />
      <Icons class="col demo-icons-item" name="my" />
      <Icons class="col demo-icons-item" name="groupchat" />
      <Icons class="col demo-icons-item" name="addFriends" />
      <Icons class="col demo-icons-item" name="qrCode" />
      <Icons class="col demo-icons-item" name="set" />
      <Icons class="col demo-icons-item" name="about" />
      <Icons class="col demo-icons-item" name="administer" />
      <Icons class="col demo-icons-item" name="return1" />
      <Icons class="col demo-icons-item" name="return2" />
      <Icons class="col demo-icons-item" name="more" />
    </div>
    <BaseTopBarBack title="其他" :showBack="false" />
    <div class="demo-item">
      <TopBar title="消息">
        <!-- 系统中心 -->
        <router-link to="/systeminforms">
          <img src="@/assets/images/notice.svg" alt="" class="icons" />
          <div class="red-dot"></div>
        </router-link>
        <!-- 添加 -->
        <PopupMenu
          :show="false"
          :src="require('@/assets/images/add.svg')"
          class="icons"
          style="width: 20px"
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
      <BaseTopBarBack title="搜索用户" />
      <BaseTopBarBack title="Mg">
        <img src="@/assets/images/more.svg" style="width: 30px" alt="" />
      </BaseTopBarBack>
      <BaseTopBarBack title="Mg">
        <div>发送</div>
      </BaseTopBarBack>
      <BottomNavigationBar />
    </div>
    <BaseTopBarBack title="按钮" :showBack="false" />
    <div class="demo-item demo-btn">
      <!-- 前两个默认相等 -->
      <!-- <button class="btn">登录</button> -->
      <button class="btn btn-primary">primary</button>
      <button class="btn btn-secondary">secondary</button>
      <button class="btn btn-success">success</button>
      <button class="btn btn-danger">danger</button>
      <button class="btn btn-warning">warning</button>
      <button class="btn btn-info">info</button>
      <button class="btn btn-light">light</button>
      <button class="btn btn-dark">dark</button>
      <hr />
      <!-- 单独边线按钮  线框按钮 -->
      <button class="btn btn-outline-primary">primary</button>
      <button class="btn btn-outline-secondary">secondary</button>
      <button class="btn btn-outline-success">success</button>
      <button class="btn btn-outline-danger">danger</button>
      <button class="btn btn-outline-warning">warning</button>
      <button class="btn btn-outline-info">info</button>
      <button class="btn btn-outline-light">light</button>
      <button class="btn btn-outline-dark">dark</button>
      <hr />
      <!-- 展示其他尺寸 -->
      <button class="btn btn-primary btn-sm">primary</button>
      <button class="btn btn-secondary btn-sm">secondary</button>
      <button class="btn btn-outline-primary btn-sm">primary</button>
      <button class="btn btn-outline-secondary btn-sm">secondary</button>
      <hr />
      <!-- 展示其他尺寸 -->
      <button class="btn btn-primary btn-lg">primary</button>
      <button class="btn btn-secondary btn-lg">secondary</button>
      <button class="btn btn-outline-primary btn-lg">primary</button>
      <button class="btn btn-outline-secondary btn-lg">secondary</button>
      <hr />
      <!-- 展示其他尺寸 -->
      <!-- TODO 不能用这个元素来 问题太多了,应该让父元素来想办法解决 GRID 布局方案 -->
      <button class="btn btn-primary btn-block">
        block 元素不能有外边距 会撑开父元素
      </button>
      <!-- 切换按钮 -->
      <input type="checkbox" class="toggle-button-big" />
      <input type="checkbox" class="toggle-button-small" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import TopBar from "@/components/TopBar.vue";
import PopupMenu from "@/components/PopupMenu.vue";
import PopupMenuItem from "@/components/PopupMenuItem.vue";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue";
@Options({
  components: {
    Icons,
    TopBar,
    PopupMenu,
    PopupMenuItem,
    BottomNavigationBar,
  },
})
export default class Demo extends Vue {
  maxHeight = "";
  created() {
    try {
      this.maxHeight = document.getElementById("app")!.style.maxHeight;
      document.getElementById("app")!.style.maxHeight = "none";
      document.getElementById("iphoneX")!.style.display = "none !important";
    } catch (error) {
      // console.error(error);
    }
  }
  beforeUnmount() {
    try {
      document.getElementById("app")!.style.maxHeight = this.maxHeight;
      document.getElementById("iphoneX")!.style.display = "block !important";
    } catch (error) {
      // console.error(error);
    }
  }
}
</script>

<style lang="less" scoped>
.demo-btn {
  .btn {
    margin: 2px;
  }
  .btn-block {
    margin: 0;
  }
}
.demo-icons {
  // display: ;
}
.demo-icons-item {
  background-color: #fff;
  border: solid 1px #ccc;
  padding: 5px;
}
.demo-item {
  margin: 10px;
  border: solid 1px #ccc;
  .icons {
    width: 20px;
    height: 20px;
  }
  // 切换按钮
  .toggle-button-big {
    appearance: none;
    position: relative;
    display: inline-block;
    width: 36px;
    height: 18px;
    margin: 0;
    background: #ffffff;
    border: 1px solid #bbc1e1;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  .toggle-button-big::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 1px;
    top: 1px;
    width: 14px;
    height: 14px;
    background-color: #0d6efd;
    border-radius: 50%;
    transform: translateX(0);
    transition: 0.3s;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  .toggle-button-big:checked::after {
    transform: translateX(calc(100% + 4px));
    background-color: #fff;
  }
  .toggle-button-big:checked {
    background-color: #0d6efd;
  }
  .toggle-button-small {
    appearance: none;
    position: relative;
    display: inline-block;
    width: 24px;
    height: 12px;
    margin: 0;
    background: #ffffff;
    border: 1px solid #bbc1e1;
    border-radius: 30px;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  .toggle-button-small::after {
    content: "";
    display: inline-block;
    position: absolute;
    left: 1px;
    top: 1px;
    width: 8px;
    height: 8px;
    background-color: #0d6efd;
    border-radius: 50%;
    transform: translateX(0);
    transition: 0.3s;
    transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.2);
  }
  .toggle-button-small:checked::after {
    transform: translateX(calc(100% + 4px));
    background-color: #fff;
  }
  .toggle-button-small:checked {
    background-color: #0d6efd;
  }
}
</style>

<style lang="less" scoped>
.demo-container {
  background-color: #fff;
  overflow: auto;
}
.demo-title {
  background: rgb(204, 204, 204);
  font-size: 1.6rem;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 10px;
}
</style>

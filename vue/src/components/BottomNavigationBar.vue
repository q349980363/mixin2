<template>
  <div class="BottomNavigationBar">
    <div class="tabbar">
      <!-- 消息 -->
      <router-link
        :to="{ name: 'MessageList' }"
        class="tabbar-item"
        active-class="bar-active"
        v-slot="{ isActive }"
        replace
      >
        <div class="item-list">
          <img
            v-if="isActive"
            src="../assets/images/message-select.svg"
            alt="消息激活"
          />
          <img v-else src="../assets/images/message.svg" alt="消息" />
          <div class="bar-text">
            <div>消息</div>
          </div>
          <span></span>
        </div>
      </router-link>
      <!-- 联系人 -->
      <router-link
        :to="{ name: 'Users' }"
        class="tabbar-item"
        active-class="bar-active"
        v-slot="{ isActive }"
        replace
      >
        <div class="item-list">
          <img
            v-if="isActive"
            src="../assets/images/contact-select.svg"
            alt="联系人激活"
          />
          <img v-else src="../assets/images/contact.svg" alt="联系人" />
          <div class="bar-text">
            <div>联系人</div>
          </div>
          <span></span>
        </div>
      </router-link>
      <!-- 个人中心 -->
      <router-link
        :to="{ name: 'My' }"
        class="tabbar-item"
        active-class="bar-active"
        v-slot="{ isActive }"
        replace
      >
        <div class="item-list">
          <img
            v-if="isActive"
            src="../assets/images/my-select.svg"
            alt="我的激活"
          />
          <img v-else src="../assets/images/my.svg" alt="我的" />
          <div class="bar-text">
            <div>我的</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

export default class BottomNavigationBar extends Vue {
  // a() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.tabbar {
  display: flex;
  width: 100%;
  @color: #fff;
  background-color: @color;
  border-top: 1px solid darken(@color, 10%);
  font-size: 12px;
}

.tabbar-item {
  flex: 1;
  .item-list {
    position: relative;
    display: inline-block;
    padding: 5px 0;
    img {
      width: 20px;
      height: 20px;
    }
    span {
      position: absolute;
      left: 20px;
      top: 6px;
      min-width: 8px;
      height: 8px;
      border: none;
      background: #dc3545;
      border-radius: 50%;
    }
  }
}

.bar-active {
  color: #007bff;
}
</style>

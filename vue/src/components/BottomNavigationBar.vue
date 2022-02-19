<template>
  <div class="BottomNavigationBar">
    <div class="news-bar">
      <!-- 消息 -->
      <router-link
        :to="{ name: 'MessageList' }"
        class="bar-news"
        active-class="bar-active"
        v-slot="{ isActive }"
        replace
      >
        <img
          v-if="isActive"
          src="../assets/images/news-checked.svg"
          alt="消息激活"
        />
        <img v-else src="../assets/images/news-unchecked.svg" alt="消息" />
        <span></span>
      </router-link>
      <!-- 联系人 -->
      <router-link
        :to="{ name: 'Users' }"
        class="bar-contacts"
        active-class="bar-active"
        v-slot="{ isActive }"
        replace
      >
        <img
          v-if="isActive"
          src="../assets/images/contacts-checked.svg"
          alt="联系人激活"
        />
        <img
          v-else
          src="../assets/images/contacts-unchecked.svg"
          alt="联系人"
        />
        <span></span>
      </router-link>
      <!-- 个人中心 -->
      <router-link
        :to="{ name: 'My' }"
        class="bar-personal"
        active-class="bar-active"
        v-slot="{ isActive }"
        replace
      >
        <img
          v-if="isActive"
          src="../assets/images/personal-checked.svg"
          alt="我的激活"
        />
        <img v-else src="../assets/images/personal-unchecked.svg" alt="我的" />
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
.news-bar {
  text-align: center;
  display: flex;
  justify-content: space-between;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // padding: 0 5px;
  width: 100%;
  // height: 49px;
  background-color: #efefef;
  // box-shadow: rgba(231, 231, 231, 0.25) 0px 0px 0px 4px;

  // 调试代码 过后删除
  border-top: #e9e9e9 solid 1px;
}

.bar-news,
.bar-contacts,
.bar-personal {
  flex: 1;
  // margin-top: 5px;
  padding-top: 8px;
  padding-bottom: 0px;
  position: relative;
  span {
    position: absolute;
    left: 72px;
    top: 22px;
    min-width: 6px;
    height: 6px;
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

.bar-active {
  color: #007bff;
}
</style>

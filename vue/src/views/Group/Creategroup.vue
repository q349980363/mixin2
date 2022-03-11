<template>
  <!-- 创建群聊 -->
  <div class="creategroup">
    <BaseTopBarBack title="创建群聊" />

    <div class="creategroup-search">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索" />
    </div>

    <div class="creategroup-list">
      <MessageBar to="/creategroup">
        <div class="red-dot1"></div>
        <MessageBarItem
          :src="require('@/assets/images/avatar/nan.svg')"
          name="Mg"
        >
          <template v-slot:left>
            <img
              class="list-icon"
              src="@/assets/images/creategroup-unchecked.svg"
              alt=""
            />
          </template>
        </MessageBarItem>
      </MessageBar>
    </div>

    <div class="creategroup-bar">
      <button class="bar-but-active">完成(2)</button>
      <button class="bar-but">完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import MessageBar from "@/components/MessageBar.vue";
import MessageBarItem from "@/components/MessageBarItem.vue";
@Options({
  components: {
    MessageBar,
    MessageBarItem,
  },
})
export default class Creategroup extends Vue {}
</script>

<style lang="less" scoped>
.creategroup {
  .creategroup-search {
    position: relative;
    display: flex;
    width: 100%;
    height: 49px;
    line-height: 49px;
    border-bottom: 1px solid #e6e6e6;
    img {
      position: absolute;
      left: 15px;
      top: 15px;
      width: 18px;
      height: 18px;
    }
    input {
      flex: 1;
      padding: 0 40px;
      line-height: 49px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
    }
  }

  .creategroup-list {
    overflow-y: auto;
    flex: 1;
    .list-icon {
      margin-right: 8px;
    }
  }
  .creategroup-bar {
    width: 100%;
    height: 49px;
    line-height: 49px;
    background-color: #efefef;
    text-align: right;
    .bar-but {
      margin-right: 15px;
      width: 65px;
      height: 36px;
      font-size: 16px;
      background-color: #dbdbdb;
      color: #8a8a8a;
      border-radius: 5px;
      border: none;
    }
    .bar-but-active {
      margin-right: 15px;
      width: 65px;
      height: 36px;
      font-size: 16px;
      background-color: #007bff;
      color: #fff;
      border-radius: 5px;
      border: none;
    }
  }
}
</style>

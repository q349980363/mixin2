<template>
  <!-- 创建群聊 -->
  <div class="creategroup">
    <BaseTopBarBack title="创建群聊" />

    <div class="creategroup-searchbox">
      <img class="searchbox-ico" src="@/assets/images/search.svg" alt="" />
      <input class="searchbox-input" type="text" placeholder="搜索" />
      <div>
        <div class="searchbox-btn">搜索</div>
      </div>
    </div>

    <div class="creategroup-list">
      <MessageBar
        :to="{ path: '/creategroup', query: item }"
        v-for="item in users"
        :key="item.ID"
      >
        <MessageBarItem :src="item.Avatars" :name="item.Nickname">
          <template v-slot:left>
            <img
              v-if="isActive"
              @click="unselectButton"
              class="list-icon"
              src="@/assets/images/creategroup-unchecked.svg"
              alt=""
            />
            <img
              v-else
              @click="selectButton"
              class="list-icon"
              src="@/assets/images/creategroup-checked.svg"
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
export default class Creategroup extends Vue {
  //好友用户信息
  UserInfo!: any;
  isActive = true;
  unselectButton() {
    this.isActive = false;
  }
  selectButton() {
    this.isActive = true;
  }
  @State("hub") hub!: Hub;
  users = [];
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
.creategroup {
  .creategroup-searchbox {
    position: relative;
    display: flex;
    padding: 0 15px;
    background-color: #ffffff;
    border-bottom: 1px solid #d5d5d5;

    .searchbox-ico {
      position: absolute;
      top: 15px;
      left: 15px;
      width: 16px;
    }
    .searchbox-input {
      flex: 1;
      height: 45px;
      padding-left: 26px;
      border: none;
    }
    .searchbox-btn {
      padding: 5px 10px;
      background-color: #e2e2e2;
      margin-top: 8px;
      margin-left: 15px;
      color: #000;
      cursor: pointer;
    }
  }

  .creategroup-list {
    overflow-y: auto;
    flex: 1;
    .list-icon {
      margin-top: 5px;
      margin-right: 8px;
      width: 20px;
      height: 20px;
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

<template>
  <!-- 创建群聊 -->
  <div class="creategroup">
    <BaseTopBarBack title="创建群聊" />

    <div class="creategroup-searchbox">
      <img class="searchbox-ico" src="@/assets/images/search.svg" alt="" />
      <input
        class="searchbox-input"
        v-model="searchInput"
        type="text"
        placeholder="搜索"
      />
      <div>
        <div class="searchbox-btn" v-if="!search" @click="search = searchInput">
          搜索
        </div>
        <div class="searchbox-btn" v-else @click="search = ''">取消</div>
      </div>
    </div>

    <div class="creategroup-list">
      <CreateGroupColumn
        v-for="item in Users"
        @click="item.isActive = !item.isActive"
        :key="item.ID"
        :src="item.Avatars"
        :name="item.Nickname"
      >
        <template v-slot:creategroupcolumn-selectbox>
          <img
            v-if="item.isActive"
            class="list-icon"
            src="@/assets/images/creategroup-checked.svg"
            alt=""
          />
          <img
            v-else
            class="list-icon"
            src="@/assets/images/creategroup-unchecked.svg"
            alt=""
          />
        </template>
      </CreateGroupColumn>
    </div>

    <div class="creategroup-bar">
      <button class="bar-but btnActive" v-if="UsersCount > 1">
        完成({{ UsersCount }})
      </button>
      <button class="bar-but" v-else>完成</button>
    </div>
  </div>
</template>

<script lang="ts">
import Hub from "@/hub";
import { State, Action } from "vuex-class";
import { Options, Vue } from "vue-class-component";
import CreateGroupColumn from "@/components/CreateGroupColumn.vue";

@Options({
  components: {
    CreateGroupColumn,
  },
})
export default class CreateGroup extends Vue {
  searchInput = "";
  search = "";
  //好友用户信息
  UserInfo!: any;
  @State("hub") hub!: Hub;
  users: any[] = [];
  get Users() {
    return this.users.filter((v) => v.Nickname.indexOf(this.search) != -1);
  }

  get UsersCount() {
    return this.Users.filter((v) => v.isActive).length;
  }

  async created() {
    // this.users.length = 0;
    var response = await this.hub.invoke<any[]>("Friends", "GetMyFriends");
    response.forEach((item: any) => {
      item.isActive = false;
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
    .searchbox-input:focus {
      border-color: none;
      outline: 0;
      box-shadow: none;
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
    .btnActive {
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

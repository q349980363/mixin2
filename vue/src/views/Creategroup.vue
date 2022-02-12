<template>
  <!-- 创建群聊 -->
  <div class="creategroup">
     <!-- <TopBarBack title="创建群聊">
      <img src="../assets/images/more.svg" alt="" />
    </TopBarBack> -->
    <div class="creategroup-title">
      <img src="../assets/images/return.svg" alt="" />
      <div class="title-name">创建群聊</div>
      <img src="../assets/images/more.svg" alt="" />
    </div>

    <div class="creategroup-search">
      <img src="../assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索" />
    </div>

    <div class="creategroup-list">
      <div class="creategroup-talk" v-for="i in 20" :key="i">
        <img src="../assets/images/creategroup-unchecked.svg" alt="" />

        <div class="creategroup-head">
          <img src="../assets/images/nan.svg" alt="" />
        </div>
        <div class="creategroup-body">
          <div class="body-left">
            <div class="body-name">Mg</div>
          </div>
        </div>
      </div>
    </div>

    <div class="creategroup-bar">
      <button>发送</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
  },
})
export default class Chatpage extends Vue {}
</script>

<style scoped>
.creategroup {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.creategroup-list {
  overflow-y: auto;
  flex: 1;
}
.creategroup-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 45px;
  border-bottom: 1px solid #cdcdcd;
  font-size: 18px;
  font-weight: 700;
}
.creategroup-search {
  position: relative;
  display: flex;
  align-items: center;
  /* padding: 0 15px; */
  margin-top: 10px;
  width: 100%;
  height: 45px;
  /* border: 1px solid #000; */
}
.creategroup-search img {
  position: absolute;
  left: 15px;
}
.creategroup-search input {
  flex: 1;
  height: 49px;
  border-radius: 5px;
  padding: 0 40px;
  font-size: 16px;
  border: none;
}

.creategroup-talk {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
  height: 52px;
  /* border: 1px solid #000; */
  border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
}
.creategroup-talk > img {
  padding-right: 15px;
}
.creategroup-talk .creategroup-head {
  width: 35px;
  height: 35px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
}
.creategroup-talk .creategroup-head img {
  width: 34px;
  height: 34px;
}
.creategroup-talk .creategroup-body {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin-left: 10px;
  font-size: 14px;
}

.creategroup-bar {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 49px;
  background-color: #efefef;
  /* padding: 6px 15px; */
}

.creategroup-bar button {
  margin-right: 15px;
  width: 55px;
  height: 36px;
  border-radius: 5px;
  border: none;
  background-color: #dbdbdb;
  color: #8a8a8a;
  font-size: 16px;
}
</style>

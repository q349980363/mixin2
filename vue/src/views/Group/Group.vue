<template>
  <!-- 群聊列表 -->
  <div class="group">
    <BaseTopBarBack title="群聊" />

    <!-- <div class="group-title">
      <img src="../assets/images/return.svg" alt="" />
      <div class="title-name">群聊</div>
      <img src="../assets/images/search.svg" alt="" />
    </div> -->

    <div class="group-list">
      <router-link
        to="/groupchat"
        class="messagelist-talk"
        v-for="i in 20"
        :key="i"
      >
        <div class="group-talk">
          <div class="group-head">
            <img src="@/assets/images/nv1.svg" alt="" />
          </div>
          <div class="group-body">
            <div class="body-name">群1</div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="less" scoped>
.group {
}
.group-list {
  overflow-y: auto;
  flex: 1;
}
.group-talk {
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 0 15px;
  height: 52px;
  /* border: 1px solid #000; */
  border-bottom: 1px solid #cdcdcd;
  background-color: #fff;
  .group-head {
    position: relative;
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    img {
      width: 34px;
      height: 34px;
    }
  }
  .group-body {
    flex: 1;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    font-size: 14px;
  }
}
</style>

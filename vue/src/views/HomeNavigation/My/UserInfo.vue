<template>
  <div class="userinfo">
    <BaseTopBarBack title="个人信息" />
    <div class="userinfo-list">
      <div class="list-set">
        <img src="@/assets/images/set.svg" alt="" />
        <span>设置</span>
      </div>

      <div class="list-set">
        <img src="@/assets/images/about.svg" alt="" />
        <span>关于</span>
      </div>

      <div class="list-set">
        <img src="@/assets/images/administer.svg" alt="" />
        <span>后台管理</span>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.userinfo-list {
  overflow-y: auto;
  flex: 1;
  text-align: left;
  .list-set {
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin: 10px 0;
    background-color: #fff;
    cursor: pointer;
    img {
      width: 22px;
      height: 22px;
    }
    span {
      flex: 1;
      margin-left: 5px;
    }
  }
}
</style>
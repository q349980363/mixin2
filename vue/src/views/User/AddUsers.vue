<template>
  <!-- 添加用户 -->
  <div class="addusers">
    <BaseTopBarBack title="添加">
      <img src="@/assets/images/more.svg" alt="" />
    </BaseTopBarBack>

    <div class="addusers-search">
      <img src="@/assets/images/search.svg" alt="" />
      <input type="text" placeholder="搜索联系人" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.addusers {
  height: 100%;
  display: flex;
  flex-direction: column;
  .addusers-search {
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 15px;
    margin-top: 10px;
    width: 100%;
    height: 45px;
    /* border: 1px solid #000; */
    img {
      position: absolute;
      left: 20px;
    }
    input {
      flex: 1;
      height: 49px;
      border-radius: 5px;
      padding: 0 30px;
      font-size: 16px;
      border: 1px solid #cdcdcd;
    }
  }
}
/* .addusers-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 45px;
  border-bottom: 1px solid #cdcdcd;
  font-size: 18px;
  font-weight: 700;
} */

</style>

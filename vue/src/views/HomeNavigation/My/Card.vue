<template>
  <div class="card">
    <BaseTopBarBack title="二维码名片" />
    <div class="card-body">
      <div class="body-top">
        <img src="@/assets/images/nv.svg" alt="" />
        <span>Mg1</span>
      </div>
      <div class="body-box"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.card-body {
  margin: 100px 30px;
  height: 350px;
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 6px rgba(0,0,0,.1);
  .body-box {
    margin: 30px;
    width: 200px;
    height: 200px;
    border: 1px solid #000;
  }
}
</style>
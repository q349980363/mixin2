<template>
  <!-- 系统通知 -->
  <div class="SystemNotice">
    <div class="SystemNotice-title">
      <router-link to="/homenav/contacts">
        <img src="../assets/images/return.svg" alt="" />
      </router-link>
      <div>通知</div>
      <img src="../assets/images/more.svg" alt="" />
    </div>
  </div>
</template>

<style scoped>
.SystemNotice {
  position: relative;
  height: 100%;
}
.SystemNotice-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  height: 45px;
  border-bottom: 1px solid #cdcdcd;
  font-size: 18px;
  font-weight: 700;
}
</style>
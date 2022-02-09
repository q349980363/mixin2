<template>
    <!-- 我的 -->
    <div class="personal">
      <div class="personal-item">
        <div class="personal-message">
          <div class="message-head">
            <img src="../assets/images/nv.svg" alt="" />
          </div>
          <div class="message-name">Mg1</div>
        </div>
        <div class="personal-but"><button>退出登录</button></div>
      </div>
      <div class="personal-bar">
          <!-- 消息 -->
        <div class="bar-news">
          <img src="../assets/images/news-unchecked.svg" alt="" />
        </div>
        <!-- 联系人 -->
        <div class="bar-contacts">
             <img src="../assets/images/contacts-unchecked.svg" alt="" />
        </div>
        <!-- 个人中心 -->
        <div class="bar-personal">
             <img src="../assets/images/personal-checked.svg" alt="" />
        </div>
      </div>
    </div>
</template>

<style scoped>

.personal-message{
    display: flex;
    align-items: center;
    height: 170px;
    background-color: #fff;
    font-size: 18px;
}
.personal-message .message-head{
    margin-left: 30px;
    width: 70px;
    height: 70px;
    border: 1px solid #f5f5f5;
}
.personal-message .message-name{
    flex:1;
    margin-left: 10px;
    text-align:left
}
.personal-but{
    text-align: center;
}
.personal-but button{
    margin-top: 170px;
    width: 300px;
    height: 40px;
    border: none;
    border-radius: 8px;
    color: #fff;
    background-color: #DC3545;
}

</style>
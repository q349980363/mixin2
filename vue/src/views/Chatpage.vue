<template>
    <!-- 聊天页 -->
    <div class="chatpage">
      <div class="chatpage-title">
        <img src="../assets/images/return.svg" alt="" />
        <div class="title-name">Mg</div>
        <img src="../assets/images/more.svg" alt="" />
      </div>

      <div class="chatpage-body-my">
        <div class="chatpage-body-time">上午9:41</div>
        <div class="chatpage-body-talk-my">
          <div class="my-left"><img src="../assets/images/talk_right.svg" alt="" /></div>
          <div class="my-right"><img src="../assets/images/nv.svg" alt="" /></div>
        </div>
      </div>

      <div class="chatpage-body-he">
        <div class="chatpage-body-time">上午9:41</div>
        <div class="chatpage-body-talk-he">
          <div class="he-right"><img src="../assets/images/nan.svg" alt="" /></div>
          <div class="he-left"><img src="../assets/images/talk_left.svg" alt="" /></div>
        </div>
      </div>
      
      <div class="chatpage-bar">
        <input type="text" />
        <button>发送</button>
      </div>
    </div>
</template>

<style scoped>
.chatpage{
    position: relative;
    height: 100%;
}
.chatpage-title{
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 15px;
    height: 45px;
    border-bottom: 1px solid #CDCDCD;
    font-size: 18px;
    font-weight: 700;
}
.chatpage-body-time{
    margin: 8px;
}
.chatpage-body-my,.chatpage-body-he{
    text-align: center;
}

.chatpage-body-talk-my{
    display: flex;
    justify-content: flex-end;
}
.my-right,.he-right{
    width: 35px;
    height: 35px;
    border: 1px solid #DBDBDB;
    border-radius: 5px;
    margin-left: 10px;
}
.my-right img,.he-right img{
    width: 34px;
    height: 34px;
}

.chatpage-body-talk-he{
    display: flex;
    justify-content: flex-start;
}
.chatpage-bar{
    display: flex;
    justify-content:space-between;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 49px;
    background-color: #efefef;
    padding: 6px 15px;
}
.chatpage-bar input{
    flex:1;
    height:36px;
    border-radius: 5px;
    border:none
}
.chatpage-bar button{
    margin-left: 15px;
    width: 55px;
    height:36px;
    border-radius: 5px;
    border:none;
    background-color: #007bff;
    color:#ffffff;
    font-size: 16px;
}
</style>
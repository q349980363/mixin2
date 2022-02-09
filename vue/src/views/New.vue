<template>
      <!-- 消息 -->
    <div class="news">
      <div class="news-title">
        <div>消息</div>
        <div> <img src="../assets/images/add.svg" alt=""> </div>
      </div>

      <div class="news-talk">
        <div class="news-head">
          <img src="../assets/images/nan.svg" alt="" />
        </div>
        <div class="news-body">
          <div class="body-left">
            <div class="body-name">Mg</div>
            <div class="body-content">11111111111</div>
          </div>
          <div class="body-right">
            <div>上午9:41</div>
          </div>
        </div>
      </div>

      <div class="news-talk">
        <div class="news-head">
          <img src="../assets/images/nan1.svg"  alt="" />
        </div>
        <div class="news-body">
          <div class="body-left">
            <div class="body-name">Mg2</div>
            <div class="body-content">22222222222</div>
          </div>
          <div class="body-right">
            <div>上午9:41</div>
          </div>
        </div>
      </div>

      <div class="news-bar">
        <!-- 消息 -->
        <div class="bar-news">
          <img src="../assets/images/news-checked.svg" alt="" />
        </div>
        <!-- 联系人 -->
        <div class="bar-contacts">
             <img src="../assets/images/contacts-unchecked.svg" alt="" />
        </div>
        <!-- 个人中心 -->
        <div class="bar-personal">
             <img src="../assets/images/personal-unchecked.svg" alt="" />
        </div>
      </div>
    </div>
</template>

<style scoped>

.news-body .body-left{
    text-align: left;
}
.news-body .body-left .body-name{
    margin-bottom: 5px;
}
.news-body .body-left .body-content{
    font-size: 12px;
}

</style>
<template>
    <!-- 搜索页 -->
    <div class="SearchUsers">
      <div class="SearchUsers-case">
        <img src="../assets/images/search.svg" alt="" />
        <input type="text" placeholder="搜索" />
        <router-link to="/homenav/contacts">取消</router-link>
      </div>
    </div>
</template>

<style scoped>
.SearchUsers-case {
    position: relative;
    display: flex;
    align-items: center;
    padding:0 15px;
    width:100%;
    height: 45px;
    /* border: 1px solid #000; */
}
.SearchUsers-case img{
    position: absolute;
    left: 20px;
}
.SearchUsers-case input{
    flex:1;
    height:36px;
    border-radius: 5px;
    padding:0 30px;
    font-size: 16px;
    border:none;
}

.SearchUsers-case a{
    width:35px;
    margin-left: 5px;
    font-size: 16px;
}
</style>
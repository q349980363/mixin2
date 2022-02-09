<template>
    <!-- 搜索页 -->
    <div class="search">
      <div class="search-case">
        <img src="../assets/images/search.svg" alt="" />
        <input type="text" placeholder="搜索" />
        <a href="#">取消</a>
      </div>
    </div>
</template>

<style scoped>
.search-case {
    position: relative;
    display: flex;
    align-items: center;
    padding:0 15px;
    width:100%;
    height: 45px;
    /* border: 1px solid #000; */
}
.search-case img{
    position: absolute;
    left: 20px;
}
.search-case input{
    flex:1;
    height:36px;
    border-radius: 5px;
    padding:0 30px;
    font-size: 16px;
    border:none;
}

.search-case a{
    width:35px;
    margin-left: 5px;
    font-size: 16px;
}
</style>
<template>
  <!-- 群列表 -->
  <div class="group">
    <BaseTopBarBack title="群聊" />

    <div class="group-list">
      <router-link to="/groupchat" v-for="i in 20" :key="i">
        <div class="row">
          <div class="headportrait">
            <img src="@/assets/images/nv1.svg" alt="" />
          </div>
          <div class="name">群1</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class Group extends Vue {}
</script>
<style lang="less" scoped>
.group {
  .group-list {
    overflow-y: auto;
    flex: 1;
  }
  .row {
    display: flex;
    align-items: center;
    margin-top: 10px;
    padding: 0 15px;
    height: 52px;
    border-bottom: 1px solid #cdcdcd;
    background-color: #fff;
    .headportrait {
      width: 35px;
      height: 35px;
      border: 1px solid #dbdbdb;
      border-radius: 5px;
      img {
        width: 34px;
        height: 34px;
      }
    }
    .name {
      flex: 1;
      display: flex;
      justify-content: space-between;
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
</style>

<template>
  <div class="administer">
    <BaseTopBarBack title="后台管理" />
    <div class="administer-list">
      <router-link to="/administerusers">
        <div class="info">
          <span>用户列表</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </div>
      </router-link>
      <router-link to="/administergroup">
        <div class="info">
          <span>群列表</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
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
export default class Administer extends Vue {}
</script>
    
<style lang="less" scoped>

.administer-list {
  overflow-y: auto;
  flex: 1;
  .info {
    display: flex;
    align-items: center;
    height: 45px;
    line-height: 45px;
    padding: 0 15px;
    margin: 10px 0;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    span{
      flex:1;
      text-align:left;
    }
    .return-right {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
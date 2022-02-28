<template>
  <!-- 我的页-设置-通用 -->
  <div class="settingscurrency">
    <BaseTopBarBack title="通用" />
    <div class="settingscurrency-list">
      <ListItem to="/settingscurrencysize" name="字体大小" />

      <!-- <router-link to="/settingscurrencysize">
        <div class="info">
          <div class="font">字体大小</div>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </div>
      </router-link> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
@Options({
  components: {
    ListItem,
  },
})
export default class SettingsCurrency extends Vue {}
</script>

<style lang="less" scoped>
.settingscurrency {
  .settingscurrency-list {
    overflow-y: auto;
    flex: 1;
    // .info {
    //   display: flex;
    //   align-items: center;
    //   height: 45px;
    //   line-height: 45px;
    //   padding: 0 15px;
    //   margin: 10px 0;
    //   background-color: #fff;
    //   cursor: pointer;
    //   box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    //   .font {
    //     flex: 1;
    //     text-align: left;
    //   }
    //   .return-right {
    //     width: 12px;
    //     height: 12px;
    //   }
    // }
  }
}
</style>

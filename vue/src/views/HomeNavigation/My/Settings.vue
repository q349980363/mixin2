<template>
  <!-- 我的页-设置 -->
  <div class="settings">
    <BaseTopBarBack title="设置" />

    <div class="settings-list">
      <ListItem to="/settingsnumber" name="账号与安全" />
      <ListItem to="/settingschat" name="聊天" />
      <ListItem to="/settingscurrency" name="通用" />
      <!-- <div class="info">
        <span>账号与安全</span>
        <img
          class="return-right"
          src="@/assets/images/return-right.svg"
          alt=""
        />
      </div>
      <router-link to="/settingschat">
        <div class="info">
          <span>聊天</span>
          <img
            class="return-right"
            src="@/assets/images/return-right.svg"
            alt=""
          />
        </div>
      </router-link>
      <router-link to="/settingscurrency">
        <div class="info">
          <span>通用</span>
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
export default class Settings extends Vue {}
</script>

<style lang="less" scoped>
.settings {
  .settings-list {
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
    //   span {
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

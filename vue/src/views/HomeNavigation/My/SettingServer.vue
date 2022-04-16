<template>
  <!-- 我的页-设置-服务器IP切换 -->
  <div class="settingserver">
    <BaseTopBarBack title="服务器IP切换" />

    <div class="settingserver-list">
      <div class="switch">
        <div class="switch-title">
          <!-- 服务器IP切换
          <br /> -->
          <small>当前 :{{ serverHost }}</small>
        </div>
        <div class="switch-item" @click="SetServerHost('')">重置为默认</div>
        <div class="switch-item" @click="SetServerHost('127.0.0.1:8000')">
          127.0.0.1:8000 (本机)
        </div>
        <div class="switch-item" @click="SetServerHost('192.168.1.157:8000')">
          192.168.1.157:8000 (Mg1024)
        </div>
        <div class="switch-item" @click="SetServerHost('192.168.1.117:8000')">
          192.168.1.117:8000 (Mg1025)
        </div>
        <div class="switch-item" @click="SetServerHost('192.168.1.235:8000')">
          192.168.1.235:8000
        </div>
        <div class="switch-item" @click="SetServerHost('home.lingy.top:89')">
          home.lingy.top:89
        </div>

        <div class="switch-item" @click="SetServerHost('198.211.7.244:8000')">
          198.211.7.244:8000 (服务器1)
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListItem from "@/components/ListItem.vue";
import { Action, State } from "vuex-class";
@Options({
  components: {
    ListItem,
  },
})
export default class SettingServer extends Vue {
  @State("serverHost")
  serverHost!: string;
  @Action("SetServerHost")
  SetServerHost?: (host: string) => void;
}
</script>

<style lang="less" scoped>
.settingserver {
  .settingserver-list {
    overflow-y: auto;
    flex: 1;
  }
}
</style>

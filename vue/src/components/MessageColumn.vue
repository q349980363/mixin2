<template>
  <!-- 消息列表 -->
  <router-link :to="_to" v-if="_to" class="messagecolumn">
    <Icons
      class="messagecolumn-headportrait"
      :name="_src"
      default="defaultAvatar"
    />
    <div class="messagecolumn-center">
      <div class="center-content">
        <div class="name">{{ _name }}</div>
        <div class="content">{{ content }}</div>
      </div>
    </div>
    <div class="messagecolumn-time">
      {{ time }}
    </div>
    <slot></slot>
  </router-link>
  <div class="messagecolumn" v-else>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";

@Options({
  components: {
    Icons,
  },
  props: {
    to: String,
    src: String,
    name: String,
    content: String,
    time: String,
    path: String,
  },
  watch: {},
})
export default class MessageColumn extends Vue {
  _src!: any;
  _name!: string;
  _to!: string;
  _content!: string;
  _time!: string;
  _path!: string;
  created() {
    this.loadData();
  }

  loadData() {
    const _this = this as any;
    this._src = _this.src;
    this._name = _this.name;
    // this._content = _this.content;
    this._time = _this.time;
    this._path = _this.path;
    this._to = _this.to;
    if (_this.path == "/system_session") {
      this._to = "/systeminforms";
      this._name = "系统消息";
      this._src = "logo";
      //系统消息自定义显示
    } else if (_this.path == "/global_chat") {
      this._to = "/globalchat";
      // this._name = "系统消息";
      // this._src = "logo";
      //世界消息自定义信息
    }
  }
}
</script>

<style lang="less" scoped>
.messagecolumn {
  position: relative;
  display: flex;
  padding: 10px 15px;
  height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #d5d5d5;
  .messagecolumn-headportrait {
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }
  .messagecolumn-center {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    text-align: left;
    .name {
      margin-bottom: 5px;
      max-width: 180px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .content {
      color: #999;
      font-size: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .messagecolumn-time {
    color: #999;
    font-size: 14px;
  }
}
</style>

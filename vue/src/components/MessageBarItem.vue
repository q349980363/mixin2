<template>
  <div class="head">
    <slot name="left" class="left"></slot>
    <!-- <img :src="src" alt="" /> -->
    <Icons class="headportrait" default="groupHead" :name="_src" />
  </div>
  <div class="main">
    <div class="left">
      <div class="name">{{ _name }}</div>
      <div class="content">{{ _content }}</div>
    </div>
  </div>
  <div class="time">
    <div>{{ time }}</div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";

@Options({
  components: { Icons },
  props: {
    src: String,
    name: String,
    content: String,
    time: String,
    path: String,
  },
})
export default class MessageBarItem extends Vue {
  _src!: string;
  _name!: string;
  _content!: string;
  _time!: string;
  _path!: string;
  created() {
    const _this = this as any;
    this._src = _this.src;
    this._name = _this.name;
    this._content = _this.content;
    this._time = _this.time;
    this._path = _this.path;
    if (this._path == "/system_session") {
      this._name = "系统消息";
      this._src = "logo";
    }
  }
}
</script>

<style lang="less" scoped>
// 头像
.head {
  display: flex;
  .headportrait {
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }
}
.main {
  flex: 1;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-left: 10px;
  font-size: 14px;
  .left {
    flex: 1;
    text-align: left;
    .name {
      margin-bottom: 5px;
    }
    .content {
      color: #999;
      font-size: 10px;
    }
  }
}
.time {
  color: #999;
  font-size: 14px;
}
</style>

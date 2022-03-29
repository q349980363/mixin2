<template>
  <!-- 消息列表 -->
  <router-link :to="to" v-if="to" class="userscolumn">
    <Icons class="userscolumn-headportrait" :name="_src" default="headgroup"/>
    <div class="userscolumn-name">{{ _name }}</div>
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
    path: String,
  },
})
export default class UsersColumn extends Vue {
  _src!: string;
  _name!: string;
  _path!: string;
  created() {
    const _this = this as any;
    this._src = _this.src;
    this._name = _this.name;
    this._path = _this.path;
    if (this._path == "/system_session") {
      this._name = "系统消息";
      this._src = "logo";
    }
  }
}
</script>

<style lang="less" scoped>
.userscolumn {
  position: relative;
  display: flex;
  padding: 10px 15px;
  height: 55px;
  background-color: #fff;
  border-bottom: 1px solid #d5d5d5;
  .userscolumn-headportrait {
    width: 35px;
    height: 35px;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
  }
  .userscolumn-name {
    flex: 1;
    margin-top: 8px;
    margin-left: 10px;
    font-size: 14px;
    text-align: left;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>

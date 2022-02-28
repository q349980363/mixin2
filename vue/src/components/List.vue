<template>
  <div class="list">
    <!-- <div class="list-name">{{name}}</div> -->
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    name: String,
  },
})
export default class List extends Vue {}
</script>

<style lang="less" scoped>
.list {
  margin: 10px 0;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  .list-name {
    color: #b9b9b9;
    // padding: 0 0 2px 2px;
    text-align: center;
  }
}
</style>

<template>
  <div class="BaseMask">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import { State, Getter, Action, Mutation, namespace } from "vuex-class";
import { Action } from "vuex-class";
@Options({})
export default class BaseMask extends Vue {}
</script>
<style scoped lang="less">
.BaseMask {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  padding-top: 170px;
  font-size: 20px;
  font-weight: bold;
}
</style>

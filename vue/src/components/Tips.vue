<template>
  <!-- 底边提示框 -->
  <transition-group name="bottom">
    <div class="container" v-for="(item, i) in tipsList" :key="i">
      <div class="tips">{{ item }}</div>
    </div>
  </transition-group>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { State, Action } from "vuex-class";

@Options({
  components: {},
})
export default class Tips extends Vue {
  @State("tipsList") tipsList!: Array<string>;
}
</script>

<style scoped>
.container {
  position: absolute;
  z-index: 100;
  bottom: 50px;
  left: 0;
  right: 0;
  text-align: center;
}
.tips {
  display: inline-block;
  min-width: 200px;
  height: 30px;
  line-height: 30px;
  /* margin: 0 auto; */
  border-radius: 6px;
  background-color: #ffff;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);

  /* margin: 0 auto; */
  /* margin-right: auto; */
}
</style>

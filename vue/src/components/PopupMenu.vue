<template>
  <div class="PopupMenu">
    <img :src="src" class="Icon" alt="加号按钮" @click="show = !show" />
    <div class="Popup">
      <slot v-if="show"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    src: String,
  },
})
export default class PopupMenu extends Vue {
  src!: string;
  show = false;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.PopupMenu {
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 12px 15px;
  //   height: 45px;
  //   border-bottom: 1px solid #cdcdcd;
  //   font-size: 18px;
  //   font-weight: 700;
  position: relative;
}
.Popup {
  position: absolute;
  background-color: #6d6d6d;

  color: #ffffff;
  border-radius: 5px;
  width: 120px;
  right: 16px;
  top: 24px;
}
.Icon {
  //   padding: 5px;
}
</style>

<style lang="less">




</style>

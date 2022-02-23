<template>
  <div class="PopupMenu">
    <div class="Mask" v-if="_show" @click="switchShow()"></div>
    <img :src="src" class="Icon" alt="加号按钮" @click="switchShow()" />

    <transition name="fade">
      <div class="Popup" v-if="_show" @click="switchShow()">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    src: String,
    show: {
      type: Boolean,
      default: false,
    },
  },
})
export default class PopupMenu extends Vue {
  src!: string;
  show!: boolean;
  _show = this.show;
  switchShow() {
    this._show = !this._show;
  }
}
</script>
<style scoped lang="less">
.PopupMenu {
  position: relative;
}
.Popup {
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: #000;
  border: 1px solid #464646;
  color: #fff;
  border-radius: 5px;
  width: 120px;
  right: 18px;
  top: 24px;
  font-size: 15px;
  font-weight: 400;
  padding: 10px;

  transition: height;
}
.Icon {
  //   padding: 5px;
  cursor: pointer;
}
.Mask {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000059;
}

</style>

<style lang="less"></style>

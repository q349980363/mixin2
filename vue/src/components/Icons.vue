<template>
  <img :src="path" :class="this.$props.class" alt="图片失效" title="" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import defaultSvg from "@/assets/images/avatar/default.svg";
import defaultAvatar from "@/assets/images/avatar/defaultAvatar.svg";
import groupHead from "@/assets/images/group-head.svg";
import logo from "@/assets/images/logo.svg";
import nv from "@/assets/images/avatar/nv.svg";
import nv1 from "@/assets/images/avatar/nv1.svg";
import nv2 from "@/assets/images/avatar/nv2.svg";
import nv3 from "@/assets/images/avatar/nv3.svg";
import nv4 from "@/assets/images/avatar/nv4.svg";
import nv5 from "@/assets/images/avatar/nv5.svg";
import nv6 from "@/assets/images/avatar/nv6.svg";
import nv7 from "@/assets/images/avatar/nv7.svg";
import nv8 from "@/assets/images/avatar/nv8.svg";
import nv9 from "@/assets/images/avatar/nv9.svg";
import nan from "@/assets/images/avatar/nan.svg";
import nan1 from "@/assets/images/avatar/nan1.svg";
import nan2 from "@/assets/images/avatar/nan2.svg";
import nan3 from "@/assets/images/avatar/nan3.svg";
import nan4 from "@/assets/images/avatar/nan4.svg";
import nan5 from "@/assets/images/avatar/nan5.svg";
const iconPathList: { [key: string]: string } = {
  defaultSvg,
  defaultAvatar,
  groupHead,
  logo,
  nv,
  nv1,
  nv2,
  nv3,
  nv4,
  nv5,
  nv6,
  nv7,
  nv8,
  nv9,
  nan,
  nan1,
  nan2,
  nan3,
  nan4,
  nan5,
};

@Options({
  components: {
    // SvgList,
  },
  props: {
    class: String,
    name: String,
  },
})
export default class Icons extends Vue {
  class!: string;
  name!: string;
  public get path(): string {
    const path = iconPathList[this.name];
    // console.log(path);
    if (!path) {
      return defaultSvg;
    }
    return path;
  }
}
</script>

<style lang="less"></style>

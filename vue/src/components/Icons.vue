<template>
  <img :src="path" :class="this.$props.class" alt="图片失效" title="" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import defaultSvg from "@/assets/images/avatar/default.svg";
import defaultAvatar from "@/assets/images/avatar/defaultAvatar2.svg";
import defaultAvatar1 from "@/assets/images/avatar/defaultAvatar3.svg";
import defaultAvatar2 from "@/assets/images/avatar/defaultAvatar4.svg";
import defaultAvatar3 from "@/assets/images/avatar/defaultAvatar5.svg";
import defaultAvatar4 from "@/assets/images/avatar/defaultAvatar6.svg";
import defaultAvatar5 from "@/assets/images/avatar/defaultAvatar6.svg";
import defaultAvatar6 from "@/assets/images/avatar/defaultAvatar6.svg";
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
import notice from "@/assets/images/notice.svg";
import add from "@/assets/images/add.svg";
import message from "@/assets/images/message.svg";
import contact from "@/assets/images/contact.svg";
import my from "@/assets/images/my.svg";
import groupchat from "@/assets/images/groupchat.svg";
import addFriends from "@/assets/images/addFriends.svg";
import qrCode from "@/assets/images/qrCode.svg";
import set from "@/assets/images/set.svg";
import about from "@/assets/images/about.svg";
import administer from "@/assets/images/administer.svg";
import return1 from "@/assets/images/return.svg";
import return2 from "@/assets/images/return-right.svg";
import more from "@/assets/images/more.svg";

const iconPathList: { [key: string]: string } = {
  defaultSvg,
  defaultAvatar,
  defaultAvatar1,
  defaultAvatar2,
  defaultAvatar3,
  defaultAvatar4,
  defaultAvatar5,
  defaultAvatar6,
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
  notice,
  add,
  message,
  contact,
  my,
  groupchat,
  addFriends,
  qrCode,
  set,
  about,
  administer,
  return1,
  return2,
  more,
};

@Options({
  components: {
    // SvgList,
  },
  props: {
    class: String,
    name: String,
    default: {
      type: String,
      default: "",
    },
  },
})
export default class Icons extends Vue {
  class!: string;
  name!: string;
  default!: string;
  public get path(): string {
    const path = iconPathList[this.name];
    // console.log(path);
    if (!path) {
      if (this.default != "") {
        return iconPathList[this.default];
      } else {
        return defaultSvg;
      }
    }
    return path;
  }
}
</script>

<style lang="less"></style>

<template>
  <div class="my-left" v-if="direction == 'left'">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="angle"
      viewBox="0 0 12 14.04"
    >
      <path
        fill=" rgb(0, 123, 255)"
        class="cls-1"
        d="M650.09,1193h12c-1,.57-1.09,1-3.09,4-2.29,3.43-2,9-3,10Z"
        transform="translate(-650.09 -1193)"
      />
    </svg>
    <slot />
  </div>
  <div class="he-left" v-else-if="direction == 'right'">
    <svg
      class="angle"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 14.04"
    >
      <path
        fill=" rgb(255, 255, 255)"
        class="cls-1"
        d="M458.09,1193h-12c1,.57,1.09,1,3.09,4,2.29,3.43,2,9,3,10Z"
        transform="translate(-446.09 -1193)"
      />
    </svg>
    <slot />
  </div>
  <div class="" v-else>
    {{ location }}
    <slot />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
// import BottomNavigationBar from "@/components/BottomNavigationBar.vue"; // @ is an alias to /src

@Options({
  components: {
    // BottomNavigationBar,
  },
  props: {
    direction: String,
  },
})
export default class ChatBubble extends Vue {
  direction!: string;
}
</script>

<style lang="less" scoped>
.Bubble {
  // border: 10px solid transparent;
  padding: 10px;
  background-color: rgb(0, 123, 255);
  color: #fff;
  max-width: 60%;
  border-radius: 5px;
  word-wrap: break-word;
  word-break: break-all;
  text-align: left;
  position: relative;
  .angle {
    position: absolute;
    top: 0px;
    right: -8px;
    width: 18px;
  }
}

.my-left {
  .Bubble;
}

.he-left {
  .Bubble;

  margin-left: 10px;
  background-color: rgb(255, 255, 255);
  color: #000;

  .angle {
    left: -8px;
  }
}
</style>

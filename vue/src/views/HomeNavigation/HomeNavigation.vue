<template>
  <div class="HomeNavigation">
    <router-view />
    <BottomNavigationBar />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BottomNavigationBar from "@/components/BottomNavigationBar.vue"; // @ is an alias to /src

@Options({
  components: {
    BottomNavigationBar,
  },
})
export default class HomeNavigation extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.HomeNavigation {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

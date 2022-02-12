<template>
  <!-- 群聊聊天页 -->
  <div class="groupchat">
    <BaseTopBarBack title="群1">
      <img src="@/assets/images/more.svg" alt="" />
    </BaseTopBarBack>
    <div class="groupchat-body">
      <div class="groupchat-body-my" v-for="i in 10" :key="i">
        <div class="groupchat-body-time">上午9:41</div>
        <div class="groupchat-body-talk-my">
          <div class="my-left">
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
            12312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312312
            3123123123123123123123123123123123123123123123123123123123123123123123123123
          </div>
          <div class="my-right">
            <img src="@/assets/images/nv.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="groupchat-body-he">
        <div class="groupchat-body-time">上午9:41</div>
        <div class="groupchat-body-talk-he">
          <div class="he-right">
            <img src="@/assets/images/nan.svg" alt="" />
          </div>
          <div class="he-left">
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
            11112312312312323457983475439857349857934578943978547309857349857384957983457982578912738901279831729831278361723571623571235127635126783
          </div>
        </div>
      </div>
    </div>
    <div class="groupchat-bar">
      <input type="text" />
      <button>发送</button>
    </div>
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
export default class Chatpage extends Vue {}
</script>
<style lang="less" scoped>
.groupchat {
  height: 100%;
  display: flex;
  flex-direction: column;
  .groupchat-body {
    overflow-y: auto;
    flex: 1;
    .groupchat-body-my {
      text-align: center;
      .groupchat-body-time {
        margin: 8px;
      }
      .groupchat-body-talk-my {
        display: flex;
        justify-content: flex-end;
      }
    }
    .groupchat-body-he {
      text-align: center;
      .groupchat-body-time {
        margin: 8px;
      }
      .groupchat-body-talk-he {
        display: flex;
        justify-content: flex-start;
      }
    }
  }
}
.my-left {
  // border: 10px solid transparent;
  padding: 10px;
  background-color: rgb(0, 123, 255);
  /* border-image: url(@/assets/images/talk_right.svg) 5 8 5 5 stretch; */
  color: #fff;
  max-width: 70%;
  border-radius: 5px;
  /* padding: 15px; */
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
.he-left {
  padding: 10px;
  margin-left: 10px;
  background-color: rgb(255, 255, 255);
  /* border-image: url(@/assets/images/talk_right.svg) 5 8 5 5 stretch; */
  color: #000;
  max-width: 70%;
  border-radius: 5px;
  /* padding: 15px; */
  word-wrap: break-word;
  word-break: break-all;
  text-align: left;
  position: relative;
  .angle {
    position: absolute;
    top: 0px;
    left: -8px;
    width: 18px;
  }
}

.my-right,
.he-right {
  width: 35px;
  height: 35px;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-left: 10px;
}

.my-right img,
.he-right img {
  width: 34px;
  height: 34px;
}

.groupchat-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  // width: 100%;
  height: 49px;
  background-color: #efefef;
  padding: 0 8px;
}

.groupchat-bar input {
  flex: 1;
  padding-left: 5px;
  height: 36px;
  border-radius: 5px;
  border: none;
}

.groupchat-bar button {
  margin-left: 5px;
  width: 55px;
  height: 36px;
  line-height: 36px;
  border-radius: 5px;
  border: none;
  background-color: #007bff;
  color: #ffffff;
  font-size: 16px;
}
</style>

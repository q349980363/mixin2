<template>
  <!-- 我的页-设置-通用-字体大小 -->
  <div class="settingscurrencysize">
    <BaseTopBarBack title="字体大小" />

    <div class="settingscurrencysize-list">
      <div class="chatbubble">
        <Icons class="headportrait" name="logo" />
        <ChatBubble direction="right">
          <div class="chatbubble-text">标准</div>
          <div class="chatbubble-operation">
            <button class="btn btn-secondary btn-sm btn-reject">取消</button>
            <button class="btn btn-primary btn-sm btn-agree">确定</button>
          </div>
        </ChatBubble>
      </div>
      <div class="chatbubble">
        <Icons class="headportrait" name="logo" />
        <ChatBubble direction="right">
          <div class="chatbubble-text">大号</div>
          <div class="chatbubble-operation">
            <button class="btn btn-secondary btn-sm btn-reject">取消</button>
            <button class="btn btn-primary btn-sm btn-agree">确定</button>
          </div>
        </ChatBubble>
      </div>
      <div class="chatbubble">
        <Icons class="headportrait" name="logo" />
        <ChatBubble direction="right">
          <div class="chatbubble-text">特大号</div>
          <div class="chatbubble-operation">
            <button class="btn btn-secondary btn-sm btn-reject">取消</button>
            <button class="btn btn-primary btn-sm btn-agree">确定</button>
          </div>
        </ChatBubble>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
import ChatBubble from "@/components/ChatBubble.vue";

@Options({
  components: {
    Icons,
    ChatBubble,
  },
})
export default class SettingsCurrencySize extends Vue {}
</script>
<style lang="less" scoped>
.settingscurrencysize {
  .settingscurrencysize-submit {
    display: inline-block;
    margin-right: 15px;
    font-weight: 400;
    font-size: 16px;
    color: #515151;
    cursor: pointer;
  }
  .settingscurrencysize-list {
    overflow-y: auto;
    flex: 1;
    .chatbubble {
      display: flex;
      padding: 10px 15px 0 15px;
      .headportrait {
        width: 35px;
        height: 35px;
        border: 1px solid #dbdbdb;
        border-radius: 5px;
      }

      .chatbubble-text {
        font-size: 16px;
        padding: 5px;
      }
      .chatbubble-text1 {
        font-size: 18px;
        padding: 5px;
      }
      .chatbubble-text2 {
        font-size: 20px;
        padding: 5px;
      }
      .chatbubble-operation {
        text-align: right;
        .btn {
          margin-left: 5px;
        }
        .btn-reject {
          margin-right: 5px;
          width: 50px;
          height: 26px;
          font-size: 14px;
        }
        .btn-agree {
          width: 50px;
          height: 26px;
          font-size: 14px;
        }
      }
      .chatbubble-time {
        margin-top: 5px;
        font-size: 14px;
        color: #515151;
      }
    }
  }
}
</style>

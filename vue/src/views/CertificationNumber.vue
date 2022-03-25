<template>
  <!-- 号码认证 -->
  <div class="certificationnumber">
    <BaseTopBarBack title="号码认证" />
    <div class="certificationnumber-list">
      <div class="list-content">
        <Icons name="logo" class="certificationnumber-icon" />
        <div class="certificationnumber-number" contenteditable="true">
          <Icons name="mobilephone" class="number-icon" />
          <input type="text" />
        </div>
        <button class="content-but">认证号码</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Icons from "@/components/Icons.vue";
@Options({
  components: {
    Icons,
  },
})
export default class CertificationNumber extends Vue {}
</script>

<style lang="less" scoped>
.certificationnumber {
  .certificationnumber-list {
    overflow-y: auto;
    flex: 1;
    .list-content {
      padding: 0 15px;
      margin: 0 auto;
      width: 100%;
      max-width: 330px;
      text-align: center;
      padding-top: 170px;

      .certificationnumber-icon {
        margin: 0 auto;
        width: 60px;
        height: 60px;
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 10px;
      }
      .certificationnumber-number {
        position: relative;
        display: flex;
        margin: 45px 0;
        width: 300px;
        height: 41px;
        line-height: 41px;
        border-radius: 8px;
        // outline: 0;
        input {
          padding-left: 41px;
          width: 100%;
          height: 100%;
          border-radius: 8px;
          border: 1px solid #bbbbbb;
        }
        input:focus {
          border: none;
        }
        .number-icon {
          position: absolute;
          margin-top: 10px;
          margin-left: 10px;
          width: 21px;
          height: 21px;
        }
      }
      .content-but {
        height: 40px;
        width: 300px;
        border: none;
        background-color: #007bff;
        color: #fff;
        font-size: 18px;
        border: 1px solid #ced4da;
        border-radius: 8px;
        transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        cursor: pointer;
      }
      .content-but:focus {
        background-color: #0b5ed7;
        color: #fff;
        border-color: #0a58ca;
        box-shadow: rgba(13, 110, 253, 0.25) 0px 0px 0px 4px;
      }
      .content-but:active {
        background-color: #0b5ed7;
      }
    }
  }
}
</style>

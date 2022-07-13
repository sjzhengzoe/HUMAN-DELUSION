<template>
  <div class="Find_component">
    <div class="find_pictures">
      <div class="title">FIND PICTURES</div>
      <div class="text">ENTER TRANSACTION number</div>
      <Input class="input1" v-model="num" />
      <div v-if="needCode && code" class="text">ENTER VERIFICATION CODE</div>
      <div class="flex f-y-c f-sb" v-if="needCode && code">
        <Input v-model="captchaCode" class="input2" />
        <img class="code" :src="code" alt="" />
      </div>
      <div @click="toCheck" class="check_btn">CHECK</div>
    </div>

    <img class="img1 flex" src="../../assets/m/find_img1.png" alt="" />
    <div class="tips">Log in to paypal and check your order number</div>
    <div class="mobile_box flex-y f-x-c f-y-c">
      <div class="mobile">MOBILE</div>
      <img class="img2 flex" src="../../assets/m/find_img2.png" alt="" />
    </div>
  </div>
</template>

<script>
import { Input, Message } from 'view-design';
import * as Api from '../../api/api.js';
export default {
  name: 'Find-component',
  components: { Input },
  data: function () {
    return {
      num: '',
      captchaCode: '',
      code: '',
      needCode: '',
    };
  },
  async mounted() {
    this.getValidCode();
  },
  methods: {
    async getValidCode() {
      const res = await Api.getFindValidCode();
      this.needCode = res.data.data.captchaVerify;
      this.code = res.data.data.image;
    },
    async toCheck() {
      if (!this.num) {
        Message.error('请输入找回码');
        return;
      }

      if (this.needCode && !this.captchaCode) {
        Message.error('请输入验证码');
        return;
      }

      const {
        data: { data, code, msg },
      } = await Api.getFindInfo({
        paymentType: 'PayPal',
        num: this.num,
        captchaCode: this.captchaCode,
      });
      if (code == 0) {
        localStorage.setItem(this.num, JSON.stringify({ doc: data.doc, comDoc: data.comDoc }));
        this.$router.push({
          path: '/download',
          query: { num: this.num, payToken: data.payToken },
        });
      } else {
        Message.error(msg);
        this.getValidCode();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Find_component {
  width: 750px;
  padding-top: 59px;
  background: url('../../assets/m/find_bg.png') top/contain no-repeat;
  .find_pictures {
    width: 707px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0px 15px 45px 0px #edf1f7;
    border-radius: 9px;
    // backdrop-filter: blur(42.36311239193084px);
    padding: 31px 23px 70px;
    .title {
      font-size: 53px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 74px;
      margin-bottom: 28px;
    }
    .text {
      font-size: 26px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #071c43;
      line-height: 37px;
      margin-bottom: 29px;
    }
    .input1 {
      width: 640px;
      height: 89px;
      background: #ffffff;
      border-radius: 9px;
      border: 1px solid rgba(211, 218, 223, 0.86);
      margin-bottom: 21px;
      /deep/.ivu-input {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        line-height: 89px;
        height: 89px;
        border-radius: 6px;
        padding-left: 14px;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .input2 {
      width: 392px;
      height: 89px;
      background: #ffffff;
      border-radius: 9px;
      border: 1px solid rgba(211, 218, 223, 0.86);
      margin-bottom: 67px;
      /deep/.ivu-input {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        line-height: 89px;
        height: 89px;
        border-radius: 6px;
        padding-left: 14px;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .code {
      width: 223px;
      height: 80px;
      margin-bottom: 67px;
    }
    .check_btn {
      width: fit-content;
      font-size: 39px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 55px;
      padding: 14px 170px;
      background: #38d063;
      box-shadow: 0px 3px 15px 0px rgba(56, 208, 99, 0.45);
      border-radius: 41px;
      margin: 0 auto;
    }
  }
  .img1 {
    width: 164px;
    height: 176px;
    margin: 58px auto 22px;
  }
  .tips {
    width: 559px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 50px;
    margin: 0 auto 10px;
  }
  .mobile_box {
    position: relative;
    .mobile {
      position: absolute;
      top: 38px;
      left: 0;
      right: 0;
      margin: 0 auto;
      text-align: center;
      font-size: 30px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #071c43;
      line-height: 42px;
    }
    .img2 {
      width: 489px;
      margin: 0 auto -50px;
    }
  }
}
</style>

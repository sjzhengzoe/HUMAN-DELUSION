<template>
  <div class="Find_component">
    <div class="find_banner">
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
    </div>

    <img class="img1 flex" src="../../assets/pc/find_img.png" alt="" />
    <div class="tips">Log in to paypal and check your order number</div>
    <div class="flex f-y-start f-x-c">
      <div class="pc_box flex-y f-x-c f-y-c">
        <div class="pc">PC</div>
        <img class="img flex" src="../../assets/pc/find_pc.png" alt="" />
      </div>
      <div class="mobile_box flex-y f-x-c f-y-c">
        <div class="mobile">MOBILE</div>
        <img class="img flex" src="../../assets/pc/find_m.png" alt="" />
      </div>
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
  .find_banner {
    width: 100%;
    height: 518px;
    background: url('../../assets/pc/find_bg.png') top/cover no-repeat;
    background-color: rgba(247, 247, 247, 1);
    padding-top: 20px;
  }
  .find_pictures {
    width: 1008px;
    height: 463px;
    margin: 0 auto;
    padding: 0 140px;
    box-sizing: border-box;
    background: url('../../assets/pc/find_bg_content.png') center/cover no-repeat;

    .title {
      font-size: 36px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 50px;
      text-align: center;
      padding: 92px 0 26px;
    }
    .text {
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #071c43;
      line-height: 25px;
      margin-bottom: 11px;
    }
    .input1 {
      width: 725px;
      height: 40px;
      background: #ffffff;
      border-radius: 6px;
      border: 1px solid #e2e2e2;
      margin-bottom: 21px;
      /deep/.ivu-input {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        line-height: 38px;
        height: 38px;
        padding-left: 14px;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .input2 {
      width: 598px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #e2e2e2;
      margin: 0 25px 29px 0;
      /deep/.ivu-input {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        line-height: 38px;
        height: 38px;
        border-radius: 6px;
        padding-left: 14px;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .code {
      width: 111px;
      height: 40px;
      margin-bottom: 29px;
    }
    .check_btn {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 22px;
      margin: 0 auto;
      padding: 9px 0;
      text-align: center;
      cursor: pointer;
      width: 727px;
      background: #38d063;
      box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
      border-radius: 4px;
    }
  }
  .img1 {
    width: 108px;
    height: 116px;
    margin: 53px auto 22px;
  }
  .tips {
    font-size: 26px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 37px;
    margin: 0 auto;
    text-align: center;
  }
  .pc_box {
    width: 957px;
    margin: 38px 0 0;
    .pc {
      margin-bottom: -60px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #071c43;
      line-height: 42px;
    }
    .img {
      width: 957px;
    }
  }
  .mobile_box {
    margin: 38px 0 0;
    flex-shrink: 0;
    .mobile {
      margin-bottom: -60px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #071c43;
      line-height: 42px;
    }
    .img {
      width: 460px;
    }
  }
}
</style>

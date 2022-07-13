<template>
  <div class="PayInfo_component flex f-y-c">
    <div class="info_box">
      <div class="title">
        Download photos for 4x6" (10x15cm) printing + digital photos for online use
      </div>
      <div class="info flex f-y-start">
        <div v-if="payInfo.photo">
          <div class="item">Order Number: {{ payInfo.orderNo }}</div>
          <div class="item">Photo size: {{ payInfo.photo.size }}</div>
          <div class="item">Photo DPI: {{ payInfo.photo.dpi }}</div>
          <div class="item">Photo pixel: {{ payInfo.photo.pixel }}</div>
        </div>
        <img class="img flex" src="../../assets/m/passport_pic_img.png" alt="" />
      </div>

      <div class="pay_text">PROME CODE:</div>
      <div class="flex f-y-c">
        <Input v-model="coupon" class="input" placeholder="请输入优惠码" />
        <div @click="useCoupon" class="send_btn">EXCHANGE</div>
      </div>

      <div class="price_info">
        Payment for downloading watermarked photos: <span :class="{ isUseCode }">{{ price }}</span>
      </div>
    </div>
    <div class="bank_info flex-y f-x-c f-y-c">
      <img @click="toPay" src="../../assets/m/passport_pic_pay1.png" alt="" />
      <img src="../../assets/m/passport_pic_pay2.png" alt="" />
      <img src="../../assets/m/passport_pic_pay3.png" alt="" />
    </div>
  </div>
</template>

<script>
import { Input, Message } from 'view-design';
import * as Api from '../../api/api';

export default {
  name: 'PayInfo-component',
  data: function () {
    return {
      coupon: '',
      price: '$5.00',
      isUseCode: false,
    };
  },
  computed: {
    payInfo() {
      return this.$store.state.payInfo;
    },
  },
  methods: {
    numToPrice(nums) {
      let num = new String(nums);
      if (num.indexOf('.') == -1) {
        num = '$' + num + '.00';
      } else {
        num = num.split('.')[1].length < 2 ? '$' + num + '0' : '&' + num;
      }
      return num;
    },
    // 跳转支付
    async toPay() {
      const { payToken } = this.$route.query;
      const { data } = await Api.getPayInfo({ payToken, num: this.coupon });
      location.href = data.data.href;
    },
    // 使用优惠券
    async useCoupon() {
      const { payToken } = this.$route.query;
      const res = await Api.getCoupon({ payToken, num: this.coupon });
      const { code, msg, data } = res.data;
      if (code !== 0) {
        Message.error(msg);
        return;
      } else if (data.payTotal == 0) {
        this.$router.push({ path: '/download', query: { payToken: payToken } });
      } else {
        this.isUseCode = true;
        this.price = this.numToPrice(data.payTotal);
      }
    },
  },
  watch: {
    payInfo() {
      this.price =
        this.payInfo && this.payInfo.payTotal ? this.numToPrice(this.payInfo.payTotal) : 0;
      if (this.payInfo.payTotal != 5) {
        this.isUseCode = true;
      }
    },
  },

  components: { Input },
};
</script>

<style lang="less" scoped>
.PayInfo_component {
  width: 1070px;
  margin: 0 auto 44px;
  padding: 92px 0 0px;
  .info_box {
    width: 530px;
    background: #f7fafc;
    border-radius: 6px;
    border: 1px solid #d3dadf;
    padding: 30px 32px 0;
    margin-right: 112px;
  }

  .img {
    width: 165px;
    height: 130px;
    margin: 0 auto;
  }
  .title {
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 28px;
    margin: 0 0 31px 0px;
  }
  .info {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7d7f8d;
    line-height: 34px;
    padding-bottom: 28px;
    border-bottom: 1px solid #d3dadf;
  }
  .pay_text {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7d7f8d;
    line-height: 22px;
    padding: 21px 0 9px;
  }
  .input {
    width: 323px;
    height: 37px;
    background: #ffffff;
    border-radius: 6px;
    border: 1px solid #e2e2e2;
    /deep/.ivu-input {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000;
      line-height: 37px;
      height: 37px;
      padding-left: 22px;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .send_btn {
    cursor: pointer;
    background: #38d063;
    box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 22px;
    padding: 7.5px 14px;
    margin-left: 11px;
  }
  .price_info {
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 25px;
    padding: 27px 0 43px;
    .isUseCode {
      color: red;
    }
  }
  .bank_info {
    img {
      width: 375px;
      cursor: pointer;
      margin-bottom: 23px;
    }
  }
}
</style>

<template>
  <div class="PayInfo_component">
    <img class="img flex" src="../../assets/m/passport_pic_img.png" alt="" />
    <div class="title">
      Download photos for 4x6" (10x15cm) printing + digital photos for online use
    </div>
    <div class="info" v-if="payInfo.photo">
      <div class="item">Order Number: {{ payInfo.orderNo }}</div>
      <div class="item">Photo size: {{ payInfo.photo.size }}</div>
      <div class="item">Photo DPI: {{ payInfo.photo.dpi }}</div>
      <div class="item">Photo pixel: {{ payInfo.photo.pixel }}</div>
    </div>

    <div class="pay_text">PROME CODE:</div>
    <div class="flex f-y-c">
      <Input v-model="coupon" class="input" placeholder="请输入优惠码" />
      <div @click="useCoupon" class="send_btn">SEND</div>
    </div>

    <div class="price_info">
      Payment for downloading watermarked photos: <span :class="{ isUseCode }">{{ price }}</span>
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
  padding: 92px 0 0px;
  background: #f7fafc;
  .img {
    width: 272px;
    height: 214px;
    margin: 0 auto;
  }
  .title {
    width: 587px;
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 57px;
    margin: 0 0 53px 77px;
  }
  .info {
    width: 570px;
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7d7f8d;
    line-height: 63px;
    margin: 0 0 0 77px;
    padding-bottom: 95px;
    border-bottom: 2px solid #d3dadf;
  }
  .pay_text {
    padding: 38px 0 16px 81px;
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7d7f8d;
    line-height: 42px;
  }
  .input {
    width: 366px;
    height: 85px;
    background: #ffffff;
    border-radius: 11px;
    border: 2px solid #e2e2e2;
    margin: 0 13px 0 75px;
    /deep/.ivu-input {
      padding: 0 0 0 45px;
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #b6b7c0;
      height: 85px;
      line-height: 85px;
      &:focus {
        box-shadow: none;
      }
    }
  }
  .send_btn {
    font-size: 39px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 55px;
    padding: 14px 74px;
    background: #38d063;
    box-shadow: 0px 3px 15px 0px rgba(56, 208, 99, 0.45);
    border-radius: 41px;
  }
  .price_info {
    width: 652px;
    font-size: 33px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 46px;
    margin: 60px 0 88px 77px;
    .isUseCode {
      color: red;
    }
  }
  .bank_info {
    background: #fff;
    padding: 20px 20px 20px;
    img {
      width: 670px;
      margin-bottom: 20px;
    }
  }
}
</style>

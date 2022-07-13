<template>
  <div>
    <div class="payLock"></div>
    <div class="PayLock_component common_banner_bg">
      <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
      <img class="common_title" src="../../assets/PayLock_title.png" alt="" />
      <div class="content_box common_banner_middle flex-y f-y-c">
        <img class="img no_click" src="../../assets/PayLock_img.png" alt="" />
        <div class="text_box">
          诸葛网<span>诸葛老师</span>根据你的生日<span>量身定制</span>的一生婚
          姻报告，<span>一人仅此一份</span>，内容<span>娉美千元亲测</span>，涵
          盖婚姻<span>方方面面</span>，已有<span>163780</span>人购买
        </div>
        <div class="price_box flex-y f-x-c">
          <div class="flex f-y-c f-sb before_box">
            <div class="before_price">原价：¥138元</div>
            <div class="tips">限时优惠倒计时</div>
          </div>
          <div class="flex f-sb f-y-c after_price" v-if="payData.price">
            <div class="flex f-y-c">
              <div class="price_text">结缘价</div>
              <div class="price_num">¥{{ payData.price }}</div>
            </div>
            <div class="time flex f-y-c">
              <div>{{ minute }}</div>
              :
              <div>{{ second }}</div>
              :
              <div>{{ millisecond }}</div>
            </div>
          </div>
        </div>
        <div class="pay_box">
          <!-- 微信 -->
          <div class="flex f-sb f-y-c item_box" @click="payType = 'wechat'">
            <div class="flex f-y-c">
              <img class="logo" src="../../assets/Pay_wechat.png" alt="" />
              <div class="text">微信支付</div>
            </div>
            <img v-if="payType == 'wechat'" class="icon" src="../../assets/Pay_check.png" alt="" />
            <img
              v-if="payType != 'wechat'"
              class="icon"
              src="../../assets/Pay_no_check.png"
              alt=""
            />
          </div>
          <!-- 支付宝 -->
          <div class="flex f-sb f-y-c item_box" @click="payType = 'alipay'">
            <div class="flex f-y-c">
              <img class="logo" src="../../assets/Pay_alipay.png" alt="" />
              <div class="text">支付宝支付</div>
            </div>
            <img v-if="payType == 'alipay'" class="icon" src="../../assets/Pay_check.png" alt="" />
            <img
              v-if="payType != 'alipay'"
              class="icon"
              src="../../assets/HomeInput_not_check.png"
              alt=""
            />
          </div>
        </div>
        <img class="pay_button" @click="toPay" src="../../assets/PayLock_button.png" alt="" />
      </div>
      <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
    </div>
    <div class="banner_bg_box flex-y">
      <img class="title" src="../../assets/Pay_img_title.png" alt="" />
      <div class="content_box flex-y f-y-c" @click="toPay">
        <img class="img img1 no_click" src="../../assets/Pay_img1.png" alt="" />
        <img class="img img2 no_click" src="../../assets/Pay_img2.png" alt="" />
        <img class="img img3 no_click" src="../../assets/Pay_img3.png" alt="" />
      </div>
      <img class="img img4 no_click" src="../../assets/Pay_img4.png" alt="" />
    </div>
    <Bottom :handleClick="toPay" type="ScrollDom" domClassName="PayLock_component" />
  </div>
</template>

<script>
import CommonTools from '../../utils/CommonTools';
import Bottom from '../Common/Bottom.vue';
export default {
  name: 'Pay-Lock',
  data: function () {
    return {
      timer: null,
      time: 30 * 60 * 1000, // 30分钟 毫秒
      minute: '00',
      second: '00',
      millisecond: '00',
      payType: 'wechat', // 1、alipay 2、wechat
    };
  },
  components: { Bottom },

  watch: {
    time(time) {
      this.timeTranslation(time);
    },
  },
  computed: {
    DOMAIN_PAY() {
      return this.$store.state.DOMAIN_PAY;
    },
    payData() {
      return this.$store.state.payData;
    },
  },
  methods: {
    toPay() {
      const business = CommonTools.getLocal('business');
      const oid = this.$route.query.oid;
      let bid = '';
      if (this.payType == 'wechat') {
        bid = business.wx_pay_id;
      } else {
        bid = business.ali_pay_id;
      }
      location.href = `${this.DOMAIN_PAY}/${this.payType}/?oid=${oid}&bid=${bid}`;
    },
    timeTranslation(time) {
      let minute = parseInt(time / (1000 * 60));
      let second = parseInt((time % (1000 * 60)) / 1000);
      let millisecond = parseInt((time % (1000 * 60)) % 1000);
      this.minute = minute >= 10 ? `${minute}` : `0${minute}`;
      this.second = second >= 10 ? `${second}` : `0${second}`;
      this.millisecond =
        millisecond > 100
          ? `${(millisecond + '').substring(0, 2)}`
          : `0${`${(millisecond + '').substring(1, 2)}`}`;
    },
  },
  mounted() {
    this.timeTranslation(this.time);
    setInterval(() => {
      this.time = this.time - 10;
    }, 10);
  },
};
</script>

<style lang="less" scoped>
.payLock {
  height: 60px;
}
.banner_bg_box {
  width: 690px;
  height: 1941px;
  margin: 0 auto;
  position: relative;
  background: url('../../assets/Pay_img_bg.png') top/contain no-repeat !important;
  .title {
    width: 750px;
    position: absolute;
    top: -60px;
    left: -30px;
    right: 0;
    margin: 0 auto;
  }
  .content_box {
    padding-top: 90px;
    .img {
      width: 620px;
    }
    .img1,
    .img2,
    .img3 {
      margin-bottom: 19px;
    }
  }
  .img4 {
    width: 622px;
    height: 369px;
    margin: 0 auto;
  }
}
.PayLock_component {
  margin-bottom: 120px;
  .content_box {
    .img {
      width: 616px;
      height: 381px;
      margin: 23px auto 35px;
    }
    .text_box {
      width: 589px;
      font-size: 28px;
      color: #666666;
      line-height: 48px;
      padding-bottom: 54px;

      > span {
        color: #df596b;
      }
    }
    .price_box {
      width: 604px;
      border-top: 2px solid #cccccc;
      border-bottom: 2px solid #cccccc;
      .before_box {
        margin: 25px 0 20px;
      }
      .after_price {
        margin-bottom: 24px;
      }
      .before_price {
        font-size: 25px;
        line-height: 25px;
        text-decoration: line-through;
        color: #666666;
      }
      .tips {
        font-size: 25px;
        color: #666666;
      }
      .price_text {
        font-size: 26px;
        color: #ffffff;
        line-height: 28px;
        background: #df596b;
        border-radius: 5px;
        padding: 6px 10px;
        margin-right: 11px;
      }
      .price_num {
        font-size: 50px;
        color: #df596b;
        font-weight: 600;
      }
      .time {
        font-size: 35px;
        color: #df596b;
        font-weight: 600;
        > div {
          width: 50px;
        }
      }
    }
    .pay_box {
      width: 578px;
      margin-top: 42px;
      .item_box {
        margin-bottom: 35px;
      }
      .logo {
        width: 75px;
        height: 75px;
        margin-right: 30px;
      }
      .text {
        font-size: 29px;
        color: #333333;
      }
      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .pay_button {
      width: 595px;
      transform: scale(0.8);
      animation: button 2s linear infinite;
      @keyframes button {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0.8);
        }
      }
    }
  }
}
</style>

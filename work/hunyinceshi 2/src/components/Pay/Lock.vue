<template>
  <div v-if="baseData && payData">
    <div class="Lock_component common_banner_bg flex-y f-x-c">
      <img class="common_title" src="../../assets/Pay_Lock_title.jpg" alt="" />
      <div class="content_box common_banner_middle flex-y f-y-c">
        <div class="name_info_box">
          <div class="info_box flex f-y-c">
            <div class="item">姓名：{{ payData.username }}</div>
            <div class="item">性别：{{ payData.gender === 'male' ? '男' : '女' }}</div>
          </div>
          <div class="info_box">公历：{{ baseData.solar }}</div>
        </div>
        <div class="price_box flex-y f-x-c">
          <div class="flex f-y-end f-sb before_box">
            <div class="before_price">限时优惠：￥{{ payData.price }}元</div>
            <div class="tips">距优惠结束</div>
          </div>
          <div class="flex f-sb f-y-c after_price">
            <div class="price_num">原价：¥138元</div>

            <div class="time flex f-y-c">
              <div class="flex f-x-c f-y-c">{{ minute }}</div>
              :
              <div class="flex f-x-c f-y-c">{{ second }}</div>
              :
              <div class="flex f-x-c f-y-c">{{ millisecond }}</div>
            </div>
          </div>
        </div>
        <div class="pay_box">
          <div class="tips">报告生成后，只有您自己能查看，请放心领取！</div>
          <!-- 微信 -->
          <div class="flex f-y-c f-x-c wechat_box button_box" @click="() => toPay('wechat')">
            <img class="logo" src="../../assets/Pay_Lock_wechat.png" alt="" />
            <div class="text">点此微信支付</div>
          </div>
          <!-- 支付宝 -->
          <div class="flex f-y-c f-x-c alipay_box button_box" @click="() => toPay('alipay')">
            <img class="logo" src="../../assets/Pay_Lock_alipay.png" alt="" />
            <div class="text">点此支付宝支付</div>
          </div>
          <img class="safe flex f-x-c" src="../../assets/Pay_Lock_safe.png" alt="" />
          <div class="safe_tips">支付系统已通过安全联盟认证请放心使用</div>
        </div>
      </div>
      <img class="common_banner_bottom" src="../../assets/Pay_Lock_bg_bottom_bg.jpg" alt="" />
    </div>

    <div class="pay_tips_box flex-y f-y-c f-x-c">
      <div>支付完成后您将看到以下内容</div>
      <img src="../../assets/Pay_Lock_drop.png" alt="" />
    </div>

    <div class="banner_bg_box flex-y">
      <div class="content_box flex-y f-y-c" @click="() => toPay('wechat')">
        <img class="img img1 no_click" src="../../assets/js_01.png" alt="" />
        <img class="img img2 no_click" src="../../assets/js_02.png" alt="" />
        <img class="img img3 no_click" src="../../assets/js_03.png" alt="" />
        <img class="img img4 no_click" src="../../assets/js_04.png" alt="" />
        <img class="img img5 no_click" src="../../assets/js_05.png" alt="" />
        <img class="img img6 no_click" src="../../assets/js_06.png" alt="" />
        <img class="img img7 no_click" src="../../assets/js_07.png" alt="" />
      </div>
    </div>

    <Bottom
      pageType="pay"
      :handleClick="() => toPay('wechat')"
      type="ScrollDom"
      domClassName="Lock_component"
    />
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
      console.log(this.$store.state.payData);
      return this.$store.state.payData;
    },
    baseData() {
      return this.$store.state.baseData;
    },
  },
  methods: {
    toPay(payType) {
      const business = CommonTools.getLocal('business');
      const oid = this.$route.query.oid;
      let bid = '';
      if (payType == 'wechat') {
        bid = business.wx_pay_id;
      } else {
        bid = business.ali_pay_id;
      }
      location.href = `${this.DOMAIN_PAY}/${payType}/?oid=${oid}&bid=${bid}`;
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
.Lock_component {
  margin-bottom: 120px;
  position: relative;
  width: 750px;
  background: #fff0d4;
  border-radius: 15px;
  margin: 100px auto 0;
  box-sizing: border-box;
  .content_box {
    width: 750px;
    .name_info_box {
      width: 635px;
      font-size: 32px;
      color: #941b1e;
      background: #f8cba6;
      margin: 88px 20px 30px;
      padding: 20px;
      border-radius: 20px;
      box-sizing: border-box;
      .item {
        width: 50%;
      }
      .info_box {
        padding: 7px 0;
      }
    }
    .price_box {
      width: 604px;
      border-top: 2px solid #f8cba6;
      border-bottom: 2px solid #f2b4b4;
      .before_box {
        margin: 25px 0 20px;
      }
      .after_price {
        margin-bottom: 24px;
      }
      .before_price {
        font-size: 30px;
        color: #fff;
        background: #ca2727;
        padding: 6px 20px;
        border-radius: 10px;
      }
      .tips {
        line-height: 30px;
        font-size: 30px;
        color: rgb(201, 133, 120);
      }
      .price_num {
        font-size: 30px;
        color: rgb(201, 133, 120);
        text-decoration: line-through;
      }
      .time {
        font-size: 30px;
        color: #c91c19;
        > div {
          width: 40px;
        }
      }
    }
    .pay_box {
      .tips {
        font-size: 28px;
        color: rgb(201, 133, 120);
        margin: 20px 0;
      }
      .button_box {
        padding: 20px 0;
        border-radius: 18px;
      }
      .wechat_box {
        background: #00b30d;
        margin-bottom: 20px;
      }
      .alipay_box {
        background: rgb(2, 169, 240);
      }
      .safe {
        width: 500px;
        margin: 30px auto;
      }
      .safe_tips {
        font-size: 20px;
        color: #2aa339;
        margin: 0 0 20px;
        text-align: center;
      }
      .logo {
        width: 50px;
        margin-right: 10px;
      }
      .text {
        font-size: 29px;
        color: #fff;
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
.pay_tips_box {
  font-size: 30px;
  color: #ffffff;
  line-height: 48px;
  margin: 20px 0 20px;
  > img {
    width: 40px;
  }
}
.banner_bg_box {
  width: 700px;
  margin: 0 auto;
  position: relative;
  .content_box {
    padding-top: 40px;
    .img {
      width: 100%;
      margin-bottom: 70px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>

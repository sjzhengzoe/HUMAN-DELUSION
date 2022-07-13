<template>
  <div class="Result_page">
    <ResultInput v-if="payData.oid && !payData.phone" :handleSaveMobile="handleSaveMobile" />
    <ResultInfo />
    <ResultName />
    <Bingo></Bingo>
    <ResultAnother />
    <ResultMarriage />
    <ResultTimes />
    <ResultRelation />
    <ResultTeach />
    <ResultAds />
    <ResultBottom />
    <Footer type="result" :product="product" />
    <DialogStep1 v-if="step == 1" :handleStep="handleStep" :handleSaveMobile="handleSaveMobile" />
    <DialogStep2 v-if="step == 2" :handleStep="handleStep" />
    <ScrollToTop />
  </div>
</template>

<script>
import ResultInput from '../components/Result/Input.vue';
import ResultInfo from '../components/Result/Info.vue';
import Bingo from '../components/Result/Bingo.vue';
import ResultName from '../components/Result/Name.vue';
import ResultMarriage from '../components/Result/Marriage.vue';
import ResultAnother from '../components/Result/Another.vue';
import ResultTimes from '../components/Result/Times.vue';
import ResultRelation from '../components/Result/Relation.vue';
import ResultTeach from '../components/Result/Teach.vue';
import ResultAds from '../components/Result/Ads.vue';
import ResultBottom from '../components/Result/Bottom.vue';
import Footer from '../components/Common/Footer.vue';
import DialogStep1 from '../components/Result/DialogStep1.vue';
import DialogStep2 from '../components/Result/DialogStep2.vue';
import ScrollToTop from '../components/Common/ScrollToTop.vue';
import CommonTools from '../utils/CommonTools';
import { Toast } from 'mint-ui';
export default {
  name: 'result-page',
  data: function () {
    return {
      step: 0, // 0、已填写 1、未填写弹窗一 2、未填写弹窗二
      product: {},
    };
  },
  computed: {
    payData() {
      return this.$store.state.payData;
    },
  },
  components: {
    ScrollToTop,
    DialogStep1,
    DialogStep2,
    ResultInput,
    ResultInfo,
    ResultName,
    ResultMarriage,
    ResultAnother,
    ResultTimes,
    ResultRelation,
    ResultTeach,
    ResultAds,
    ResultBottom,
    Footer,
    Bingo,
  },
  async created() {
    this.$store.commit('setLoading', true);
    // 初始化参数
    CommonTools.parseParams();
    const oid = this.$route.query.oid;
    // 没有oid 跳到首页
    if (!oid) {
      this.$router.push({ path: '/home' });
    }
    // 未支付则跳转回支付页
    const res = await this.$store.dispatch('getResultData', { oid });
    if (res.code == 0) {
      this.$router.push({ path: '/pay', query: { oid } });
    }
    const data = await this.$store.dispatch('getPayData', { oid });
    if (data.phone) {
      this.handleStep(0);
    }
    await this.$store.dispatch('getAdsData');
    this.product = CommonTools.getLocal('product');
  },
  watch: {
    payData(payData) {
      if (payData.phone) {
        this.step = 0;
      } else {
        this.step = 1;
      }
    },
  },
  methods: {
    handleStep(step) {
      this.step = step;
      if (this.step == 0) {
        document.getElementsByTagName('html')[0].style.overflow = '';
      }
    },
    // async handleSaveMobileAndEmail(phone, email) {
    //   let message;
    //   if (!email.match(/^\w+@\w+\.\w+$/i)) {
    //     message = '请填写正确的邮箱';
    //   }
    //   if (!email) {
    //     message = '请填写邮箱地址';
    //   }
    //   var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
    //   if (!phoneReg.test(phone)) {
    //     message = '请填写正确的手机号码';
    //   }
    //   if (!phone) {
    //     message = '请填写手机号码';
    //   }

    //   if (message) {
    //     Toast({
    //       message,
    //       position: 'center',
    //       duration: 3000,
    //     });
    //     return;
    //   }

    //   await this.$store.dispatch('postMobile', {
    //     phone: phone,
    //     oid: CommonTools.getQuery('oid'),
    //   });
    //   this.$store.dispatch('getPayData');
    // },
    async handleSaveMobile(phone) {
      let message;
      // var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      const oid = this.$route.query.oid;
      if (phone.length !== 11) {
        message = '请填写正确的手机号码';
      }
      if (!phone) {
        message = '请填写手机号码';
      }

      if (message) {
        Toast({
          message,
          position: 'center',
          duration: 3000,
        });
        return;
      }

      await this.$store.dispatch('postMobile', {
        phone,
        oid,
      });
      this.$store.dispatch('getPayData', { oid });
      this.handleStep(0);
    },
    goBack(event) {
      if (event.state) {
        this.$router.replace({ path: '/home' });
      }
    },
  },
  mounted() {
    this.$store.commit('setLoading', false);
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
  destroyed() {
    document.getElementsByTagName('html')[0].style.overflow = '';
    window.removeEventListener('popstate', this.goBack, false);
  },
};
</script>

<style lang="less" scoped>
.Result_page {
  background: #ffdadd;
  padding: 104px 0 0 0;
}
</style>

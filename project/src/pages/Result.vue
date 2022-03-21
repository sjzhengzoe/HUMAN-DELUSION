<template>
  <div class="Result_page">
    <ResultInput v-if="!payData.phone" :handleSaveMobileAndEmail="handleSaveMobileAndEmail" />
    <ResultInfo />
    <ResultName />
    <ResultMarriage />
    <ResultAnother />
    <ResultTimes />
    <ResultRelation />
    <ResultTeach />
    <ResultAds />
    <ResultBottom />
    <Footer type="result" />
    <DialogStep1
      v-if="step == 1 && !payData.phone"
      :handleStep="handleStep"
      :handleSaveMobile="handleSaveMobile"
    />
    <DialogStep2 v-if="step == 2 && !payData.phone" :handleStep="handleStep" />
    <ScrollToTop />
  </div>
</template>

<script>
import ResultInput from '../components/ResultInput.vue';
import ResultInfo from '../components/ResultInfo.vue';
import ResultName from '../components/ResultName.vue';
import ResultMarriage from '../components/ResultMarriage.vue';
import ResultAnother from '../components/ResultAnother.vue';
import ResultTimes from '../components/ResultTimes.vue';
import ResultRelation from '../components/ResultRelation.vue';
import ResultTeach from '../components/ResultTeach.vue';
import ResultAds from '../components/ResultAds.vue';
import ResultBottom from '../components/ResultBottom.vue';
import Footer from '../components/Footer.vue';
import DialogStep1 from '../components/DialogStep1.vue';
import DialogStep2 from '../components/DialogStep2.vue';
import ScrollToTop from '../components/ScrollToTop.vue';
import * as utils from '../utils';
import { Toast } from 'mint-ui';
export default {
  name: 'result-page',
  data: function () {
    return {
      step: 1, // 0、已填写 1、未填写弹窗一 2、未填写弹窗二
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
  },
  async created() {
    await this.$store.dispatch('getPayData', { oid: utils.urlParams()?.params?.oid });
    // 未支付则跳转回首页
    await this.$store.dispatch('getResultData', () => {
      location.href = '/home';
    });
    this.$store.commit('setApiLoading', false);
  },
  methods: {
    handleStep(step) {
      this.step = step;
      if (this.step == 0) {
        document.getElementsByTagName('html')[0].style.overflow = '';
      }
    },
    async handleSaveMobileAndEmail(phone, email) {
      let message;
      if (!email.match(/^\w+@\w+\.\w+$/i)) {
        message = '请填写正确的邮箱';
      }
      if (!email) {
        message = '请填写邮箱地址';
      }
      var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!phoneReg.test(phone)) {
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
        phone: phone,
        oid: utils.urlParams()?.params.oid,
      });
      this.$store.dispatch('getPayData');
    },
    async handleSaveMobile(phone) {
      let message;
      var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
      if (!phoneReg.test(phone)) {
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
        phone: phone,
        oid: utils.urlParams()?.params.oid,
      });
      this.$store.dispatch('getPayData');
      this.handleStep(0);
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.Result_page {
  background: #ffdadd;
  padding: 104px 0 0 0;
}
</style>

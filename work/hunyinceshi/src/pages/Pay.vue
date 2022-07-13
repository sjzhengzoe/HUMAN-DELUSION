<template>
  <div class="Pay_page">
    <PayAnalyze />
    <PayLock />
    <Footer :product="product" />
  </div>
</template>

<script>
import PayAnalyze from '../components/Pay/PayAnalyze.vue';
import PayLock from '../components/Pay/PayLock.vue';
import Footer from '../components/Common/Footer';
import CommonTools from '../utils/CommonTools.js';

export default {
  name: 'Pay-page',
  components: { PayAnalyze, PayLock, Footer },
  data() {
    return {
      product: {},
    };
  },
  created() {
    this.$store.commit('setLoading', true);
    // 初始化参数
    CommonTools.parseParams();

    // 没有oid 跳去首页
    const oid = this.$route.query.oid;
    if (!oid) {
      this.$router.push({ path: '/home', query: { oid } });
    }

    this.$store.dispatch('getBaseData', { oid });

    // 如果已支付 跳去结果页
    const res = this.$store.dispatch('getPayData', { oid });
    if (res.status == 1) {
      this.$router.push({ path: '/result', query: { oid } });
    }

    // 外部链接进入 不经过首页 本地没有支付id 则重新调接口获取
    if (!CommonTools.getLocal('business')) {
      this.$store.dispatch('getConfigData', { type: 'pay', channel: res.channel });
    }
    this.product = CommonTools.getLocal('product');
  },
  mounted() {
    this.$store.commit('setLoading', false);
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
  methods: {
    goBack(event) {
      if (event.state) {
        this.$router.replace({ path: '/home' });
      }
    },
  },
  destroyed() {
    window.removeEventListener('popstate', this.goBack, false);
  },
};
</script>

<style lang="less" scoped>
.Pay_page {
  background: #ffdadd;
}
</style>

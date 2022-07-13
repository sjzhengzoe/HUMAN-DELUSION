<template>
  <div class="Book_page">
    <Analyze />
    <Footer :product="product" />
  </div>
</template>

<script>
import Analyze from '../components/Book/Analyze.vue';
import Footer from '../components/Common/Footer';
import CommonTools from '../utils/CommonTools.js';

export default {
  name: 'Book-page',
  components: { Analyze, Footer },
  data() {
    return {
      product: {},
    };
  },
  async created() {
    this.$store.commit('setLoading', true);
    // 初始化参数
    CommonTools.parseParams();

    // 没有oid 跳去首页
    const oid = this.$route.query.oid;
    if (!oid) {
      this.$router.push({ path: '/home', query: { oid } });
    }

    // 如果已支付 跳去结果页
    const res = await this.$store.dispatch('getPayData', { oid });
    if (res.status == 1) {
      this.$router.push({ path: '/result', query: { oid } });
    }
    await this.$store.dispatch('getBaseData', { oid });
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
.Book_page {
  background: #830005;
  /deep/.img_box {
    margin-bottom: 100px !important;
  }
}
</style>

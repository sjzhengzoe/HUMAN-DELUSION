<template>
  <div class="Home_page">
    <Header />
    <Input :check-terms="checkTerms" />
      <img class="img no_click flex" src="../assets/Home_img1.png" alt="" v-if="!hiddenContent" />
      <img class="img no_click flex" src="../assets/Home_img2.png" alt="" v-if="!hiddenContent" />
      <img class="img no_click flex" src="../assets/Home_img3.png" alt="" v-if="!hiddenContent" />
      <img class="img no_click flex" src="../assets/Home_img4.png" alt="" v-if="!hiddenContent" />
      <Footer :product="product" />
      <Bottom :handleClick="handleClick" pageType="home" />
<!--      <FnBtn title="婚姻测试"/>-->
  </div>
</template>

<script>
import Header from '../components/Home/Header';
import Input from '../components/Home/Input.vue';
import Footer from '../components/Common/Footer.vue';
import Bottom from '../components/Common/Bottom.vue';
import CommonTools from '../utils/CommonTools.js';
// import FnBtn from "../components/fdButton/index.vue"
export default {
  name: 'Home-page',
  components: { Header, Input, Footer, Bottom, },
  methods: {
    // 点击底部按钮 滑动到input
    handleClick() {
      document.getElementById('input_name').focus();
    },
  },
  data() {
    return {
      hiddenContent: true,
      defaultBanner: 'https://s.xymlcs.com/hycs/img/HomeHeader-bg.png',
      checkTerms: true,
      product: {},
    };
  },
  created() {
    this.$store.commit('setLoading', true);
    CommonTools.initParams();
  },
  async mounted() {
    // 获取基础配置
    const product = await this.$store.dispatch('getConfigData', {});
    this.$store.commit('setLoading', false);
    if (product.config.length === 0) {
      this.hiddenContent = false;
      // this.defaultBanner = require('../assets/HomeHeader-bg.png')
    } else {
      if (product.config?.home.home_hide !== '1') {
        this.hiddenContent = false;
      }
      if (product.config?.home.banner) {
        this.defaultBanner = product.config.home.banner;
      }
      if (product.config?.home.check_term === '0') {
        this.checkTerms = false;
      }
    }
    this.product = product;
  },
};
</script>

<style lang="less" scoped>
.Home_page {
  background: #941c1e;
  .img {
    width: 700px;
    margin: 0 auto 60px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>

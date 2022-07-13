<template>
  <div class="Home_page">
      <!-- 测算订单提示 -->
      <tipsBox v-if="tipsShow" />
    <Header v-bind:bg-img="defaultBanner" />
    <Input :check-terms="checkTerms" />
    <lazy-component>
      <img class="img no_click" src="../assets/Home_img1.png" alt="" v-if="!hiddenContent" />
      <img class="img no_click" src="../assets/Home_img2.png" alt="" v-if="!hiddenContent" />
      <img class="img no_click" src="../assets/Home_img3.png" alt="" v-if="!hiddenContent" />
      <img class="img no_click" src="../assets/Home_img4.png" alt="" v-if="!hiddenContent" />
      <Footer :product="product" />
      <Bottom :handleClick="handleClick" />
    </lazy-component>

    <FdBtn title="生辰综合详批" />
  </div>
</template>

<script>
import tipsBox from "../components/tipsBox/index.vue"
import Header from "../components/Home/Header";
import Input from "../components/Home/Input.vue";
import Footer from "../components/Common/Footer.vue";
import Bottom from "../components/Common/Bottom.vue";
import CommonTools from "../utils/CommonTools.js";
import FdBtn from "../components/fdButton/index.vue";
export default {
  name: "Home-page",
  components: { Header, Input, Footer, Bottom, FdBtn,tipsBox },
  methods: {
    // 点击底部按钮 滑动到input
    handleClick() {
      document.getElementById("input_name").focus();
    },
  },

  // created() {
  //   CommonTools.initParams();
  //   this.$store.commit("setLoading", false);

  data() {
    return {
      hiddenContent: true,
      defaultBanner: '',
      checkTerms: true,
      product: {},
      tipsShow: false,
      traceCode: localStorage.getItem("traceCode")
        ? localStorage.getItem("traceCode")
        : ""
    };

  },
  created() {
    this.$store.commit('setLoading', true);
    CommonTools.initParams();
    if (this.traceCode) {
      this.tipsShow = true;
      return;
    }
  },
  async mounted() {
    // 获取基础配置

    this.$store.dispatch("getConfigData", {});

    const product = await this.$store.dispatch('getConfigData', {});
    this.$store.commit('setLoading', false);

    if (product.config.length === 0) {
      this.hiddenContent = false;
        this.defaultBanner = require('../assets/HomeHeader-bg.png')
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
      this.product = product;
    }

  },
};
</script>

<style lang="less" scoped>
.Home_page {
  background: #ffdadd;
  .img {
    width: 100%;
    margin-bottom: 60px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>

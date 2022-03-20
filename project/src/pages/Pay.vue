<template>
  <div class="Pay_page">
    <PayAnalyze />
    <PayLock />
    <Footer />
  </div>
</template>

<script>
import PayAnalyze from '../components/PayAnalyze.vue';
import PayLock from '../components/PayLock.vue';
import Footer from '../components/Footer';

export default {
  name: 'pay-page',
  components: { PayAnalyze, PayLock, Footer },
  async created() {
    await this.$store.dispatch('getPayData');
    this.$store.commit('setApiLoading', false);
  },
};
</script>

<style lang="less" scoped>
.Pay_page {
  background: #ffdadd;
}
</style>

<template>
  <div class="Home_page">
    <Header />
    <Input />
    <img class="img" src="../assets/Home_img1.png" alt="" />
    <img class="img" src="../assets/Home_img2.png" alt="" />
    <img class="img" src="../assets/Home_img3.png" alt="" />
    <img class="img" src="../assets/Home_img4.png" alt="" />
    <Footer />
    <HomeBottom :handleClick="handleClick" />
  </div>
</template>

<script>
import Header from '../components/HomeHeader';
import Input from '../components/HomeInput.vue';
import Footer from '../components/Footer';
import HomeBottom from '../components/HomeBottom.vue';
export default {
  name: 'home-page',
  components: { Header, Input, Footer, HomeBottom },
  methods: {
    handleClick() {
      document
        .getElementsByClassName('HomeInput_component')[0]
        .scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'smooth' });
    },
  },

  async mounted() {
    await this.$store.dispatch('getConfigData');
    this.$store.commit('setApiLoading', false);
  },
};
</script>

<style lang="less" scoped>
.Home_page {
  background: #ffdadd;
}
.img {
  width: 100%;
  margin-bottom: 60px;
  &:last-of-type {
    margin-bottom: 0;
  }
}
</style>

<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <ChooseCountryCard1 />
      <HowWork1 page="country_card" />
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <ChooseCountryCard2 />
      <HowWork2 page="country_card" />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import ChooseCountryCard1 from '../components/Mobile/ChooseCountryCard.vue';
import HowWork1 from '@/components/Mobile/HowWork.vue';
import Footer1 from '@/components/Mobile/Footer.vue';

import Header2 from '../components/Home/Header.vue';
import ChooseCountryCard2 from '../components/Home/ChooseCountryCard.vue';
import HowWork2 from '@/components/Home/HowWork.vue';
import Footer2 from '@/components/Home/Footer.vue';
export default {
  name: 'Use-page',
  components: {
    Header1,
    Footer1,
    HowWork1,
    ChooseCountryCard1,
    Header2,
    Footer2,
    HowWork2,
    ChooseCountryCard2,
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
  mounted() {
    const data = {
      cb: () => {
        this.$router.push('/');
      },
    };
    if (this.$route.query.code) {
      data.code = this.$route.query.code;
      this.$store.dispatch('getCountryCard', data);
    } else {
      this.$router.push('/');
    }
  },
};
</script>

<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <Faq1 />
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <Faq2 />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import Faq1 from '../components/Mobile/Faq.vue';
import Footer1 from '@/components/Mobile/Footer.vue';

import Header2 from '../components/Home/Header.vue';
import Faq2 from '../components/Home/Faq.vue';
import Footer2 from '@/components/Home/Footer.vue';
export default {
  name: 'Use-page',
  components: { Header1, Footer1, Faq1, Header2, Footer2, Faq2 },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

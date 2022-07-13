<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <FInd1></FInd1>
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <FInd2></FInd2>
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import FInd1 from '@/components/Mobile/FInd.vue';
import Footer1 from '@/components/Mobile/Footer.vue';

import Header2 from '../components/Home/Header.vue';
import FInd2 from '@/components/Home/FInd.vue';
import Footer2 from '@/components/Home/Footer.vue';
export default {
  name: 'Use-page',
  components: { Header1, Footer1, FInd1, Header2, Footer2, FInd2 },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

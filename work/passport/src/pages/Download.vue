<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <Download1 />
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <Bread2 step="4"></Bread2>
      <Download2 />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import Download1 from '../components/Mobile/Download.vue';
import Footer1 from '@/components/Mobile/Footer.vue';

import Header2 from '../components/Home/Header.vue';
import Bread2 from '@/components/Home/Bread.vue';
import Download2 from '../components/Home/Download.vue';
import Footer2 from '@/components/Home/Footer.vue';
export default {
  name: 'Use-page',
  components: { Header1, Footer1, Download1, Bread2, Header2, Footer2, Download2 },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

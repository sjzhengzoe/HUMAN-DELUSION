<template>
  <div class="Home_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <ChooseCountry1 />
      <WhatGet1 />
      <HowWork1 />
      <PopularDocuments1 />
      <Footer1 />
    </div>
    <div v-else>
      <Header2 />
      <ChooseCountry2 />
      <WhatGet2 />
      <HowWork2 />
      <PopularDocuments2 />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import ChooseCountry1 from '../components/Mobile/ChooseCountry.vue';
import WhatGet1 from '@/components/Mobile/WhatGet.vue';
import HowWork1 from '@/components/Mobile/HowWork.vue';
import Footer1 from '@/components/Mobile/Footer.vue';
import PopularDocuments1 from '@/components/Mobile/PopularDocuments.vue';

import Header2 from '../components/Home/Header.vue';
import ChooseCountry2 from '../components/Home/ChooseCountry.vue';
import WhatGet2 from '@/components/Home/WhatGet.vue';
import HowWork2 from '@/components/Home/HowWork.vue';
import Footer2 from '@/components/Home/Footer.vue';
import PopularDocuments2 from '@/components/Home/PopularDocuments.vue';
export default {
  name: 'Home-page',
  components: {
    ChooseCountry1,
    Header1,
    WhatGet1,
    HowWork1,
    Footer1,
    PopularDocuments1,

    ChooseCountry2,
    Header2,
    WhatGet2,
    HowWork2,
    Footer2,
    PopularDocuments2,
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <CountryPhotoBanner1 />
      <WhatGet1 />
      <RequirementsOfPhoto1 />
      <HowTakePhoto1 />
      <RequirementsOfText1 />
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <CountryPhotoBanner2 />
      <WhatGet2 />
      <RequirementsOfPhoto2 />
      <HowTakePhoto2 />
      <RequirementsOfText2 />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import CountryPhotoBanner1 from '../components/Mobile/CountryPhotoBanner.vue';
import WhatGet1 from '../components/Mobile/WhatGet.vue';
import RequirementsOfPhoto1 from '../components/Mobile/RequirementsOfPhoto.vue';
import RequirementsOfText1 from '../components/Mobile/RequirementsOfText.vue';
import HowTakePhoto1 from '../components/Mobile/HowTakePhoto.vue';
import Footer1 from '@/components/Mobile/Footer.vue';

import Header2 from '../components/Home/Header.vue';
import CountryPhotoBanner2 from '../components/Home/CountryPhotoBanner.vue';
import WhatGet2 from '../components/Home/WhatGet.vue';
import RequirementsOfPhoto2 from '../components/Home/RequirementsOfPhoto.vue';
import RequirementsOfText2 from '../components/Home/RequirementsOfText.vue';
import HowTakePhoto2 from '../components/Home/HowTakePhoto.vue';
import Footer2 from '@/components/Home/Footer.vue';
export default {
  name: 'Use-page',
  components: {
    Header1,
    Footer1,
    CountryPhotoBanner1,
    WhatGet1,
    WhatGet2,
    RequirementsOfPhoto1,
    RequirementsOfPhoto2,
    RequirementsOfText1,
    RequirementsOfText2,
    HowTakePhoto1,
    HowTakePhoto2,
    Header2,
    Footer2,
    CountryPhotoBanner2,
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
      this.$store.dispatch('getCountryPhoto', data);
    } else {
      this.$router.push('/');
    }
  },
};
</script>

<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <SelectPhotos1 />
      <HowTakePhoto1 />
      <ViewPhotoTypes1 />
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <Bread2 step="2"></Bread2>
      <ThreeSecondsBanner2 />
      <UseBanner2></UseBanner2>
      <SelectPhotos2 />
      <HowTakePhoto2 />
      <ViewPhotoTypes2 />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '../components/Mobile/Header.vue';
import Footer1 from '@/components/Mobile/Footer.vue';
import SelectPhotos1 from '@/components/Mobile/SelectPhotos.vue';
import HowTakePhoto1 from '@/components/Mobile/HowTakePhoto.vue';
import ViewPhotoTypes1 from '@/components/Mobile/ViewPhotoTypes.vue';

import Header2 from '../components/Home/Header.vue';
import ThreeSecondsBanner2 from '@/components/Home/ThreeSecondsBanner.vue';
import Bread2 from '@/components/Home/Bread.vue';
import UseBanner2 from '@/components/Home/UseBanner.vue';
import SelectPhotos2 from '@/components/Home/SelectPhotos.vue';
import HowTakePhoto2 from '@/components/Home/HowTakePhoto.vue';
import ViewPhotoTypes2 from '@/components/Home/ViewPhotoTypes.vue';
import Footer2 from '@/components/Home/Footer.vue';

export default {
  name: 'Use-page',
  components: {
    Header1,
    Footer1,
    SelectPhotos1,
    HowTakePhoto1,
    ViewPhotoTypes1,
    Header2,
    Footer2,
    Bread2,
    ThreeSecondsBanner2,
    UseBanner2,
    SelectPhotos2,
    HowTakePhoto2,
    ViewPhotoTypes2,
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

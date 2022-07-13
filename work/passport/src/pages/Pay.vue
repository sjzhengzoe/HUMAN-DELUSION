<template>
  <div class="Use_page">
    <div v-if="isMobile">
      <Header1></Header1>
      <PassportPic1></PassportPic1>
      <PayInfo1></PayInfo1>
      <ViewPhotoTypes1 :noTitle="true" />
      <Footer1 />
    </div>
    <div v-else>
      <Header2></Header2>
      <Bread2 step="3"></Bread2>
      <PassportPic2></PassportPic2>
      <PayInfo2></PayInfo2>
      <ViewPhotoTypes2 :noTitle="true" />
      <Footer2 />
    </div>
  </div>
</template>

<script>
import Header1 from '@/components/Mobile/Header.vue';
import PayInfo1 from '@/components/Mobile/PayInfo.vue';
import PassportPic1 from '@/components/Mobile/PassportPic.vue';
import Footer1 from '@/components/Mobile/Footer.vue';
import ViewPhotoTypes1 from '@/components/Mobile/ViewPhotoTypes.vue';

import Bread2 from '@/components/Home/Bread.vue';
import Header2 from '../components/Home/Header.vue';
import PayInfo2 from '@/components/Home/PayInfo.vue';
import PassportPic2 from '@/components/Home/PassportPic.vue';
import ViewPhotoTypes2 from '@/components/Home/ViewPhotoTypes.vue';
import Footer2 from '@/components/Home/Footer.vue';
export default {
  name: 'Use-page',
  components: {
    Header1,
    Footer1,
    PassportPic1,
    ViewPhotoTypes1,
    PayInfo1,

    Bread2,
    Header2,
    Footer2,
    PayInfo2,
    ViewPhotoTypes2,
    PassportPic2,
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile;
    },
  },
};
</script>

<template>
<!--  <div class="Header_component" :style="{ backgroundImage: 'url(' + bgImg + ')' }">-->
  <div class="Header_component">
    <HomeRunning />
  </div>
</template>

<script>
import HomeRunning from './Running.vue';
export default {
  name: 'Header-component',
  props: ['bgImg'],
    watch: {
      bgImg (newVal) {
          this.bgImg = newVal
      }
    },
  components: {
    HomeRunning,
  },
};
</script>

<style lang="less">
.Header_component {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 504px;
  background: url('../../assets/HomeHeader-bg.png') top/contain no-repeat;
  background-size: 100%;
  position: relative;

}
</style>

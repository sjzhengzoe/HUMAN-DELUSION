<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  created() {
    this.getPageType();
  },
  async mounted() {
    window.addEventListener('resize', this.getPageType);
  },
  methods: {
    getPageType() {
      const isMobile = document.getElementsByTagName('body')[0].clientWidth < 1180;
      !isMobile && document.getElementsByTagName('body')[0].classList.add('pc');
      this.$store.commit('setIsMobile', isMobile);
    },
  },
  destroyed() {
    window.removeEventListener('resize', this.getPageType);
  },
};
</script>

<style lang="less"></style>

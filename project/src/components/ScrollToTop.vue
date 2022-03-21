<template>
  <div class="ScrollToTop_components" v-show="!isFirstPage">
    <img @click="scrollToTop" class="icon" src="../assets/Result_to_top_icon.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Scroll-To-Top',
  data: function () {
    return { isFirstPage: true };
  },
  props: {
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
  mounted() {
    this.scroll();
  },
  methods: {
    scrollToTop() {
      document
        .getElementsByTagName('body')[0]
        .scrollIntoView({ block: 'start', inline: 'center', behavior: 'smooth' });
    },
    scroll() {
      window.addEventListener('scroll', () => {
        const scrollTop = document.getElementsByTagName('html')[0].scrollTop;
        if (scrollTop > 0) {
          this.isFirstPage = false;
        } else {
          this.isFirstPage = true;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.ScrollToTop_components {
  position: fixed;
  bottom: 110px;
  right: 26px;
  z-index: 2;
  .icon {
    width: 110px;
    height: 110px;
  }
}
</style>

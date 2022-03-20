<template>
  <div id="app">
    <router-view></router-view>
    <Loading v-if="loading" />
  </div>
</template>

<script>
import Loading from './components/Loading.vue';
export default {
  name: 'App',
  data: function () {
    return { timer: null };
  },
  components: { Loading },
  computed: {
    loading() {
      return this.$store.state.resourceLoading || this.$store.state.apiLoading;
    },
  },
  watch: {
    loading(value) {
      if (!value) {
        document.getElementsByTagName('body')[0].style.overflow = 'scroll';
      }
    },
  },
  mounted() {
    this.$store.dispatch('init');
  },
};
</script>

<style lang="less">
html {
  height: 100%;
  margin: 0 auto;
  background: #fff4f5;
}
body {
  overflow: hidden;
  max-width: 750px;
  margin: 0 auto !important;
  font-size: 30px;
}
.common_banner_bg {
  width: 690px;
  font-size: 0;
  position: relative;
  margin: 0 auto 60px;
  box-sizing: border-box;
  .common_title {
    width: 750px;
    position: absolute;
    top: -60px;
    left: -30px;
    right: 0;
    margin: 0 auto;
  }
  .common_bold {
    font-weight: 900;
  }
  .common_banner_middle {
    width: 100%;
    padding-top: 27px;
    margin-top: -9px;
    background: url('./assets/banner_bg_middle.png') center/contain;
  }
  .common_banner_bottom,
  .common_banner_top {
    width: 100%;
  }
}
.common_content_box {
  width: 627px;
  line-height: 40px;
  font-size: 28px;
  color: #333333;
  .common_sub_title {
    width: 334px;
    height: 68px;
    margin: 46px auto 38px;
    border-radius: 34px;
    background: linear-gradient(0deg, #c13b5b, #f3868d);
    font-size: 40px;
    font-weight: bold;
    color: #ffffff;
  }
}
body {
  padding: 0;
  margin: 0;
}
// flex 相关
.flex {
  display: flex;
}
.flex-inline {
  display: inline-flex;
}
.flex-y {
  display: flex;
  flex-direction: column;
}
.f-sb {
  justify-content: space-between;
}
.f-sa {
  justify-content: space-around;
}
.f-x-c {
  justify-content: center;
}
.f-x-end {
  justify-content: flex-end;
}
.f-y-c {
  align-items: center;
}
.f-y-start {
  align-items: flex-start;
}
.f-y-end {
  align-items: end;
}
.f-shrink {
  flex-shrink: 0;
}
.flex-w {
  flex-wrap: wrap;
}
.flex-nw {
  flex-wrap: nowrap;
}
</style>

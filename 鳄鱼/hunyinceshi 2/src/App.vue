<template>
  <div id="app">
    <Loading v-if="loading" class="loading" color="#fff" size="30" />
    <router-view></router-view>
  </div>
</template>

<script>
import { Loading } from 'vant';
// import CommonTools from './utils/CommonTools.js';
export default {
  name: 'App',
  components: { Loading },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
  created() {
    // 开启调试
    // CommonTools.enableDebug();
  },
};
</script>

<style lang="less">
// 禁止图片点击
.no_click {
  pointer-events: none;
}
html {
  height: 100%;
  margin: 0 auto;
  background: #fff4f5;
}
body {
  padding: 0;
  margin: 0;
  max-width: 750px;
  margin: 0 auto !important;
  font-size: 30px;
}
// toast样式
.mint-toast {
  top: 40% !important;
  z-index: 30001;
  position: fixed;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 3001;
  transition: opacity 0.3s linear;
  left: 50%;
  transform: translate(-50%, -50%);
  .mint-toast-text {
    font-size: 28px !important;
  }
}
.loading {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 204px;
  height: 204px;
  padding: 32px;
  z-index: 2001;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(-50%, -50%, 0);
}

// 通用窗口
.common_banner_bg {
  width: 690px;
  position: relative;
  margin: 0 auto 60px;
  box-sizing: border-box;
  .common_title {
    width: 100%;
    position: absolute;
    top: -60px;
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
    background: url('./assets/Pay_Lock_bg_middle.jpg') center/contain;
    &.result {
      background: url('./assets/banner_bg_middle.png') center/contain;
    }
  }
  .common_banner_bottom {
    width: 100%;
  }
  .common_banner_top {
    width: 100%;
    transform: rotateX(180deg);
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

<template>
  <div
    class="Header_component"
    :class="loading ? '' : 'moving'"
    :style="{ backgroundImage: 'url(' + bgImg + ')' }"
  >
    <img class="bg2" src="../../assets/HomeHeader_bg2.png" alt="" />
    <div class="img_box flex">
      <img class="img1 img" src="../../assets/HomeHeader-img1.png" alt="" />
      <img class="img2 img" src="../../assets/HomeHeader-img2.png" alt="" />
      <img class="img3 img" src="../../assets/HomeHeader-img3.png" alt="" />
      <img class="img4 img" src="../../assets/HomeHeader-img4.png" alt="" />
    </div>
    <img class="img5" src="../../assets/HomeHeader-img6.png" alt="" />
    <img class="img6" src="../../assets/HomeHeader-img5.png" alt="" />
    <HomeRunning />
    <img class="man_before_open" src="../../assets/HomeHeader-man-before-open.png" alt="" />
    <img class="man_before_close" src="../../assets/HomeHeader-man-before-close.png" alt="" />
    <img class="man_after_close" src="../../assets/HomeHeader-man-after-close.png" alt="" />
    <img class="man_after_open" src="../../assets/HomeHeader-man-after-open.png" alt="" />

    <img class="woman_before_open" src="../../assets/HomeHeader-woman-before-open.png" alt="" />
    <img class="woman_before_close" src="../../assets/HomeHeader-woman-before-close.png" alt="" />
    <img class="woman_after_close" src="../../assets/HomeHeader-woman-after-close.png" alt="" />
    <img class="woman_after_open" src="../../assets/HomeHeader-woman-after-open.png" alt="" />

    <img class="bg_bottom" src="../../assets/Home_bg_bottom.png" alt="" />
  </div>
</template>

<script>
import HomeRunning from './Running.vue';
export default {
  name: 'Header-component',
  props: ['bgImg'],
  watch: {
    bgImg: {
        handler(newVal) {
            this.bgImg = newVal
        }
    }
    },
  components: {
    HomeRunning,
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
  },
};
</script>

<style lang="less">
.Header_component {
  overflow: hidden;
  position: relative;
  .img5 {
    position: absolute;
    top: 397px;
    left: 5px;
    opacity: 0;
    animation: opacityShow 3s forwards;
    z-index: 100;
    width: 107px;
    height: 229px;
  }
  .img6 {
    position: absolute;
    top: 489px;
    right: 1px;
    opacity: 0;
    animation: opacityShow 3s forwards;
    z-index: 100;
    width: 107px;
    height: 281px;
  }
  @keyframes opacityShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .img_box {
    position: absolute;
    top: 687.5px;
    left: 94px;
    z-index: 50;
    .img {
      display: inline-block;
      width: 113px;
      height: 114px;
      margin-right: 35px;
    }
    .img1 {
      animation: bubbleBounce 1.5s linear 0.2s infinite;
    }
    .img2 {
      animation: bubbleBounce 1.5s linear 0.3s infinite;
    }
    .img3 {
      animation: bubbleBounce 1.5s linear 0.4s infinite;
    }
    .img4 {
      animation: bubbleBounce 1.5s linear 0.1s infinite;
    }
    @keyframes bubbleBounce {
      0%,
      50%,
      to {
        transform: translateY(0);
      }
      25% {
        transform: translateY(-5px);
      }
      75% {
        transform: translateY(5px);
      }
    }

    .img2,
    .img3 {
      padding-top: 38px;
    }
  }
  .bg2 {
    animation: 13s flower1 infinite linear;
    width: 750px;
    height: 826px;
    z-index: 1;
    position: absolute;

    @keyframes flower1 {
      from {
        left: 750px;
        bottom: 500px;
      }
      to {
        left: -950px;
        bottom: -400px;
      }
    }
  }
  width: 100%;
  height: 850px;
  background: top/contain no-repeat;
  background-size: 100%;
  position: relative;
  .bg_bottom {
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  @keyframes manMove {
    0% {
      left: -760px;
    }
    100% {
      left: -340px;
    }
  }
  @keyframes womanMove {
    0% {
      right: -554px;
    }
    100% {
      right: -120px;
    }
  }
  @keyframes hide {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.moving {
    .man_before_open {
      animation: 0s ease-in-out 0s show forwards, 2s ease-in-out 0s manMove,
        2.5s ease-in-out 2s hide forwards;
    }
    .woman_before_open {
      animation: 0s ease-in-out 0s show forwards, 2s ease-in-out 0s womanMove,
        2.5s ease-in-out 2s hide forwards;
    }
    .man_before_close,
    .woman_before_close {
      animation: 1s ease-in-out 2s show forwards, 1s ease-in-out 3s hide forwards;
    }
    .man_after_close,
    .woman_after_close {
      animation: 1.5s linear 3s show forwards, 1s ease-in-out 4.5s hide forwards;
    }
    .man_after_open,
    .woman_after_open {
      animation: 1s linear 4s show forwards;
    }
  }
  .man_before_open {
    opacity: 0;
    position: absolute;
    top: 160px;
    left: -340px;
    height: 690px;
  }
  .man_before_close {
    opacity: 0;
    position: absolute;
    top: 160px;
    left: -340px;
    height: 690px;
  }
  .man_after_close {
    opacity: 0;
    position: absolute;
    top: 160px;
    left: -340px;
    height: 690px;
  }
  .man_after_open {
    opacity: 0;
    position: absolute;
    top: 160px;
    left: -340px;
    height: 690px;
  }

  .woman_before_open {
    opacity: 0;
    position: absolute;
    top: 290px;
    right: -120px;
    height: 570px;
  }

  .woman_before_close {
    opacity: 0;
    position: absolute;
    top: 290px;
    right: -120px;
    height: 570px;
  }

  .woman_after_close {
    opacity: 0;
    position: absolute;
    top: 265px;
    right: -165px;
    height: 585px;
  }
  .woman_after_open {
    opacity: 0;
    position: absolute;
    top: 265px;
    right: -165px;
    height: 585px;
  }
}
</style>

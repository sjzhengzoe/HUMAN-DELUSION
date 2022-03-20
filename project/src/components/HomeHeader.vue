<template>
  <div class="HomeHeader_component" :class="loading ? '' : 'moving'">
    <img class="bg2" src="../assets/HomeHeader_bg2.png" alt="" />
    <HomeRunning />
    <img class="man_before_open" src="../assets/HomeHeader-man-before-open.png" alt="" />
    <img class="man_before_close" src="../assets/HomeHeader-man-before-close.png" alt="" />
    <img class="man_after_close" src="../assets/HomeHeader-man-after-close.png" alt="" />
    <img class="man_after_open" src="../assets/HomeHeader-man-after-open.png" alt="" />

    <img class="woman_before_open" src="../assets/HomeHeader-woman-before-open.png" alt="" />
    <img class="woman_before_close" src="../assets/HomeHeader-woman-before-close.png" alt="" />
    <img class="woman_after_close" src="../assets/HomeHeader-woman-after-close.png" alt="" />
    <img class="woman_after_open" src="../assets/HomeHeader-woman-after-open.png" alt="" />

    <img class="bg_bottom" src="../assets/Home_bg_bottom.png" alt="" />
  </div>
</template>

<script>
import HomeRunning from '../components/HomeRunning.vue';
export default {
  name: 'Home-Header',
  components: {
    HomeRunning,
  },
  computed: {
    loading() {
      return this.$store.state.resourceLoading || this.$store.state.apiLoading;
    },
  },
};
</script>

<style lang="less">
.HomeHeader_component {
  overflow: hidden;
  position: relative;
  .bg2 {
    width: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  width: 100%;
  height: 850px;
  padding-bottom: 60px;
  background: url('../assets/HomeHeader-bg.png') top/contain no-repeat;
  background-size: 100%;
  position: relative;
  .bg_bottom {
    width: 100%;
    position: absolute;
    bottom: 60px;
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
      animation: 2s ease-in-out 0s manMove, 2.5s ease-in-out 2s hide forwards;
    }
    .woman_before_open {
      animation: 2s ease-in-out 0s womanMove, 2.5s ease-in-out 2s hide forwards;
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
    position: absolute;
    top: 296px;
    right: -120px;
    height: 554px;
  }

  .woman_before_close {
    opacity: 0;
    position: absolute;
    top: 296px;
    right: -120px;
    height: 554px;
  }

  .woman_after_close {
    opacity: 0;
    position: absolute;
    top: 280px;
    right: -150px;
    height: 554px;
  }
  .woman_after_open {
    opacity: 0;
    position: absolute;
    top: 280px;
    right: -150px;
    height: 554px;
  }
}
</style>

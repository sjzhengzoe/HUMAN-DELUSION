<template>
  <div class="Bottom_component" v-show="isShow">
    <!-- 评论 -->
    <Comments />
    <!-- 底部按钮 -->
    <div @click="handleClick" class="button_box flex f-y-c f-x-c">
      <div class="button" :class="pageType" />
    </div>
  </div>
</template>

<script>
import Comments from './Comments.vue';
export default {
  name: 'Bottom-component',
  components: { Comments },
  props: {
    handleClick: {
      type: Function,
      default: () => {},
    },
    type: {
      type: String,
      default: 'FirstPage', // 1、FirstPage 2、ScrollDom
    },
    pageType: {
      type: String,
      default: 'home', // home pay
    },
    domClassName: {
      type: String,
      default: '',
    },
  },
  data: function () {
    return {
      isShow: false,
    };
  },
  mounted() {
    this.addEvent();
  },
  destroyed() {
    window.removeEventListener(
      'scroll',
      this.type == 'FirstPage' ? this.firstPageScrollEvent : this.scrollDomScrollEvent
    );
  },
  methods: {
    addEvent() {
      window.addEventListener(
        'scroll',
        this.type == 'FirstPage' ? this.firstPageScrollEvent : this.scrollDomScrollEvent
      );
    },
    // 滚动出首页则展示
    firstPageScrollEvent() {
      const height = document.getElementsByTagName('html')[0].clientHeight;
      const scrollTop =
        document.getElementsByTagName('html')[0].scrollTop ||
        document.getElementsByTagName('body')[0].scrollTop;
      this.isShow = scrollTop > height;
    },
    // 滚动出某个节点
    scrollDomScrollEvent() {
      const dom = document.getElementsByClassName(this.domClassName)[0];
      const height = dom.clientHeight;
      const lockScrollTop = dom.offsetTop - 100;
      const scrollTop =
        document.getElementsByTagName('html')[0].scrollTop ||
        document.getElementsByTagName('body')[0].scrollTop;
      this.isShow = scrollTop > height + lockScrollTop;
    },
  },
};
</script>

<style lang="less" scoped>
.Bottom_component {
  position: fixed;
  bottom: 0;
  .button_box {
    width: 750px;
    height: 160px;
    background: rgba(0, 0, 0, 0.3);

    .button {
      transform: scale(0.8);
      animation: button 2s linear infinite;
      &.home {
        background: url('https://s.xymlcs.com/hycs/img/button.png') center/contain no-repeat;
      }
      &.pay {
        background: url('../../assets/Pay_Lock_button.png') center/contain no-repeat;
      }
      @keyframes button {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0.8);
        }
      }
      width: 636px;
      height: 83px;
    }
  }
}
</style>

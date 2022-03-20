<template>
  <div class="HomeBottom_components" v-show="!isFirstPage">
    <div class="comments_box">
      <div class="content_box" :class="{ moving: moving }">
        <div v-for="(item, idx) in comments" :key="idx" class="flex f-y-c item">
          <img class="head" :src="item.url" alt="" />
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <div @click="handleClick" class="button_box flex f-y-c f-x-c">
      <img src="../assets/HomeInput_button.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Scroll-Bottom',
  props: {
    handleClick: {
      type: Function,
      default: () => {},
    },
  },
  data: function () {
    return {
      isFirstPage: true,
      moving: false,
      timer: null,
      comments: [
        {
          url: 'https://cos.wtaluo.com/dxbxmpd/img/22.8f84c392.jpg',
          text: '一生平安 4分钟前进行了配对',
        },
        {
          url: 'https://cos.wtaluo.com/dxbxmpd/img/11.827111c5.jpg',
          text: '丞哥 4分钟前进行了配对',
        },
        {
          url: 'https://cos.wtaluo.com/dxbxmpd/img/12.2521f2fe.jpg',
          text: '奚落 4分钟前进行了配对',
        },
        {
          url: 'https://cos.wtaluo.com/dxbxmpd/img/17.785b6829.jpg',
          text: '寒雪傲梅 4分钟前进行了配对',
        },
        {
          url: 'https://cos.wtaluo.com/dxbxmpd/img/20.dd076e3c.jpg',
          text: '离岛 4分钟前进行了配对',
        },
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.moving = true;
      this.timer = setTimeout(() => {
        const data = this.comments.shift();
        this.comments.push(data);
        this.moving = false;
      }, 1000);
    }, 2000);
    this.scroll();
  },
  methods: {
    scroll() {
      window.addEventListener('scroll', () => {
        const height = document.getElementsByTagName('html')[0].clientHeight;
        const scrollTop = document.getElementsByTagName('html')[0].scrollTop;
        if (scrollTop > height) {
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
.HomeBottom_components {
  position: fixed;
  bottom: 0;
  .comments_box {
    position: absolute;
    right: 6px;
    bottom: 195px;
    height: 60px;
    overflow: hidden;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 30px;

    .item {
      width: 420px;
      padding: 8px 8px;
      .head {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        margin-right: 10px;
      }
      .text {
        font-size: 26px;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
  .content_box {
    margin-top: 0;
    transition: none;

    &.moving {
      margin-top: -60px;
      transition: all 1s;
    }
  }
  .button_box {
    width: 750px;
    height: 160px;
    background: rgba(0, 0, 0, 0.3);
    > img {
      transform: scale(0.8);
      animation: button 2s linear infinite;
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
      width: 595px;
      height: 122px;
    }
  }
}
</style>

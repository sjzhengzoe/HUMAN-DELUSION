<template>
  <div class="Comments_components">
    <div class="comments_box" :class="{ moving: moving }">
      <div v-for="(item, idx) in comments" :key="idx" class="flex f-y-c comment">
        <img class="head" :src="item.url" alt="" />
        <div class="text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments-Bottom',
  data: function () {
    return {
      moving: false,
      timer: null,
        comments: [
            {
                url: 'https://s.xymlcs.com/hunyinceshi/avatar/1.c38a1417.jpg',
                text: '一生平安 4分钟前进行了测试',
            },
            {
                url: 'https://s.xymlcs.com/hunyinceshi/avatar/10.c26d0192.jpg',
                text: '丞哥 4分钟前进行了测试',
            },
            {
                url: 'https://s.xymlcs.com/hunyinceshi/avatar/11.3e187051.jpg',
                text: '奚落 4分钟前进行了测试',
            },
            {
                url: 'https://s.xymlcs.com/hunyinceshi/avatar/15.72883ac6.jpg',
                text: '寒雪傲梅 4分钟前进行了测试',
            },
            {
                url: 'https://s.xymlcs.com/hunyinceshi/avatar/20.dd076e3c.jpg',
                text: '离岛 4分钟前进行了测试',
            },
        ],
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.moving = true;
      setTimeout(() => {
        const data = this.comments.shift();
        this.comments.push(data);
        this.moving = false;
      }, 1000);
    }, 2000);
  },
  destroyed() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="less" scoped>
.Comments_components {
  position: fixed;
  right: 6px;
  bottom: 195px;
  height: 60px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 30px;
  .comments_box {
    margin-top: 0;
    transition: none;

    &.moving {
      margin-top: -60px;
      transition: all 1s;
    }
  }

  .comment {
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
</style>

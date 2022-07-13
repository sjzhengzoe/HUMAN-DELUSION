<template>
  <div class="fd_btn" @click="goToFeedback('title')">
    <img src="./images/fd_img.png" alt="" />
    <span>投诉</span>
  </div>
</template>
<script>

export default {
  name: "fd_btn",
  props: {
    title: String
  },
  data() {
    return {
      
      url: "./feedback"
    };
  },
  methods: {
    goToFeedback() {
      window.location.href = this.url + `?title=${this.title}`;
      // window.location.href = orderQueryUrl+`?title=${this.title}`
    }
  }
};
</script>

<style lang="less" scoped>
.fd_btn {
  width: 30px;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 14px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  right: 0;
  z-index: 10;
  img {
    width: 15px;
    height: 15px;
  }
}
</style>

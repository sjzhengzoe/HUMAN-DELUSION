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
    title: String,
  },
  data() {
    return {
      
      url: "./feedback",
    };
  },
  methods: {
    goToFeedback() {
      window.location.href = this.url + `?title=${this.title}`;
    },
  },
};
</script>

<style lang="less" scoped>
.fd_btn {
  width: 30px;

  text-align: center;
  box-sizing: border-box;
 
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-size: 28px;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  right: 0;
  z-index: 10;
    border-radius: 20px 0 0 20px;
     padding: 20px 28px 0 20px;
  img {
    width: 30px;
    height: 30px;
  }
  
}
</style>

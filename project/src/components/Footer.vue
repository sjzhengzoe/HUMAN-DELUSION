<template>
  <div class="Footer_component flex-y f-y-c" :class="{ white: type == 'result' }">
    <div class="text1">大师匠心打造精品在线测算</div>
    <div class="text_box flex f-y-c f-x-c">
      <div class="text2">如需帮助</div>
      <img class="icon" src="../assets/Footer_icon.png" alt="" />
      <a href="" class="flex text3">请点击此处</a>
    </div>
    <div class="img_box">
      <img class="img1" src="../assets/Footer_img2.png" alt="" />
      <img class="img2" src="../assets/Footer_img1.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Common-Footer',
  props: {
    type: {
      default: '',
      type: String,
    },
  },
};
</script>

<style lang="less" scoped>
.Footer_component {
  padding-top: 60px;
  &.white {
    background: #fff;
    .img_box {
      margin-bottom: 177px;
    }
  }
  .text1 {
    font-size: 28px;
    color: #333333;
  }
  .text_box {
    margin: 29px 0 33px;
  }
  .text2 {
    font-size: 24px;
    color: #333333;
  }
  .icon {
    width: 22px;
    height: 22px;
    margin: 0 2px 0 30px;
  }
  .text3 {
    font-size: 24px;
    color: #be1a24;
  }
  .img_box {
    margin-bottom: 277px;
  }
  .img1,
  .img2 {
    width: 162px;
    height: 61px;
    margin: 0 13px;
  }
}
</style>

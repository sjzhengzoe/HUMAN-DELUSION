<template>
  <div class="Footer_component flex-y f-y-c" :class="{ white: type == 'result' }">
    <div class="text1 flex f-y-c">
      <img class="left icon" src="../../assets/Common_Footer_icon.png" />
      <span>资深情感老师团队倾力打造</span>
      <img class="right icon" src="../../assets/Common_Footer_icon.png" />
    </div>

    <div class="text_box flex f-y-c f-x-c">
      <img class="icon" src="../../assets/Footer_icon.png" alt="" />
      <a href="/unity/index.html#/service" class="flex text3">联系售后专属客服</a>
    </div>
    <div class="text4" v-if="product.company">{{ product.company.company_name }}</div>
    <div class="text4" v-if="product.company">{{ product.company.address }}</div>
    <div class="text4" v-if="product.company">{{ product.company.phone }}</div>
    <div class="img_box">
      <img class="img1" src="../../assets/Footer_img2.png" alt="" />
      <img class="img2" src="../../assets/Footer_img1.png" alt="" />
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
      product: {}
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
    font-size: 24px;
    color: #f6ac8a;
    line-height: 24px;
    margin: 0 32px;
    .icon {
      width: 114px;
      height: 9px;
      margin: 0 5px;
      &.left {
        transform: rotate(180deg);
      }
    }
  }
  .text_box {
    margin: 30px 0 39px;
  }
  .text2 {
    font-size: 24px;
    color: #333333;
  }
  .icon {
    width: 22px;
    height: 22px;
    margin: 0 9px 0 0;
  }
  .text3 {
    font-size: 24px;
    text-decoration: underline;
    color: #ffce6e;
    line-height: 24px;
  }
  .text4 {
    font-size: 18px;
    color: #c25656;
    line-height: 24px;
      width: 96%;
      text-align: center;
      margin: 0 auto 10px;
  }
    .text4:last-child {
        margin-bottom: 20px;
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

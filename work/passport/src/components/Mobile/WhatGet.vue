<template>
  <div class="WhatGet_component">
    <div class="title">WHAT DO YOU GET</div>
    <div class="desc">
      You save time and money - take a biometric photo conv eniently without leaving home
    </div>
    <div class="flex f-sb f-y-start flex-w item_box">
      <div class="item flex-y f-x-c f-y-c" v-for="(item, idx) in list" :key="idx">
        <div class="img_limit flex f-x-c f-y-c">
          <img class="img" :class="`img${idx + 1}`" :src="item.img" alt="" />
        </div>
        <div class="title_small">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/m/what_get_pic1.png';
import img2 from '@/assets/m/what_get_pic2.png';
import img3 from '@/assets/m/what_get_pic3.png';
import img4 from '@/assets/m/what_get_pic4.png';
export default {
  name: 'WhatGet-component',
  data: function () {
    return {
      list: [
        {
          title: 'Convenient and fast',
          content:
            'Just upload a front photo of you, and you can get satisfactory results in about 3 seconds. You can download and save it yourself',
          img: img1,
        },
        {
          title: 'AI intelligent proc',
          content:
            'AI intelligent recognition, automatic photo processing, no manual intervention adjustment, you just need to take photos as required',
          img: img2,
        },
        {
          title: 'Adapt to various',
          content:
            'We will automatically generate appropriate photos for you according to the requirements of different certificate types in different countries, which can be saved and applied directly',
          img: img3,
        },
        {
          title: 'Privacy protection',
          content:
            'To protect your privacy, we promise not to apply your photos to other places. You can delete them at any time, and we will delete them automatically after saving them for 48 hours',
          img: img4,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.WhatGet_component {
  padding: 24px 0 0px;
  width: 100%;
  margin: 0 auto;
  .title {
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 56px;
    text-align: center;
    margin-bottom: 35px;
  }
  .desc {
    width: 541px;
    margin: 0 auto;
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(42, 46, 50, 0.8);
    line-height: 34px;
    text-align: center;
    margin-bottom: 78px;
  }
  .item_box {
    margin: 0 50px;
  }
  .item {
    width: 308px;
    margin: 0 25px 164px 0;
    box-sizing: border-box;
    &:nth-child(2n) {
      margin: 0;
    }
    .img1 {
      width: 132px;
      margin-bottom: 34px;
    }
    .img2 {
      width: 226px;
      margin-bottom: 34px;
    }
    .img3 {
      width: 170px;
      margin: 13px 0 17px;
    }
    .img4 {
      width: 189px;
      margin: 0 0 31px 0;
    }
    .title_small {
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 45px;
      margin-bottom: 22px;
    }
    .content {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #7d7f8d;
      line-height: 34px;
      text-align: center;
    }
  }
}
</style>

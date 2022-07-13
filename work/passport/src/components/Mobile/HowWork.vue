<template>
  <div class="HowWork_component" :class="page">
    <div class="title">HOW DOSE IT WORK</div>
    <div class="desc">
      You save time and money - take a biometric photo conv eniently without leaving home
    </div>
    <div class="flex f-sb f-y-start flex-w item_box">
      <div class="item flex-y f-x-c f-y-c" v-for="(item, idx) in list" :key="idx">
        <div class="img_limit flex f-x-c f-y-c">
          <img class="img" :class="`img${idx + 1}`" :src="item.img" alt="" />
        </div>
        <div class="title_small">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/m/how_work_pic1.png';
import img2 from '@/assets/m/how_work_pic2.png';
import img3 from '@/assets/m/how_work_pic3.png';
import img4 from '@/assets/m/how_work_pic4.png';
export default {
  name: 'HowWork-component',
  props: {
    page: {
      default: 'home',
      type: String,
    },
  },
  data: function () {
    return {
      list: [
        {
          title: 'Take or upload a photo',
          img: img1,
        },
        {
          title: 'Artificial Intelligenc will check it',
          img: img2,
        },
        {
          title: 'We will crop it to the size',
          img: img3,
        },
        {
          title: 'And remove  background',
          img: img4,
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.HowWork_component {
  width: 100%;
  padding: 37px 0 100px;
  &.home {
    background: rgba(48, 94, 180, 0.09);
  }
  &.country_card {
  }
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
    width: 587px;
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
    margin: 0 100px;
  }
  .item {
    margin-bottom: 53px;
    .img {
      margin-bottom: 22px;
      height: 248px;
    }
    .title_small {
      width: 240px;
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 37px;
      text-align: center;
    }
  }
}
</style>

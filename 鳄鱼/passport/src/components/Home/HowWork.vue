<template>
  <div class="HowWork_component" :class="page">
    <div class="limit">
      <div class="title">HOW DOSE IT WORK</div>
      <div class="desc">
        You save time and money - take a biometric photo conv eniently without leaving home
      </div>
      <div class="flex f-sb f-y-start">
        <div class="item flex-y f-x-c f-y-c" v-for="(item, idx) in list" :key="idx">
          <div class="img_limit flex f-x-c f-y-c">
            <img class="img" :class="`img${idx + 1}`" :src="item.img" alt="" />
          </div>
          <div class="title_small">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/pc/how_work_pic1.png';
import img2 from '@/assets/pc/how_work_pic2.png';
import img3 from '@/assets/pc/how_work_pic3.png';
import img4 from '@/assets/pc/how_work_pic4.png';
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
  .limit {
    width: 1136px;
    margin: 0 auto;
  }
  .title {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 50px;
    margin: 0 0 24px;
    text-align: center;
  }
  .desc {
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(42, 46, 50, 0.8);
    line-height: 34px;
    text-align: center;
    margin-bottom: 80px;
  }
  .item {
    .img {
      margin-bottom: 36px;
      height: 222px;
    }
    .title_small {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 22px;
    }
  }
}
</style>

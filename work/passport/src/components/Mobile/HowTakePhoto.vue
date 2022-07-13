<template>
  <div class="HowTakePhoto_component flex-y f-x-c f-y-c">
    <div class="title">HOW TO TAKE PHOTO</div>
    <img class="img1" src="../../assets/m/how_take_photo_img1.png" alt="" />
    <div class="desc">Body-camera distanc 40cm</div>
    <img class="img2" src="../../assets/m/how_take_photo_img2.png" alt="" />
    <div class="desc">Post ture:Straight ahead</div>
    <img class="img3" src="../../assets/m/how_take_photo_img3.png" alt="" />
    <div class="desc">Lighting on bothsides</div>
  </div>
</template>

<script>
export default {
  name: 'HowTakePhoto-component',
  data: function () {
    return {};
  },
};
</script>

<style lang="less" scoped>
.HowTakePhoto_component {
  .title {
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 56px;
    margin: 92px 0 84px;
  }
  .img1 {
    width: 174px;
    height: 179px;
  }
  .img2,
  .img3 {
    width: 368px;
    height: 177px;
  }
  .desc {
    font-size: 30px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #071c43;
    line-height: 42px;
    margin: 51px 0 73px;
  }
}
</style>

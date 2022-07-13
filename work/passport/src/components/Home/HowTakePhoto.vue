<template>
  <div class="HowTakePhoto_component">
    <div class="title">HOW TO TAKE PHOTO</div>
    <div class="flex f-sb f-y-c">
      <div class="content flex-y f-x-c f-y-c">
        <img class="img" src="../../assets/m/how_take_photo_img1.png" alt="" />
        <div class="desc">Body-camera distanc 40cm</div>
      </div>
      <div class="content flex-y f-x-c f-y-c">
        <img class="img" src="../../assets/m/how_take_photo_img2.png" alt="" />
        <div class="desc">Post ture:Straight ahead</div>
      </div>
      <div class="content flex-y f-x-c f-y-c">
        <img class="img" src="../../assets/m/how_take_photo_img3.png" alt="" />
        <div class="desc">Lighting on bothsides</div>
      </div>
    </div>
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
  width: 1060px;
  margin: 0 auto 73px;
  .title {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 50px;
    margin: 73px auto 45px;
    text-align: center;
  }
  .img {
    height: 120px;
  }
  .desc {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #071c43;
    line-height: 22px;
    margin-top: 29px;
  }
  .content {
    width: 353px;
  }
}
</style>

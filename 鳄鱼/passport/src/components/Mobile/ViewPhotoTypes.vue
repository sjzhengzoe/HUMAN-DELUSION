<template>
  <div class="ViewPhotoTypes_component">
    <div v-if="!noTitle" class="title">VIEW OTHER DOCUMENT PHOTO TYPES IN THE COUNTRY</div>
    <div class="doc">
      <div class="flex f-y-start">
        <img class="icon" src="../../assets/m/view_photo_types_icon1.png" alt="" />
        <div class="text">
          The photographs must be identical and taken within the last six months. They may be either
          black and white or color
        </div>
      </div>
      <div class="flex f-y-start">
        <img class="icon" src="../../assets/m/view_photo_types_icon2.png" alt="" />
        <div class="text">
          The photographs must be clear, well defined and taken against a plain white or
          light-colored background.
        </div>
      </div>
      <div class="flex f-y-start">
        <img class="icon" src="../../assets/m/view_photo_types_icon3.png" alt="" />
        <div class="text">If the photographs are digital, they must not be altered in any way.</div>
      </div>
      <div class="flex f-y-start">
        <img class="icon" src="../../assets/m/view_photo_types_icon4.png" alt="" />
        <div class="text">
          Your face must be square to the camera with a neutral expression, neither frowning nor
          smiling, and with your mouth closed.
        </div>
      </div>
      <div class="flex f-y-start">
        <img class="icon2" src="../../assets/m/view_photo_types_icon5.png" alt="" />
        <div class="text">
          You may wear non-tinted prescription glasses as long as your eyes are clearly visible.
          Make sure that the frame does not cover any part of your eyes. Sunglasses are not
          acceptable.
        </div>
      </div>
      <div class="flex f-y-start">
        <img class="icon2" src="../../assets/m/view_photo_types_icon6.png" alt="" />
        <div class="text">
          A hairpiece or other cosmetic accessory is acceptable if it does not disguise your normal
          appearance.
        </div>
      </div>
      <div class="flex f-y-start">
        <img class="icon2" src="../../assets/m/view_photo_types_icon7.png" alt="" />
        <div class="text">
          If you must wear a head covering for religious reasons, make sure your full facial
          features are not obscured.
        </div>
      </div>
      <img class="img flex" v-if="noTitle" src="../../assets/m/view_photo_types_img.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ViewPhotoTypes-component',
  data: function () {
    return {};
  },
  props: {
    noTitle: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="less" scoped>
.ViewPhotoTypes_component {
  margin-bottom: 105px;
  .title {
    width: 652px;
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #305eb4;
    line-height: 45px;
    padding: 28px;
    background: rgba(173, 209, 255, 0.18);
    border-radius: 73px;
    border: 1px solid #305eb4;
    margin: 0 auto 92px;
  }
  .doc {
    width: 677px;
    background: #ecf8ef;
    border-radius: 6px;
    border: 1px solid #34e458;
    margin: 0 auto;
    padding-top: 66px;
  }
  .icon {
    width: 90px;
    height: 90px;
    margin-top: -26px;
  }
  .icon2 {
    width: 135px;
    // height: 132px;
    margin: -46px -25px 0 -20px;
  }
  .text {
    width: 505px;
    font-size: 26px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #305eb4;
    line-height: 37px;
    padding-bottom: 43px;
  }
  .img {
    width: 323px;
    height: 289px;
    margin: 0 auto 67px;
  }
}
</style>

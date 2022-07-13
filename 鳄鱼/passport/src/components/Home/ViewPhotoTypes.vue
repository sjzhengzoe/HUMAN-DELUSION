<template>
  <div class="ViewPhotoTypes_component">
    <div class="title" v-if="!noTitle">VIEW OTHER DOCUMENT PHOTO TYPES IN THE COUNTRY</div>

    <div class="doc flex f-y-c">
      <div>
        <div class="flex f-y-start">
          <img class="icon" src="../../assets/m/view_photo_types_icon1.png" alt="" />
          <div class="text">
            The photographs must be identical and taken within the last six months. They may be
            either black and white or color
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
          <div class="text">
            If the photographs are digital, they must not be altered in any way.
          </div>
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
            A hairpiece or other cosmetic accessory is acceptable if it does not disguise your
            normal appearance.
          </div>
        </div>
        <div class="flex f-y-start">
          <img class="icon2" src="../../assets/m/view_photo_types_icon7.png" alt="" />
          <div class="text">
            If you must wear a head covering for religious reasons, make sure your full facial
            features are not obscured.
          </div>
        </div>
      </div>
      <img class="img flex" src="../../assets/m/view_photo_types_img.png" alt="" />
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
  margin-bottom: 131px;
  .title {
    width: 691px;
    border-radius: 27px;
    border: 1px solid rgba(151, 151, 151, 0.53);
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(7, 28, 67, 0.53);
    line-height: 28px;
    padding: 13px 0;
    text-align: center;
    margin: 0 auto 115px;
  }
  .doc {
    width: 1070px;
    background: #ecf8ef;
    border-radius: 6px;
    border: 1px solid #34e458;
    margin: 0 auto;
    padding-top: 37px;
  }
  .icon {
    width: 50px;
    height: 50px;
    margin-top: -14px;
  }
  .icon2 {
    width: 73px;
    height: 71px;
    margin: -26px -12px 0 -10px;
  }
  .text {
    width: 709px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #305eb4;
    line-height: 20px;
    margin-bottom: 28px;
  }
  .img {
    width: 186px;
    height: 167px;
    margin: 0 auto 66px;
  }
}
</style>

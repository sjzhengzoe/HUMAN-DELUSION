<template>
  <div class="RequirementsOfPhoto_component" v-if="countryPhotoData">
    <div class="title">{{ countryPhotoData.photoType.name }} - Digital photo requirements</div>
    <div>
      <div class="item_box flex f-y-c">
        <img class="icon" src="../../assets/m/CountryPhoto_icon1.png" alt="" />
        <div>
          <div class="sub_title">Size</div>
          <div class="content">{{ countryPhotoData.photoType.size }}</div>
        </div>
      </div>
      <div class="item_box flex f-y-c">
        <img class="icon" src="../../assets/m/CountryPhoto_icon2.png" alt="" />
        <div>
          <div class="sub_title">Is It suitable for online</div>
          <div class="content">yes</div>
        </div>
      </div>
      <div class="item_box flex f-y-c">
        <img class="icon" src="../../assets/m/CountryPhoto_icon3.png" alt="" />
        <div>
          <div class="sub_title">Resolution</div>
          <div class="content">{{ countryPhotoData.photoType.resolution }}</div>
        </div>
      </div>
      <div class="item_box flex f-y-c">
        <img class="icon" src="../../assets/m/CountryPhoto_icon4.png" alt="" />
        <div>
          <div class="sub_title">Is It printable</div>
          <div class="content">yes</div>
        </div>
      </div>
      <div class="item_box flex f-y-c">
        <img class="icon" src="../../assets/m/CountryPhoto_icon5.png" alt="" />
        <div>
          <div class="sub_title">Image definition</div>
          <div class="content">{{ countryPhotoData.photoType.imageDefinition }}</div>
        </div>
      </div>
      <div class="item_box flex f-y-c">
        <img class="icon" src="../../assets/m/CountryPhoto_icon6.png" alt="" />
        <div>
          <div class="sub_title">Background Color</div>
          <div class="color" :style="{ background: `${countryPhotoData.photoType.bgColor}` }" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RequirementsOfPhoto-component',
  computed: {
    countryPhotoData() {
      return this.$store.state.countryPhotoData;
    },
  },
};
</script>

<style lang="less" scoped>
.RequirementsOfPhoto_component {
  width: 750px;
  background: #f9fcff;
  padding: 42px 78px 38px;
  .title {
    width: 549px;
    margin: 0 auto;
    padding: 43px 0 20px;
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 56px;
  }
  .item_box {
    margin-bottom: 26px;
    .icon {
      width: 142px;
      height: 142px;
      margin-right: 54px;
    }
    .sub_title {
      font-size: 32px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 45px;
      margin-bottom: 8px;
    }
    .content {
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #071c43;
      line-height: 37px;
    }
    .color {
      width: 100px;
      height: 20px;
      border: 1px solid #000;
    }
  }
}
</style>

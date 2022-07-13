<template>
  <div class="RequirementsOfPhoto_component" v-if="countryPhotoData">
    <div class="limit">
      <div class="title">{{ countryPhotoData.photoType.name }} - Digital photo requirements</div>
      <div class="flex flex-w">
        <div class="item_box flex f-y-c">
          <img class="icon" src="../../assets/pc/CountryPhoto_icon1.png" alt="" />
          <div>
            <div class="sub_title">Size</div>
            <div class="content">{{ countryPhotoData.photoType.size }}</div>
          </div>
        </div>
        <div class="item_box flex f-y-c">
          <img class="icon" src="../../assets/pc/CountryPhoto_icon2.png" alt="" />
          <div>
            <div class="sub_title">Is It suitable for online</div>
            <div class="content">yes</div>
          </div>
        </div>
        <div class="item_box flex f-y-c">
          <img class="icon" src="../../assets/pc/CountryPhoto_icon3.png" alt="" />
          <div>
            <div class="sub_title">Resolution</div>
            <div class="content">{{ countryPhotoData.photoType.resolution }}</div>
          </div>
        </div>
        <div class="item_box flex f-y-c">
          <img class="icon" src="../../assets/pc/CountryPhoto_icon4.png" alt="" />
          <div>
            <div class="sub_title">Is It printable</div>
            <div class="content">yes</div>
          </div>
        </div>
        <div class="item_box flex f-y-c">
          <img class="icon" src="../../assets/pc/CountryPhoto_icon5.png" alt="" />
          <div>
            <div class="sub_title">Image definition</div>
            <div class="content">{{ countryPhotoData.photoType.imageDefinition }}</div>
          </div>
        </div>
        <div class="item_box flex f-y-c">
          <img class="icon" src="../../assets/pc/CountryPhoto_icon6.png" alt="" />
          <div>
            <div class="sub_title">Background Color</div>
            <div class="color" :style="{ background: `${countryPhotoData.photoType.bgColor}` }" />
          </div>
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
  width: 100%;
  background: #f9fcff;
  padding: 55px 0px 40px;
  .limit {
    width: 812px;
    margin: auto;
  }

  .title {
    width: 809px;
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 50px;
    padding-bottom: 40px;
  }
  .item_box {
    width: 405px;
    margin: 0 0 20px 0;
    .icon {
      width: 110px;
      height: 110px;
    }
    .sub_title {
      font-size: 25px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 36px;
      margin-bottom: 8px;
    }
    .content {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #071c43;
      line-height: 25px;
    }
    .color {
      width: 100px;
      height: 20px;
      border: 1px solid #000;
    }
  }
}
</style>

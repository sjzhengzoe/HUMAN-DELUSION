<template>
  <div class="CountryPhotoBanner_component">
    <div class="title">{{ countryPhotoData.photoType.title }}</div>
    <div class="desc">{{ countryPhotoData.photoType.summary }}</div>
    <router-link :to="{ path: '/use', query: { photoTypeId: countryPhotoData.photoType.id } }">
      <div class="upload_btn">UPLOAD</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CountryPhotoBanner-component',
  computed: {
    countryPhotoData() {
      return this.$store.state.countryPhotoData;
    },
  },
};
</script>

<style lang="less" scoped>
.CountryPhotoBanner_component {
  width: 100%;
  height: 634px;
  position: relative;
  margin-bottom: 108px;
  background: url('../../assets/m/CountryPhoto_banner.png') center/cover no-repeat;
  .title {
    padding: 35px 0 25px 82px;
    font-size: 53px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 74px;
  }
  .desc {
    width: 564px;
    margin: 0 0 0 82px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #071c43;
    line-height: 40px;
  }
  .upload_btn {
    width: fit-content;
    padding: 14px 152px;
    background: #38d063;
    box-shadow: 0px 3px 15px 0px rgba(56, 208, 99, 0.45);
    border-radius: 41px;
    font-size: 39px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 55px;
    position: absolute;
    bottom: -43px;
    left: 0;
    right: 0;

    margin: 0 auto;
  }
}
</style>

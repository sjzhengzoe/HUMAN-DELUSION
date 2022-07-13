<template>
  <div class="CountryPhotoBanner_component" v-if="countryPhotoData">
    <div class="limit">
      <div class="title">{{ countryPhotoData.photoType.title }}</div>
      <div class="desc">{{ countryPhotoData.photoType.summary }}</div>
      <router-link :to="{ path: '/use', query: { photoTypeId: countryPhotoData.photoType.id } }">
        <div class="upload_btn flex f-x-c">UPLOAD</div>
      </router-link>
    </div>
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
  margin-bottom: 83px;
  background: url('../../assets/pc/CountryPhoto_banner.png') center/cover no-repeat;
  .limit {
    width: 1092px;
    height: 421px;
    margin: 0 auto;
  }
  .title {
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 70px;
    padding: 90px 0 25px;
  }
  .desc {
    width: 500px;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 33px;
    margin-bottom: 60px;
  }
  .upload_btn {
    width: 725px;
    padding: 9px 0;
    background: #38d063;
    box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
    border-radius: 4px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 22px;
  }
}
</style>

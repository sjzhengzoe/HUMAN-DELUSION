<template>
  <div class="RequirementsOfText_component flex-y f-y-c" v-if="countryPhotoData">
    <div class="title flex f-y-c f-x-c">VIEW OTHER DOCUMENT PHOTO TYPES IN THE COUNTRY</div>
    <div class="sub_title">{{ countryPhotoData.region.name }} passport photo requirements</div>
    <div class="content" v-html="countryPhotoData.region.details" />
  </div>
</template>

<script>
export default {
  name: 'RequirementsOfText-component',
  data: function () {
    return {};
  },
  computed: {
    countryPhotoData() {
      return this.$store.state.countryPhotoData;
    },
  },
};
</script>

<style lang="less" scoped>
.RequirementsOfText_component {
  padding: 70px 0 236px 0;
  .title {
    width: 600px;
    padding: 32px 40px;
    margin-bottom: 180px;
    background: rgba(173, 209, 255, 0.18);
    border-radius: 73px;
    border: 1px solid #305eb4;
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #305eb4;
    line-height: 45px;
  }
  .sub_title {
    width: 606px;
    font-size: 46px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 65px;
    margin-bottom: 50px;
    text-align: center;
  }
  .content {
    width: 606px;
    font-size: 28px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #071c43;
    line-height: 45px;
  }
}
</style>

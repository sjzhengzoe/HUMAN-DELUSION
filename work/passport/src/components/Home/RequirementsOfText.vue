<template>
  <div class="RequirementsOfText_component flex-y f-y-c" v-if="countryPhotoData">
    <div class="sub_title">{{ countryPhotoData.photoType.name }} requirements</div>
    <div class="content" v-html="countryPhotoData.photoType.details" />
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
  width: 1194px;
  margin: 0 auto;
  padding: 244px 0 50px 0;
  .sub_title {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 50px;
    padding-bottom: 50px;
  }
  .content {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #071c43;
    line-height: 25px;
  }
}
</style>

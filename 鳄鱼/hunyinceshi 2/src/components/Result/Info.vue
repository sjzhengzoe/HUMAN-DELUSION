<template>
  <div class="Info_component common_banner_bg" v-if="resultData.user">
    <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
    <img class="common_title" src="../../assets/ResultInfo_title.png" alt="" />
    <div class="content_box common_banner_middle result">
      <div class="info_box flex f-y-c">
        <div class="key">姓名：</div>
        <div class="value">{{ resultData.user.name }}</div>
      </div>
      <div class="info_box flex f-y-c">
        <div class="key">性别：</div>
        <div class="value">{{ resultData.user.gender }}</div>
      </div>
      <div class="info_box flex f-y-start">
        <div class="key">生日：</div>
        <div class="value">
          <div>公历 {{ resultData.ba_zi.solar_text }}</div>
          <div>农历 {{ resultData.ba_zi.lunar_text }}</div>
        </div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Info-component',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.Info_component {
  margin-bottom: 120px;
  .content_box {
    padding-top: 27px;
    .info_box {
      width: 548px;
      margin: 0 auto;
      font-size: 32px;
      font-weight: bold;
      line-height: 52px;

      .key {
        color: #333333;
      }
      .value {
        color: #666666;
      }
    }
  }
}
</style>

<template>
  <div class="ResultInfo_components common_banner_bg">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultInfo_title.png" alt="" />
    <div class="content_box common_banner_middle">
      <div class="info_box flex f-y-c">
        <div class="key">姓名：</div>
        <div class="value">陈宇婷</div>
      </div>
      <div class="info_box flex f-y-c">
        <div class="key">性别：</div>
        <div class="value">女</div>
      </div>
      <div class="info_box flex f-y-start">
        <div class="key">生日：</div>
        <div class="value">
          <div>公历 1991年10月04日 卯时</div>
          <div>农历 一九九一年 八月 廿七 卯时</div>
        </div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Info',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultInfo_components {
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

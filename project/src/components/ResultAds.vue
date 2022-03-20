<template>
  <div class="ResultAds_components common_banner_bg">
    <img class="common_title" src="../assets/ResultAds_title.png" alt="" />
    <div class="items_box">
      <img
        class="banner"
        src="https://cs.wtaluo.com/hotrecommend/hmjx_default/113c3e456c154279b1b231ac14fb6642.png"
        alt=""
      />
      <div class="item_box flex f-sb f-y-c">
        <div>
          <div class="title">八字合婚</div>
          <div class="desc">内容</div>
          <div class="flex f-y-c">
            <div class="flex f-y-c numbers_box">
              <img class="icon" src="../assets/Footer_icon.png" alt="" />
              <span class="num">12345</span> 已测试
            </div>
            <div class="flex f-y-c numbers_box">
              <img class="icon" src="../assets/Footer_icon.png" alt="" />
              <span class="num">12345</span> 已测试
            </div>
          </div>
        </div>
        <img class="img" src="../assets/alipay.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Result-Ads',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
  components: {},
};
</script>

<style lang="less" scoped>
.ResultAds_components {
  background: url('../assets/ResultsAds_bg.png') top no-repeat;
  background-size: 100% auto;
  background-color: #fff;
  margin-top: 120px;
  width: 100%;
  padding: 60px 30px 30px;
  margin-bottom: 0 !important;
  .items_box {
    padding-top: 27px;
    .banner {
      width: 690px;
    }
    .item_box {
      margin: 14px 0;
      border-bottom: 1px solid #eee;
      .title {
        font-weight: 700;
        color: #000;
        margin-bottom: 4px;
        font-size: 46px;
      }
      .img {
        width: 150px;
        height: 150px;
      }
      .numbers_box {
        margin-right: 20px;
        margin-bottom: 20px;
      }
      .desc {
        font-size: 30px;
        color: #000;
        margin-bottom: 4px;
      }
      .icon {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }
      .num {
        color: rgb(255, 96, 96);
      }
    }
  }
}
</style>

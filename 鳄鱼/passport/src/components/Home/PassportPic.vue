<template>
  <div class="PassportPic_component">
    <div class="limit flex f-y-start">
      <div>
        <div class="title">Here is your Passport Picture.</div>

        <div class="desc">
          Your Passport Picture is cropped. Now you can choose whether you want to download the
          Passport Picture for free, or order high quality prints - checked and fine-tuned with
          perfect quality.
        </div>
        <img class="pic" src="@/assets/pc/passport_pic.png" alt="" />
      </div>
      <div>
        <div class="flex f-y-start f-sb info_box">
          <div class="flex-y f-x-c f-y-c info">
            <img class="pic" :src="doc" alt="" />
            <a :href="doc | download" class="download_btn flex f-x-c f-y-c"> SAMPLE DOWNLOAD </a>
            <div class="tip">Can be used for online submission</div>
          </div>
          <div class="flex-y f-x-c f-y-c info">
            <img class="pic" :src="comDoc" alt="" />
            <a :href="comDoc | download" class="download_btn flex f-x-c f-y-c"> SAMPLE DOWNLOAD </a>
            <div class="tip">(4 x 6 inch) available for printing</div>
          </div>
        </div>
        <div class="tips flex f-x-c">Get watermarked photos after payment</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PassportPic-component',
  data: function () {
    return {};
  },
  computed: {
    doc() {
      return this.$store.state.payInfo.doc;
    },
    comDoc() {
      return this.$store.state.payInfo.comDoc;
    },
  },
  async mounted() {
    await this.$store.dispatch('getPayInfo', {
      cb: () => {
        this.$router.push('/');
      },
      payToken: this.$route.query.payToken,
    });
  },
};
</script>

<style lang="less" scoped>
.PassportPic_component {
  height: 518px;
  background: url('../../assets/pc/passport_pic_bg.png') bottom/cover no-repeat;
  .limit {
    width: 934px;
    padding: 96px 0 0 41px;
    margin: 0 auto;
  }
  .title {
    width: 344px;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 33px;
    padding: 14px 0 16px;
  }
  .desc {
    width: 398px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
  }
  .pic {
    width: 200px;
  }
  .info_box {
    margin: 0 0 0 37px;
  }
  .tips {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #b6b7c0;
    line-height: 20px;
    margin-top: 18px;
  }
  .info {
    &:first-child {
      margin-right: 28px;
    }
    .pic {
      width: auto;
      height: 264px;
      margin-bottom: 10px;
    }
    .download_btn {
      cursor: pointer;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 22px;
      width: 207px;
      background: #38d063;
      box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
      border-radius: 6px;
      margin-bottom: 11px;
      padding: 8px 0;
    }
    .tip {
      width: 215px;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 22px;
      text-align: center;
    }
  }
}
</style>

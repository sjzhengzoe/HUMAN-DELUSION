<template>
  <div class="PassportPic_component">
    <div class="title">
      <div>Here is your</div>
      <div>Passport Picture.</div>
    </div>

    <div class="desc">Get watermarked photos after payment</div>

    <div class="flex f-y-start f-sb info_box">
      <div class="flex-y f-x-c f-y-c info">
        <img class="pic" :src="doc" alt="" />
        <a :href="doc | download" class="download_btn flex f-x-c f-y-c"> SAMPLE DOWNLOAD </a>
        <div class="tip">Can be used for online submission</div>
      </div>
      <div class="flex-y f-x-c f-y-c info">
        <img class="pic" :src="comDoc" alt="" />
        <a :href="comDoc | download" class="download_btn flex f-x-c f-y-c"> SAMPLE DOWNLOAD </a>
        <div class="tip">Can be used for online submission</div>
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
  padding: 66px 0;
  .title {
    font-size: 53px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 74px;
    margin-left: 97px;
  }
  .desc {
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #505050;
    line-height: 37px;
    padding: 18px 0 50px;
    margin-left: 97px;
  }
  .info_box {
    margin: 0 34px;
  }
  .info {
    .pic {
      height: 224px;
      margin-bottom: 20px;
    }
    .download_btn {
      width: 323px;
      font-size: 25px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 34px;
      background: #38d063;
      box-shadow: 0px 3px 16px 0px rgba(56, 208, 99, 0.45);
      border-radius: 35px;
      margin-bottom: 26px;
      padding: 18px;
    }
    .tip {
      width: 276px;
      font-size: 26px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #000000;
      line-height: 37px;
    }
  }
}
</style>

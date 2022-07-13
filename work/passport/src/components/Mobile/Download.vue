<template>
  <div class="Download_component">
    <div class="picture">
      <div class="title">Here is your Passport Picture.</div>
      <div class="desc">Get watermarked photos after payment</div>

      <div class="flex f-y-start f-sb">
        <div class="flex-y f-x-c f-y-c">
          <img class="pic flex" :src="doc" alt="" />
          <a :href="doc | download" class="download_btn flex f-x-c">DOWNLOAD</a>
          <div class="tips">Can be used for online submission</div>
        </div>
        <div class="flex-y f-x-c f-y-c">
          <img class="pic flex" :src="comDoc" alt="" />
          <a :href="comDoc | download" class="download_btn flex f-x-c">DOWNLOAD</a>
          <div class="tips">Can be used for online submission</div>
        </div>
      </div>
    </div>
    <div class="tips_box">
      Tips: If there is no response after clicking download, or you can't find the photo after
      downloading, right click on the photo and "Save picture as" to save it (long press the photo
      to save it to album).
    </div>

    <img class="img flex" src="../../assets/m/download_img.png" alt="" />

    <div class="send">
      <div class="send_text">Send to mailbox</div>
      <Input v-model="email" class="input" />
      <div @click="sendEmail" class="send_btn flex f-x-c">SEND</div>
    </div>

    <div class="tips_container flex f-y-start">
      <img class="icon" src="../../assets/m/download_icon.png" alt="" />
      <div class="text">
        You can delete photos by order number or email, and photos will be automatically deleted 48
        hours after they are generated
      </div>
    </div>
  </div>
</template>

<script>
import { Input, Message } from 'view-design';
import * as Api from '../../api/api.js';
export default {
  name: 'Download-component',
  components: { Input },
  data: function () {
    return {
      doc: '',
      comDoc: '',
      email: '',
    };
  },
  async mounted() {
    const { payToken, num } = this.$route.query;
    if (num) {
      const info = localStorage.getItem(`${num}`);
      if (info) {
        const docData = JSON.parse(info);
        this.doc = docData.doc;
        this.comDoc = docData.comDoc;
      } else {
        this.$router.push('/find');
      }
    } else if (payToken) {
      const {
        data: { data, code },
      } = await Api.getDownloadInfo({ payToken: this.$route.query.payToken });
      if (code == 0) {
        this.doc = data.doc;
        this.comDoc = data.comDoc;
      } else {
        this.$router.push({
          path: '/pay',
          query: {
            payToken,
          },
        });
      }
    } else {
      this.$router.push('/');
    }
  },
  methods: {
    // 发送邮件
    async sendEmail() {
      if (!this.email.match(/^\w+@\w+\.\w+$/i)) {
        Message.error('请填写正确的邮箱');
        return null;
      }

      const { payToken } = this.$route.query;
      const res = await Api.sendEmail({ payToken, email: this.email });
      const { code, msg } = res.data;

      if (code != 0) {
        Message.error(msg);
      } else {
        Message.success(msg);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.Download_component {
  .picture {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
    background: url('../../assets/m/download_bg.png') center/cover no-repeat;
    .title {
      width: 600px;
      font-size: 53px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 74px;
      padding: 70px 0 0 84px;
    }
    .desc {
      padding: 17px 0 24px 84px;
    }
    .pic {
      height: 224px;
      margin-bottom: 15px;
    }
    .download_btn {
      font-size: 25px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 34px;
      padding: 18px 0;
      width: 323px;
      background: #38d063;
      box-shadow: 0px 3px 16px 0px rgba(56, 208, 99, 0.45);
      border-radius: 35px;
      margin-bottom: 28px;
    }
    .tips {
      width: 335px;
      font-size: 25px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 34px;
      text-align: center;
      padding-bottom: 78px;
    }
  }
  .tips_box {
    width: 608px;
    margin: 45px auto 131px;
    padding: 28px 64px;
    box-sizing: border-box;
    background: rgba(48, 94, 180, 0.09);
    border-radius: 6px;
    font-size: 26px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #305eb4;
    line-height: 36px;
  }
  .img {
    width: 218px;
    height: 168px;
    margin: 0 auto 90px;
  }
  .send {
    width: 608px;
    margin: 0 auto 112px;
    .send_text {
      font-size: 30px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #305eb4;
      line-height: 42px;
      margin-bottom: 18px;
    }
    .input {
      width: 608px;
      height: 100px;
      line-height: 100px;
      background: #ffffff;
      border-radius: 11px;
      border: 2px solid #e2e2e2;
      margin-bottom: 33px;
      /deep/.ivu-input {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #000;
        line-height: 100px;
        height: 100px;
        padding-left: 14px;
        &:focus {
          box-shadow: none;
        }
      }
    }
    .send_btn {
      width: 608px;
      background: #38d063;
      box-shadow: 0px 3px 15px 0px rgba(56, 208, 99, 0.45);
      border-radius: 41px;
      padding: 14px 0;
      font-size: 39px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 55px;
    }
  }
  .tips_container {
    width: 677px;
    margin: 0 auto 231px;
    background: #ecf8ef;
    border-radius: 6px;
    padding: 36px 0;
    border: 1px solid #34e458;
    .icon {
      width: 91px;
      height: 90px;
      margin: -15px 12px 0 0;
    }
    .text {
      font-size: 26px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #305eb4;
      line-height: 37px;
    }
  }
}
</style>

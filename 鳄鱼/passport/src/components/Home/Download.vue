<template>
  <div class="Download_component flex-y f-x-c f-y-c">
    <div class="picture flex-y f-y-c">
      <div class="title">Here is your Passport Picture.</div>
      <div class="flex f-y-start f-sb pic_box">
        <div class="flex-y f-x-c f-y-c">
          <img class="pic flex" :src="doc" alt="" />
          <div class="tips">Can be used for online submission</div>
          <a :href="doc | download" class="download_btn flex f-x-c"> Download individual images </a>
        </div>
        <div class="flex-y f-x-c f-y-c">
          <img class="pic flex" :src="comDoc" alt="" />
          <div class="tips">(4 x 6 inch) available for printing</div>
          <a :href="comDoc | download" class="download_btn flex f-x-c">
            Download individual images
          </a>
        </div>
      </div>
      <div class="tips_box">
        Tips: If there is no response after clicking download, or you can't find the photo after
        downloading, right click on the photo and "Save picture as" to save it (long press the photo
        to save it to album).
      </div>
    </div>

    <div class="send_box flex f-y-c">
      <img class="img flex" src="../../assets/pc/download_img.png" alt="" />
      <div class="send">
        <div class="send_text">SEND TO MAILBOX</div>
        <div class="flex f-y-c">
          <Input v-model="email" class="input" />
          <div @click="sendEmail" class="send_btn flex f-x-c">SEND</div>
        </div>
      </div>
    </div>

    <div class="tips_container flex f-y-start">
      <img class="icon" src="../../assets/pc/download_icon.png" alt="" />
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
    width: 972px;
    background: #f9f9f9;
    border-radius: 37px;
    border: 1px solid #d3dadf;
    padding: 16px 0 32px 0;
    margin: 60px 0 50px;
    box-sizing: border-box;
    .pic_box {
      margin-bottom: 37px;
    }
    .title {
      font-size: 24px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 33px;
      margin-bottom: 12px;
    }
    .pic {
      height: 326px;
      margin-bottom: 1px;
    }
    .download_btn {
      cursor: pointer;
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 22px;
      padding: 8px 29px;
      background: #38d063;
      box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
      border-radius: 6px;
    }
    .tips {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #000000;
      line-height: 22px;
      margin-bottom: 11px;
    }
    .tips_box {
      width: 769px;
      background: rgba(48, 94, 180, 0.09);
      border-radius: 6px;
      padding: 14px 26px;
      box-sizing: border-box;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #305eb4;
      line-height: 23px;
    }
  }

  .send_box {
    margin-bottom: 70px;
    .img {
      width: 180px;
      height: 138px;
      margin: 0 23px 0;
    }
    .send {
      .send_text {
        font-size: 36px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #071c43;
        line-height: 50px;
        margin-bottom: 15px;
      }
      .input {
        width: 423px;
        height: 40px;
        background: #ffffff;
        border-radius: 6px;
        border: 1px solid #e2e2e2;
        margin-right: 26px;

        /deep/.ivu-input {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #000;
          line-height: 38px;
          height: 38px;
          padding-left: 14px;
          &:focus {
            box-shadow: none;
          }
        }
      }
      .send_btn {
        background: #38d063;
        box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
        border-radius: 4px;
        padding: 9px 37px;
        font-size: 16px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #ffffff;
        line-height: 22px;
        cursor: pointer;
      }
    }
  }
  .tips_container {
    width: 878px;
    background: #ecf8ef;
    border-radius: 6px;
    border: 1px solid #34e458;
    padding: 16px 24px;
    box-sizing: border-box;
    margin-bottom: 18px;
    .icon {
      width: 25px;
      height: 26px;
      margin: 0 25px 0 0;
    }
    .text {
      font-size: 18px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #305eb4;
      line-height: 25px;
    }
  }
}
</style>

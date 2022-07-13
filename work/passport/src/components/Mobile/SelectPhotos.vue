<template>
  <div class="SelectPhotos_component">
    <div class="bg">
      <div class="title">Please Select photos</div>
      <Upload action="" :before-upload="handleUpload">
        <div class="upload flex f-x-c f-y-c">
          <img class="flex add" src="../../assets/m/select_photos_add.png" alt="" />
          <div class="text">UPLOAD PHOTO</div>
        </div>
        <div class="tips" @click.stop="() => {}">
          Photo size: 50kb ~ 20MB, pixels greater than or equal to 200 * 200px
        </div>
        <div class="select_photo_name">{{ uploadFile.name }}</div>
      </Upload>
      <div v-if="needCode && code" class="check_code flex f-sb f-y-c">
        <Input class="check flex f-y-c f-x-c" v-model="captchaCode" placeholder="TYPE HERE" />
        <img class="code flex f-y-c f-x-c" :src="code" />
      </div>
      <div @click="handleUploadFile" class="upload_btn flex f-y-c f-x-c">UPLOAD</div>

      <div class="process" v-if="uploadStatus">
        <img class="pic flex" src="../../assets/pc/loading.png" alt="" />
        <div class="bar">
          <div class="now" :style="uploadStatus"></div>
        </div>
        <div class="now_text">{{ uploadStatus.width }}</div>
        <div class="text">Processing photos…</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Upload, Input, Message } from 'view-design';
import Compressor from 'compressorjs';
import * as Api from '../../api/api.js';
export default {
  name: 'SelectPhotos-component',
  data: function () {
    return {
      needCode: false, // 是否需要验证码
      code: '', // 验证码图片
      uploadFile: '', // 上传图片
      captchaCode: '', // 用户输入的验证码
      uploadStatus: null, // 上传进度
      loading: false,
      // 压缩配置
      compressOptions: {
        quality: 0.6,
        maxWidth: 2000,
      },
      fileType: ['png', 'jpg', 'jpeg'], // 支持的图片类型
    };
  },
  mounted() {
    if (!this.$route.query.photoTypeId) {
      this.$router.push('/');
    }
    this.getValidCode();
  },
  methods: {
    // 获取验证码
    async getValidCode() {
      const res = await Api.getValidCode();
      this.needCode = res.data.data.captchaVerify;
      this.code = res.data.data.image;
    },
    // 检查图片类型
    checkType() {
      const type = this.uploadFile.name.substring(this.uploadFile.name.lastIndexOf('.') + 1);
      return this.fileType.includes(type.toLowerCase());
    },
    // 上传图片
    handleUpload(file) {
      this.uploadFile = file;
      if (!this.checkType()) {
        Message.error('仅支持png、jpg、jpeg格式的图片');
        return;
      }
      return false;
    },
    // 上传按钮
    handleUploadFile() {
      if (this.loading) return null;
      this.loading = true;
      if (!this.uploadFile) {
        Message.error('请先上传图片');
        return;
      }

      if (!this.checkType()) {
        Message.error('仅支持png、jpg、jpeg格式的图片');
        return;
      }

      if (this.needCode && !this.captchaCode) {
        Message.error('请输入验证码');
        return;
      }

      // 压缩图片
      new Compressor(this.uploadFile, {
        ...this.compressOptions,
        success: async (blob) => {
          const formData = new FormData();
          let file = new window.File([blob], blob.name, { type: blob.type });
          // 文件
          formData.append('file', file);
          // 相片类型
          formData.append('photoTypeId', this.$route.query.photoTypeId);
          // 验证码
          if (this.needCode) {
            formData.append('captchaCode', this.captchaCode);
          }

          // 进度条动画
          let width = 0;
          this.timer = setInterval(() => {
            if (width >= 99) return null;
            width += 1;
            this.uploadStatus = {
              width: `${width}%`,
            };
          }, 100);
          try {
            const res = await Api.postUpload(formData);
            if (res.data.code == 0) {
              clearInterval(this.timer);
              this.uploadStatus = {
                width: `100%`,
              };
              this.$router.push({ path: '/pay', query: { payToken: res.data.data.payToken } });
            } else {
              clearInterval(this.timer);
              this.uploadStatus = {
                width: `0%`,
              };
              this.getValidCode();
              Message.error(res.data.msg);
            }
          } catch (e) {
            clearInterval(this.timer);
            this.uploadStatus = {
              width: `0%`,
            };
            this.getValidCode();
            Message.error('网络错误，请重试。');
          }

          this.loading = false;
        },
        error(err) {
          Message.error(err.message);
        },
      });
    },
  },
  components: { Upload, Input },
};
</script>

<style lang="less" scoped>
.SelectPhotos_component {
  padding: 58px 22px 61px;
  width: 750px;
  background: url('../../assets/m/select_photos_bg.png') bottom/cover no-repeat;
  .bg {
    background: rgba(255, 255, 255, 0.56);
    box-shadow: 0px 15px 45px 0px #edf1f7;
    border-radius: 9px;
    backdrop-filter: blur(42.36311239193084px);
    padding: 41px 37px 61px;
  }
  .title {
    font-size: 36px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 50px;
    margin: 0 0 34px;
  }
  .upload {
    width: 633px;
    height: 121px;
    background: #305eb4;
    box-shadow: 0px 2px 10px 0px rgba(48, 94, 180, 0.26);
    border-radius: 6px;
    .add {
      width: 49px;
      height: 51px;
      margin-bottom: 6px;
    }
    .text {
      font-size: 26px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 37px;
      margin-left: 16px;
    }
  }
  .tips {
    width: 585px;
    font-size: 26px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7d7f8d;
    line-height: 37px;
    margin: 36px 8px 18px;
  }
  .select_photo_name {
    width: 634px;
    padding: 30px 46px 40px;
    background: #ffffff;
    border-radius: 9px;
    border: 1px solid rgba(211, 218, 223, 0.86);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .check_code {
    margin-top: 27px;
    .check {
      width: 381px;
      height: 89px;
      background: #ffffff;
      border-radius: 9px;
      border: 1px solid rgba(211, 218, 223, 0.86);
      margin-right: 21px;
      box-sizing: border-box;
      /deep/.ivu-input {
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #071c43;
        line-height: 89px;
        height: 89px;
        text-align: center;
        &::placeholder {
          color: #d3dadf;
        }
        &:focus {
          box-shadow: none;
        }
      }
    }
    .code {
      width: 223px;
      height: 80px;
      border-radius: 9px;
      background: #ffffff;
      border: 1px solid rgba(211, 218, 223, 0.86);
    }
  }
  .upload_btn {
    width: fit-content;
    font-size: 39px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 55px;
    padding: 14px 152px;
    background: #38d063;
    box-shadow: 0px 3px 15px 0px rgba(56, 208, 99, 0.45);
    border-radius: 41px;
    margin: 52px auto;
  }
  .process {
    .pic {
      width: 156px;
      margin: 41px auto 32px;
    }

    .bar {
      width: 632px;
      height: 21px;
      background: #e8edf2;
      border-radius: 36px;
      .now {
        width: 444px;
        height: 21px;
        background: linear-gradient(181deg, #5d98da 0%, #305eb4 100%);
        box-shadow: 0px 8px 39px 0px rgba(158, 193, 255, 0.73);
        border-radius: 36px;
      }
    }
    .now_text {
      width: 632px;
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #305eb4;
      line-height: 33px;
      margin-top: 21px;
      text-align: right;
    }

    .text {
      font-size: 30px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #305eb4;
      line-height: 42px;
      text-align: center;
    }
  }
}
</style>

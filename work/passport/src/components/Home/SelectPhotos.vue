<template>
  <div class="SelectPhotos_component">
    <div class="flex f-y-c upload_box">
      <Upload action="" :before-upload="handleUpload">
        <div class="flex f-x-c f-y-c upload_box">
          <div class="upload flex f-x-c f-y-c" :class="{ long: !(needCode && code) }">
            <img class="flex add" src="../../assets/m/select_photos_add.png" alt="" />
            <div class="text">UPLOAD PHOTO</div>
          </div>
          <div class="select_photo_name" :class="{ long: !(needCode && code) }">
            {{ uploadFile.name }}
          </div>
        </div>
      </Upload>

      <div v-if="needCode && code" class="check_code flex f-sb f-y-c">
        <Input class="check flex f-y-c f-x-c" v-model="captchaCode" placeholder="TYPE HERE" />
        <img class="code flex f-y-c f-x-c" :src="code" />
      </div>
      <div
        @click="handleUploadFile"
        :class="{ long: !(needCode && code) }"
        class="upload_btn flex f-y-c f-x-c"
      >
        UPLOAD
      </div>
    </div>
    <div class="tips">Photo size: 50kb ~ 20MB, pixels greater than or equal to 200 * 200px</div>
    <div ref="process"></div>
    <div class="process" v-if="uploadStatus">
      <img class="pic flex f-x-c" src="../../assets/pc/loading.png" alt="" />
      <div class="bar_box flex f-sb">
        <div class="bar">
          <div class="now" :style="uploadStatus"></div>
        </div>
        <div class="now_text">{{ uploadStatus.width }}</div>
      </div>
      <div class="text">Processing photos…</div>
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
        quality: 0.9,
        maxWidth: 2200,
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
          this.$refs.process.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
          this.loading = false;
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
  width: 1106px;
  margin: 51px auto 0;
  .upload_box {
    /deep/ .ivu-upload-list {
      display: none;
    }
  }
  .upload_box {
    cursor: pointer;
  }
  .upload {
    width: 233px;
    &.long {
      width: 400px;
    }
    height: 55px;
    background: #305eb4;
    box-shadow: 0px 2px 10px 0px rgba(48, 94, 180, 0.26);
    border-radius: 6px;
    cursor: pointer;
    .add {
      width: 21px;
      height: 21px;
      margin-right: 16px;
    }
    .text {
      font-size: 16px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #ffffff;
      line-height: 16px;
    }
  }

  .select_photo_name {
    width: 303px;
    height: 55px;
    padding: 14px;
    border-radius: 0 6px 6px 0;
    margin-left: -6px;
    border: 1px solid #d3dadf;
    margin-right: 14px;
    border-left: 0;
    position: relative;
    z-index: -1;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.long {
      width: 450px;
    }
  }
  .check_code {
    .check {
      width: 183px;
      height: 56px;
      border-radius: 6px;
      border: 1px solid #d3dadf;
      margin-right: 7px;

      /deep/.ivu-input {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #071c43;
        line-height: 56px;
        height: 56px;
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
      width: 159px;
      height: 56px;
      border-radius: 6px;
      background: #ffffff;
      border: 1px solid rgba(211, 218, 223, 0.86);
      margin-right: 21px;
    }
  }
  .upload_btn {
    width: 186px;
    &.long {
      width: 350px;
    }
    background: #38d063;
    box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
    border-radius: 4px;

    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 22px;
    padding: 17.5px;
    cursor: pointer;
  }
  .tips {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7d7f8d;
    line-height: 22px;
    margin-top: 24px;
  }
  .process {
    .pic {
      width: 136px;
      margin: 92px auto 50px;
    }
    .bar_box {
      .bar {
        width: 1067px;
        height: 34px;
        background: #e8edf2;
        border-radius: 36px;
        .now {
          width: 0px;
          height: 34px;
          background: linear-gradient(181deg, #5d98da 0%, #305eb4 100%);
          box-shadow: 0px 8px 39px 0px rgba(158, 193, 255, 0.73);
          border-radius: 36px;
        }
      }
      .now_text {
        margin-left: 15px;
        font-size: 24px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #305eb4;
        line-height: 33px;
      }
    }
    .text {
      margin: 42px 0 0 0;
      font-size: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #305eb4;
      line-height: 33px;
      text-align: center;
    }
  }
}
</style>

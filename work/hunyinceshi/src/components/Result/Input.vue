<template>
  <div class="Input_component common_banner_bg">
    <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
    <img class="common_title" src="../../assets/ResultInput_title.png" alt="" />
    <div class="content_box common_banner_middle flex-y f-y-c">
      <div class="input_box flex f-y-c">
        <div class="name">手机</div>
        <input v-model="phone" class="input" placeholder="请输入您的手机号" type="text" />
      </div>
      <!-- <div class="input_box flex f-y-c">
        <div class="name">邮箱</div>
        <input v-model="email" class="input" placeholder="请输入邮箱(推荐QQ邮箱)" type="text" />
      </div> -->
      <img class="button" @click="checkTerms" src="../../assets/ResultInput_button.png" alt="" />
      <div class="terms_box flex f-y-c f-x-c">
        <img
          v-if="check"
          @click="check = false"
          class="check_icon"
          src="../../assets/HomeInput_check.png"
          alt=""
        />
        <img
          v-if="!check"
          @click="check = true"
          class="check_icon"
          src="../../assets/HomeInput_not_check.png"
          alt=""
        />
        查看 <a class="flex" href="">《用户协议》</a> 和<a class="flex" href="">《隐私协议》</a>
      </div>
    </div>
    <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
  name: 'Input-component',
  data() {
    return {
      check: true,
      phone: '',
      // email: '',
    };
  },
  props: {
    handleSaveMobile: {
      default: () => {},
      type: Function,
    },
  },
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
  methods: {
    checkTerms() {
      if (!this.check) {
        Toast({
          message: '请勾选协议',
          position: 'center',
          duration: 3000,
        });
        return;
      }
      this.handleSaveMobile(this.phone);
    },
  },
};
</script>

<style lang="less" scoped>
.Input_component {
  margin-bottom: 120px;
  .content_box {
    padding-top: 30px;
    .input_box {
      width: 598px;
      height: 79px;
      background: #fff4f5;
      border: 1px solid #f77885;
      border-radius: 40px;
      margin-bottom: 28px;
      overflow: hidden;
      .input {
        width: 340px;
        padding: 0;
        outline-style: none;
        border: 0px;
        font-size: 30px;
        background: #fff4f5;
      }

      .name {
        font-size: 30px;
        flex-shrink: 0;
        font-weight: bold;
        margin: 0 43px 0 49px;
        color: #333333;
      }
      .type {
        width: 55px;
        height: 55px;
        background: #fff;
        border: 1px solid #de5d68;
        box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        font-size: 30px;
        color: #666666;
        &:nth-of-type(2) {
          margin-right: 58px;
        }
        &.active {
          color: #fff;
          background: #de5d68;
        }
      }
    }
    .button {
      width: 595px;
      margin: 0 auto;
      transform: scale(0.8);
      animation: button 2s linear infinite;
      @keyframes button {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(0.8);
        }
      }
    }
    .terms_box {
      color: #666666;
      font-size: 24px;
      margin: 40px auto 0px;
      .check_icon {
        width: 24px;
        height: 24px;
        margin-right: 5px;
      }
      > a {
        color: #f16a72;
        text-decoration: none;
      }
    }
  }
}
</style>

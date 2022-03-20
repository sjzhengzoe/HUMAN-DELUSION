<template>
  <div class="HomeInput_component flex-y f-x-c f-y-c common_banner_bg">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/HomeInput_title.png" alt="" />
    <div class="content_box common_banner_middle flex-y f-y-c">
      <div class="input_box flex f-y-c">
        <div class="name">您的姓名</div>
        <input class="input" v-model="username" placeholder="请输入姓名（汉字）" type="text" />
      </div>

      <div class="input_box flex f-y-c">
        <div class="name">您的性别</div>
        <div
          @click="gender = 'male'"
          class="gender flex f-y-c f-x-c"
          :class="{ active: gender == 'male' }"
        >
          男
        </div>
        <div
          @click="gender = 'female'"
          class="gender flex f-y-c f-x-c"
          :class="{ active: gender == 'female' }"
        >
          女
        </div>
      </div>

      <div class="input_box flex f-y-c">
        <div class="name">出生日期</div>
        <input
          @click="isShowCalendar = true"
          :value="date.Alldate"
          class="input"
          placeholder="请选择出生日期"
          type="text"
        />
        <Calendar
          v-if="isShowCalendar"
          ref="showLunar"
          :birdate="{}"
          @closedate="handleCloseCalendar"
        />
      </div>

      <!-- 下单按钮 -->
      <img class="button" @click="handleSubmit" src="../assets/HomeInput_button.png" alt="" />

      <div class="terms_box flex f-y-c f-x-c">
        <img
          class="check_icon"
          @click="checkTerms = false"
          v-if="checkTerms"
          src="../assets/HomeInput_check.png"
          alt=""
        />
        <img
          class="check_icon"
          @click="checkTerms = true"
          v-if="!checkTerms"
          src="../assets/HomeInput_not_check.png"
          alt=""
        />
        查看 <a class="flex" href="">《用户协议》</a> 和<a class="flex" href="">《隐私协议》</a>
      </div>

      <a class="to_order_link flex f-x-c" href="">查看我的订单</a>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import * as utils from '../utils/index';
import Calendar from '../components/Calendar/index.vue';
export default {
  name: 'Home-Input',
  components: {
    Calendar,
  },
  data: function () {
    return {
      gender: 'male',
      date: {},
      isShowCalendar: false,
      username: '',
      checkTerms: false,
    };
  },
  methods: {
    handleCloseCalendar(date) {
      this.isShowCalendar = false;
      if (date) this.date = date;
    },
    async handleSubmit() {
      let toastTips = null;
      if (!this.checkTerms) toastTips = '请勾选协议';
      if (!this.date.birthday) toastTips = '请选择出生日期';
      if (!this.username.length > 0) toastTips = '请输入姓名';
      var reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
      if (!reg.test(this.username)) {
        toastTips = '请输入汉字';
      }

      if (toastTips) {
        Toast({
          message: toastTips,
          position: 'center',
          duration: 3000,
        });
        return;
      }
      const localData = await utils.getLocal();
      await this.$store.dispatch('postOrder', {
        gender: this.gender,
        channel: localData.channel,
        username: this.username,
        birthday: Number(this.date.birthday),
        hour: this.date.h,
        params: JSON.stringify(localData.params),
      });
      location.href = '/pay';
    },
  },
};
</script>

<style lang="less">
.HomeInput_component {
  margin-top: 120px;
  .content_box {
    padding-top: 40px;
  }
  .input_box {
    width: 598px;
    height: 79px;
    background: #fff4f5;
    border: 1px solid #f77885;
    border-radius: 40px;
    margin-bottom: 28px;
    .input {
      outline-style: none;
      border: 0px;
      background: #fff4f5;
    }

    .name {
      font-size: 30px;
      font-weight: bold;
      margin: 0 63px 0 49px;
      color: #333333;
    }
    .gender {
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
    font-size: 24px;
    color: #999999;
    margin: 34px auto 35px;
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
  .to_order_link {
    font-size: 26px;
    text-decoration: underline;
    color: #7d334c;
  }
}
</style>

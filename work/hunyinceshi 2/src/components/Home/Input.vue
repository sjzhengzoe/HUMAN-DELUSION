<template>
  <div class="Input_component">
    <div class="all_input_box">
      <!-- 姓名 -->
      <div class="input_box flex f-y-c">
        <div class="name">您的姓名</div>
        <input
          ref="input"
          id="input_name"
          class="input"
          v-model="username"
          placeholder="请输入姓名（汉字）"
          type="text"
        />
      </div>

      <!-- 性别 -->
      <div class="input_box flex f-y-c">
        <div class="name">您的性别</div>
        <div class="gender flex f-y-c f-x-c" @click="gender = 'male'">
          <img
            class="icon"
            v-if="gender == 'male'"
            src="../../assets/Header_Input_check.png"
            alt=""
          />
          <img
            class="icon"
            v-if="gender != 'male'"
            src="../../assets/Header_Input_no_check.png"
            alt=""
          />
          男性
        </div>
        <div class="gender flex f-y-c f-x-c" @click="gender = 'female'">
          <img
            class="icon"
            v-if="gender == 'female'"
            src="../../assets/Header_Input_check.png"
            alt=""
          />
          <img
            class="icon"
            v-if="gender != 'female'"
            src="../../assets/Header_Input_no_check.png"
            alt=""
          />
          女性
        </div>
      </div>

      <!-- 出生日期 -->
      <div class="input_box flex f-y-c">
        <div class="name">出生日期</div>
        <div
          @click="isShowCalendar = true"
          class="name_value flex f-y-c"
          :class="{ hasValue: date.Alldate }"
        >
          {{ date.Alldate ? date.Alldate : '请选择出生日期' }}
        </div>
        <Calendar
          v-if="isShowCalendar"
          ref="showLunar"
          :birdate="{
            y: date.y,
            m: date.m,
            d: date.d,
            h: date.h,
            hour: date.hour,
          }"
          @closedate="handleCloseCalendar"
        />
      </div>
    </div>

    <!-- 条款 -->
    <div class="terms_box flex f-y-c f-x-c">
      <img
        class="check_icon"
        @click="checkTerms = false"
        v-if="checkTerms"
        src="../../assets/Home_Input_check_terms.png"
        alt=""
      />
      <img
        class="check_icon"
        @click="checkTerms = true"
        v-if="!checkTerms"
        src="../../assets/Home_Input_not_check_terms.png"
        alt=""
      />
      查看
      <a class="flex" href="/unity/index.html#/agreement">《用户协议》</a>
      和
      <a class="flex" href="/unity/index.html#/agreement">《隐私协议》</a>
    </div>

    <!-- 下单按钮 -->
    <img
      class="to_pay_button flex"
      @click="handleSubmit"
      src="https://s.xymlcs.com/hycs/img/button.png"
      alt=""
    />
    <!-- 查看订单按钮 -->
    <div class="to_order_link flex f-x-c" @click="toOrderQuery">查看我的订单</div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import CommonTools from '../../utils/CommonTools.js';
import Calendar from '../Calendar/index.vue';
export default {
  name: 'Home-Input',
  components: {
    Calendar,
  },
  props: {
    checkTerms: {
      default: true,
    },
  },
  data: function () {
    return {
      gender: 'male',
      date: {},
      isShowCalendar: false,
      username: '',
    };
  },
  methods: {
    toOrderQuery() {
      window.location.href = '/unity/index.html#/home';
    },
    // 关闭日历弹窗 保存已选数据
    handleCloseCalendar(date) {
      this.isShowCalendar = false;
      if (date) this.date = date;
    },
    // 提交用户信息
    async handleSubmit() {
      let toastTips = null;
      // if (!this.checkTerms) toastTips = '请勾选协议';
      if (!this.date.birthday) toastTips = '请选择出生日期';
      if (!this.username.length > 0) toastTips = '请输入姓名';

      if (this.username.length > 4) {
        toastTips = '姓名不能超过4个字';
      }

      if (this.username.length < 2) {
        toastTips = '姓名不能少于两个字';
      }

      var reg = new RegExp(/^[\u4E00-\u9FA5]+$/, 'g');
      if (!reg.test(this.username)) {
        toastTips = '姓名必须为汉字';
      }

      if (toastTips) {
        // 如果没有输入信息 则自动定位到姓名
        if (!this.username.length > 0) {
          this.$refs.input.focus();
        }
        Toast({
          message: toastTips,
          position: 'center',
          duration: 3000,
        });
        return;
      }
      this.$store.commit('setLoading', true);
      await this.$store.dispatch('postOrder', {
        data: {
          gender: this.gender,
          channel: CommonTools.getPChan(),
          username: this.username,
          birthday: Number(this.date.birthday),
          hour: this.date.h,
          params: CommonTools.getFormattedParams(),
          event: CommonTools.getEventCode(),
          trace: CommonTools.getTraceCode(),
          url: location.href,
        },
        cb: (oid) => {
          this.$router.push({ path: '/book', query: { oid } });
        },
      });
    },
  },
};
</script>

<style lang="less">
.Input_component {
  width: 700px;
  margin: 0 auto;
  .all_input_box {
    width: 700px;
    height: 305px;
    box-sizing: border-box;
    padding: 13px 37px 47px;
    background: url('../../assets/Header_Input_bg.png') center/contain no-repeat;
    .input_box {
      font-size: 30px;
      line-height: 30px;
      //overflow: hidden;
      &:nth-child(1) {
        padding: 25px 0 13.5px;
      }
      &:nth-child(2) {
        padding: 39px 0 18px;
      }
      &:nth-child(3) {
        padding: 31px 0 18px;
      }
      .input {
        width: 540px;
        outline-style: none;
        border: 0px;
        height: 32px;
        font-size: 30px;
        line-height: 30px;
        padding: 0;
        color: #941b1e;
        background: transparent;
        &::placeholder {
          color: #c67f81;
        }
      }

      .name {
        margin: 0 42px 0 0px;
        flex-shrink: 0;
        font-size: 30px;
        color: #941b1e;
        line-height: 30px;
      }
      .name_value {
        width: 540px;
        font-size: 30px;
        color: #c67f81;
        line-height: 30px;
        &.hasValue {
          color: #941b1e;
        }
      }
      .gender {
        font-size: 30px;
        color: #941b1e;
        line-height: 30px;
        margin-right: 58px;
        .icon {
          width: 30px;
          height: 30px;
          margin-right: 8px;
        }
      }
    }
  }
  .terms_box {
    margin: 24px auto 47px;
    font-size: 20px;
    color: #f6ac8a;
    line-height: 30px;
    .check_icon {
      width: 24px;
      height: 24px;
      margin-right: 5px;
    }
    > a {
      color: #f6ac8a;
      text-decoration: none;
    }
  }
  .to_pay_button {
    width: 636px;
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
  .to_order_link {
    font-size: 24px;
    text-decoration: underline;
    color: #ffce6e;
    line-height: 24px;
    margin: 52px 0 74px;
  }
}
</style>

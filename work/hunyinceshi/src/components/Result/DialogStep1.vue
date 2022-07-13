<template>
  <div class="DialogStep1_component">
    <div class="content_box">
      <div class="title">保存结果</div>
      <div class="content">
        请输入手机号保存您的付费结果，若不小心退出结果页面，可通过短信下发的链接再次查看
      </div>
      <input
        v-model="phone"
        placeholder="输入手机号码保存"
        class="number_input flex f-x-c"
        @blur="scrollToTop"
        type="text"
      />
      <div class="button_save" @click="() => handleSaveMobile(phone)">保存并查看结果</div>
      <div class="button_check" @click="() => handleStep(2)">放弃保存直接查看</div>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';
export default {
  name: 'Dialog-Step1',
  data: function () {
    return { phone: '' };
  },
  props: {
    handleStep: {
      default: () => {},
      type: Function,
    },
    handleSaveMobile: {
      default: () => {},
      type: Function,
    },
  },
  methods: {
    scrollToTop() {
      smoothscroll.polyfill();
      document
        .getElementsByTagName('body')[0]
        .scrollIntoView({ block: 'start', inline: 'center', behavior: 'smooth' });
    },
  },
  mounted() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  },
};
</script>

<style lang="less" scoped>
.DialogStep1_component {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  .content_box {
    width: 640px;
    height: 600px;
    font-size: 32px;
    box-sizing: border-box;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 32px;
    .title {
      text-align: center;
      color: #333;
      font-weight: 700;
      font-size: 38px;
      margin: 52px 0 0 0;
    }
    .content {
      color: #333;
      font-size: 28px;
      margin: 32px 52px 40px;
    }
    .number_input {
      width: 536px;
      border-radius: 48px;
      color: #323233;
      font-size: 26px;
      margin: 0 auto;
      outline-style: none;
      border: 1px solid #797979;
      padding: 19px 28px;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 30px;
    }
    .button_save {
      width: 536px;
      border-radius: 48px;
      color: #fff;
      font-size: 26px;
      margin: 0 auto;
      outline-style: none;
      background: #f2595e;
      padding: 19px 28px;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 30px;
    }
    .button_check {
      font-size: 24px;
      text-decoration: underline;
      text-align: center;
      margin-top: 36px;
      cursor: pointer;
      color: #999;
    }
  }
}
</style>

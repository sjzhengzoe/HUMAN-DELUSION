<template>
  <div class="DialogStep1_component">
    <div class="content_box">
      <div class="title">保存结果</div>
      <div class="content">
        请输入手机号保存您的付费结果，若不小心退出结果页面，可通过短信下发的链接再次查看
      </div>
      <input v-model="phone" class="number_input" type="text" />
      <div class="button_save" @click="() => handleSaveMobile(phone)">保存并查看结果</div>
      <div class="button_check" @click="() => handleStep(2)">放弃保存直接查看</div>
    </div>
  </div>
</template>

<script>
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
  methods: {},
  mounted() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  },
};
</script>

<style lang="less">
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
    padding: 26px;
    box-sizing: border-box;
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #fff;
    border-radius: 30px;
    .title {
      text-align: center;
      color: #333;
      font-weight: 700;
      font-size: 48px;
      margin: 26px;
    }
    .content {
      font-size: 30px;
      margin-bottom: 26px;
    }
    .number_input {
      width: 280px;
      border-radius: 1px solid #797979;
      color: #323233;
    }
    .button_save,
    .button_check {
      font-size: 28px;
    }
  }
}
</style>

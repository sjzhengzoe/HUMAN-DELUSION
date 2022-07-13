<template>
  <div class="DialogStep2_component">
    <div class="content_box">
      <div class="title">温馨提示</div>
      <div class="content">您的结果尚未保存，很可能造成丢失及无法查看，确定要放弃保存吗？</div>
      <div class="flex f-y-c f-sb box_group">
        <div class="button_cancel" @click="() => handleStep(0)">残忍放弃</div>
        <div class="button_return" @click="() => handleStep(1)">返回保存</div>
      </div>
      <div class="tips">98%的用户选择保存</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dialog-Step2',
  props: {
    handleStep: {
      default: () => {},
      type: Function,
    },
  },
  mounted() {
    document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  },
};
</script>

<style lang="less" scoped>
.DialogStep2_component {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  .content_box {
    width: 640px;
    height: 424px;
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
    .box_group {
      margin: 0 53px;
    }
    .button_cancel {
      width: 240px;
      border-radius: 48px;
      color: #f2595e;
      font-size: 26px;
      outline-style: none;
      background: #fff;
      border: 1px solid #f2595e;
      padding: 19px 28px;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 30px;
    }
    .button_return {
      width: 240px;
      border-radius: 48px;
      color: #fff;
      font-size: 26px;
      outline-style: none;
      background: #f2595e;
      padding: 19px 28px;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 30px;
    }
    .tips {
      color: #f2595e;
      font-size: 20px;
      margin-top: 16px;
      display: flex;
      justify-content: flex-end;
      margin: 0 53px;
    }
  }
}
</style>

<template>
  <div class="DialogStep1_component">
    <div class="content_box">
      <div class="title">温馨提示</div>
      <div class="content">您的结果尚未保存，很可能造成丢失及无法查看，确定要放弃保存吗？</div>
      <div class="button_save" @click="() => handleStep(0)">残忍放弃</div>
      <div class="button_check" @click="() => handleStep(1)">返回保存</div>
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
  }
}
</style>

<template>
  <div class="Header_component flex-y f-y-c">
    <div class="header_text_box flex-y f-x-c">
      <div v-show="baseData">亲爱的{{ baseData.name }}：</div>
      <div>
        通过分析你的<span>个人婚姻</span>，看你一生婚姻，<span>发展情况及 婚姻幸福程度</span> 。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header-component',
  computed: {
    baseData() {
      return this.$store.state.baseData;
    },
  },
};
</script>

<style lang="less" scoped>
.Header_component {
  width: 750px;
  height: 566px;
  padding-bottom: 19px;
  margin-bottom: 49px;
  position: relative;
  z-index: 0;
  // background: url('https://xzg-1305747483.file.myqcloud.com/xzg/hyone/images/index_top.jpg') top/cover no-repeat
  background: url('../../assets/Pay_Analyze_banner.jpg') top/cover no-repeat;
  background-size: 100% auto;
  .header_text_box {
    width: 700px;
    padding: 0 50px;
    box-sizing: border-box;
    height: 212px;
    background: url('../../assets/Pay_Header_bg.png') center/contain no-repeat;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    font-size: 28px;
    color: #333333;
    line-height: 48px;
    span {
      color: #941b1e;
    }
  }
}
</style>

<template>
  <div class="ResultAnother_components common_banner_bg" v-if="resultData.hua_xiang">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultAnother_title.png" alt="" />
    <div class="content_box common_banner_middle flex-y f-y-c">
      <img class="head" src="../assets/ResultAnother_head.png" alt="" />
      <div class="sub_title flex f-y-c f-x-c">五官分析</div>
      <div class="text_box">
        <div class="text">脸型：{{ resultData.hua_xiang.content.face }}</div>
        <div class="text">眉毛：{{ resultData.hua_xiang.content.brow }}</div>
        <div class="text">眼睛：{{ resultData.hua_xiang.content.eye }}</div>
        <div class="text">嘴巴：{{ resultData.hua_xiang.content.mouth }}</div>
        <div class="text">鼻子：{{ resultData.hua_xiang.content.nose }}</div>
      </div>
      <div class="sub_title flex f-y-c f-x-c">温馨提示</div>
      <div class="text_box">
        1.真爱另一半画像以素颜为标准，化妆容颜不属于 本分析的范围。<br />
        2.为更好辨认面部特征，本报告真爱另一半画像五 官特征作突显展示，并不以美学标准作取悦用户结
        果，视觉上或略浮夸、突兀，但请以客观心态审视 分析。<br />
        3.因各地风俗、餐饮习惯和成长环境等客观影响， 五官评价或存在认同差异，从大量客户预测真爱另
        一半画像案例总结，符合以上画像70%特征，即可 视为命中真爱另一半。
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Another',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultAnother_components {
  .content_box {
    padding-top: 27px;
    .head {
      width: 272px;
      height: 325px;
      margin-bottom: 39px;
    }
    .sub_title {
      width: 334px;
      height: 68px;
      margin: 46px 0 38px;
      border-radius: 34px;
      background: linear-gradient(0deg, #c13b5b, #f3868d);
      font-size: 40px;
      font-weight: bold;
      color: #ffffff;
    }
    .text_box {
      width: 627px;
      line-height: 40px;
      font-size: 28px;
      color: #333333;
    }
    .text {
      margin-bottom: 5px;
    }
  }
}
</style>

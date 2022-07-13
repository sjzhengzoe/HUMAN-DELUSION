<template>
  <div class="Another_component common_banner_bg" v-if="resultData.ling_yi_ban">
    <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
    <img class="common_title" src="../../assets/bingo_bg.png" alt="" />
    <div class="content_box common_banner_middle result flex-y f-y-c">
      <div class="text_box">
        <div class="text" v-for="(item,index) in resultData.ling_yi_ban.content" :key="index">{{ item }}</div>
          <div class="text">
              <p><span>温馨提示:</span>感情婚姻分析以客观分析为主，因性格、外貌等特征受当地人文化氛围与体质成长环境影响较大，即使同年同日生的两个人，他们性格大致相似，生于东北地区体质比西南地区人体质高大，一线城市外来人口宽泛性格差异化较大，而内陆县城城市的人群受原生家庭影响下性格较为内敛，更精确对象特征推算需要结合择偶区域当地风俗民俗等多因素分析，因此本报告对象特征分析结果为个人先天潜意识里的择偶倾向，需要各位用户结合自身出生地、择偶区域的异性平均特征作对比参考。</p>
          </div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
  name: 'Bingo',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.Another_component {
  .content_box {
    padding-top: 27px;
    .head {
      width: 272px;
      //height: 325px;
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
        line-height: 50px;
        font-size: 28px;
        text-indent: 2em;
    }
      .text {
          span {
              color: #666;
              font-weight: 900;
              margin-right: 10px;
          }
      }
  }
}
</style>

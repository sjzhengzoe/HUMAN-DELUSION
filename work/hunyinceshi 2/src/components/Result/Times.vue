<template>
  <div class="Times_component common_banner_bg" v-if="resultData.ji_duan_hun_yin">
    <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
    <img class="common_title" src="../../assets/ResultTimes_title.png" alt="" />
    <div class="content_box common_banner_middle result flex-y f-y-c">
      <div class="content">
        <div v-for="(item, idx) in resultData.ji_duan_hun_yin.content" :key="idx">
          {{ item }}<br />
        </div>
          <div>
              <p>
                  <span>温馨提示:</span>
                  几段姻缘为传统媒婆看婚姻的学术，在古代男女婚姻匹配中非贵族的百姓并无严格以结婚证、离婚证等婚姻象征作为婚姻次数的计算依据，且古人的成婚年龄多数介乎12-25岁之间，婚期相对现代社会较早；而现代社会，一线城市男女婚恋观念受西方文化影响较为开放，热衷婚前同居、晚婚不领证，再看内陆县城男女婚恋观较为传统保守，家庭观念重多为相亲少恋早婚；因此本报告对婚姻次数的推算，受限于各地婚恋观不同而作了分类估算，分析结果基于传统媒婆学术推算得出，因此会将婚前婚后一段深刻感情、复合、同居等的男女关系，视作为一段或多段感情婚姻。
              </p>
          </div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Times-component',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.Times_component {
  margin-top: 120px;
  .content_box {
    padding-top: 27px;
    width: 690px;
  }
  .content {
    width: 627px;
    line-height: 40px;
      line-height: 50px;
      font-size: 28px;
      text-indent: 2em;
    color: #333333;
      span  {
          font-weight: 900;
      }
  }
}
</style>

<template>
  <div class="Name_component common_banner_bg" v-if="resultData">
    <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
    <img class="common_title" src="../../assets/ResultName_title.png" alt="" />
    <div class="content_box common_banner_middle result flex-y f-y-c">
      <div class="name_box flex f-y-c" v-if="resultData.user">
        <div v-for="(item, idx) in resultData.user.jie_xi" :key="idx">
          <div class="name_word flex f-x-c f-y-c">{{ item.jianti }}</div>
          <div class="type">[{{ item.wuxing }}]</div>
        </div>
      </div>
      <div class="type_box flex f-y-c">
        <div>吉凶评定：</div>
        <div class="type">{{ resultData.ji_xiong }}</div>
      </div>
      <div class="score_box">评分：{{ resultData.score }}</div>
      <div class="sub_title flex f-x-c f-y-c">用字评定</div>
      <div v-if="resultData.user">
        <div class="word_box" v-for="(item, idx) in resultData.user.jie_xi" :key="idx">
          <!-- <div class="word">【{{ item.jianti }}】【{{ item.pinyin }}】</div> -->
          <!-- <div class="bold">汉字解析</div> -->
          <div class="content" v-html="item.jieshi" />
          <!-- <div class="content">
          1.排列，摆设：～列。～兵。<br />
          2.述说：～述。～情。详～。～诉。～说。<br />
          3.旧的，时间久的：～旧。～腐。～醋。推～出新。 ～～相因。～迹。～皮。<br />
          4.中国周代诸侯国名，在今河南省淮阳县一带。 <br />
          5.中国朝代名，南朝最末的王朝。 6.姓。
        </div> -->
        </div>
      </div>
      <div class="sub_title flex f-x-c f-y-c">字音评定</div>
      <div class="result_word_box" v-if="resultData.user">
        {{ resultData.user.ping_ding }}
      </div>
    </div>
    <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Name-component',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.Name_component {
  margin-bottom: 120px;
  .content_box {
    padding-top: 61px;
    .name_box {
      > div {
        margin: 0 20px;
      }
      .name_word {
        width: 112px;
        height: 112px;
        text-align: center;
        font-weight: bold;
        font-size: 60px;
        color: #0e0e0e;
        background: url('../../assets/bg_words.jpg') center/contain no-repeat;
      }
      .type {
        color: #c43535;
        text-align: center;
        font-size: 30px;
        text-align: center;
        margin-bottom: 10px;
      }
    }
    .type_box {
      font-size: 28px;
      margin-top: 20px;
      .type {
        background: #e83940;
        padding: 4px 10px;
        color: #fff;
        font-size: 24px;
        border-radius: 32px;
      }
    }
    .score_box {
      margin-top: 20px;
      font-size: 28px;
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
    .word_box {
      width: 627px;
      font-size: 28px;
      margin-bottom: 40px;
      .content {
          line-height: 50px;
          font-size: 28px;
        color: #333333;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
    .result_word_box {
      width: 627px;
        line-height: 50px;
        font-size: 28px;
    }
  }
}
</style>

<template>
  <div class="ResultName_components common_banner_bg">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultName_title.png" alt="" />
    <div class="content_box common_banner_middle flex-y f-y-c">
      <div class="sub_title flex f-x-c f-y-c">用字评定</div>
      <div class="word_box">
        <div class="word">【陈】【chén】</div>
        <div class="bold">汉字解析</div>
        <div class="content">
          1.排列，摆设：～列。～兵。<br />
          2.述说：～述。～情。详～。～诉。～说。<br />
          3.旧的，时间久的：～旧。～腐。～醋。推～出新。 ～～相因。～迹。～皮。<br />
          4.中国周代诸侯国名，在今河南省淮阳县一带。 <br />
          5.中国朝代名，南朝最末的王朝。 6.姓。
        </div>
      </div>
      <div class="sub_title flex f-x-c f-y-c">字音评定</div>
      <div class="word_box">
        你的名字可能不太理想，要想赢得成功，必须比别 人付出更多的艰辛和汗水。如果有条件，改个名字
        也未尝不可<span class="bold">（或者联系客服找专业大师为你解惑）</span>
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Name',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultName_components {
  margin-bottom: 120px;
  .content_box {
    padding-top: 27px;
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
      line-height: 40px;
      .bold {
        font-weight: 900;
      }
      .content {
        font-size: 28px;
        color: #333333;
      }
    }
  }
}
</style>

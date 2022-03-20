<template>
  <div class="ResultMarriage_components common_banner_bg" v-if="resultData.xian_tian_hun_yin">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultMarriage_title.png" alt="" />
    <div class="content_box common_banner_middle flex-y f-y-c">
      <div v-for="(item, idx) in resultData.xian_tian_hun_yin.content" :key="idx">
        {{ item }}<br />
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Marriage',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultMarriage_components {
  margin-bottom: 120px;
  .content_box {
    width: 100%;
    box-sizing: border-box;
    padding: 27px 41px 0;
    font-size: 32px;
    color: #333333;
  }
}
</style>

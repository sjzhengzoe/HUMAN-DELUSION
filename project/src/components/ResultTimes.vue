<template>
  <div class="ResultTimes_components common_banner_bg" v-if="resultData.ji_duan_hun_yin">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultTimes_title.png" alt="" />
    <div class="content_box common_banner_middle flex-y f-y-c">
      <div class="content">
        <div v-for="(item, idx) in resultData.ji_duan_hun_yin.content" :key="idx">
          {{ item }}<br />
        </div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Times',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultTimes_components {
  margin-top: 120px;
  .content_box {
    padding-top: 27px;
    width: 690px;
  }
  .content {
    width: 627px;
    line-height: 40px;
    font-size: 28px;
    color: #333333;
  }
}
</style>

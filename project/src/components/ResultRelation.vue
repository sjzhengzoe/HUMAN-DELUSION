<template>
  <div class="ResultRelation_components common_banner_bg" v-if="resultData.gai_shan">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultRelation_title.png" alt="" />
    <div class="common_banner_middle flex-y f-y-c">
      <div class="common_content_box">
        <div>{{ resultData.gai_shan.content[0] }}</div>
        <div class="common_sub_title flex f-y-c f-x-c">忠告一</div>
        <div>{{ resultData.gai_shan.content[1] }}</div>
        <div class="common_sub_title flex f-y-c f-x-c">忠告二</div>
        <div>{{ resultData.gai_shan.content[2] }}</div>
        <div class="common_sub_title flex f-y-c f-x-c">忠告三</div>
        <div>{{ resultData.gai_shan.content[3] }}</div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Relation',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultRelation_components {
  margin-top: 120px;
}
</style>

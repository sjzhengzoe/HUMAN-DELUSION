<template>
  <div class="ResultTeach_components common_banner_bg" v-if="resultData.xuan_ze">
    <img class="common_banner_top" src="../assets/banner_bg_top.png" alt="" />
    <img class="common_title" src="../assets/ResultTeach_title.png" alt="" />
    <div class="common_banner_middle flex-y f-y-c">
      <div class="common_content_box">
        <div class="common_sub_title flex f-y-c f-x-c">条件一</div>
        <div class="common_bold">{{ resultData.xuan_ze.content[0].title }}</div>
        <div>
          <div v-for="(item, idx) in resultData.xuan_ze.content[0].contents" :key="idx">
            {{ item }}
          </div>
        </div>
        <div class="common_sub_title flex f-y-c f-x-c">条件二</div>
        <div class="common_bold">{{ resultData.xuan_ze.content[1].title }}</div>
        <div>
          <div v-for="(item, idx) in resultData.xuan_ze.content[1].contents" :key="idx">
            {{ item }}
          </div>
        </div>
        <div class="common_sub_title flex f-y-c f-x-c">条件三</div>
        <div class="common_bold">{{ resultData.xuan_ze.content[2].title }}</div>
        <div>
          <div v-for="(item, idx) in resultData.xuan_ze.content[2].contents" :key="idx">
            {{ item }}
          </div>
        </div>
        <div class="common_sub_title flex f-y-c f-x-c">条件四</div>
        <div class="common_bold">{{ resultData.xuan_ze.content[3].title }}</div>
        <div>
          <div v-for="(item, idx) in resultData.xuan_ze.content[3].contents" :key="idx">
            {{ item }}
          </div>
        </div>
      </div>
    </div>
    <img class="common_banner_bottom" src="../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Result-Teach',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultTeach_components {
  margin-top: 120px;
}
</style>

<template>
  <div class="Teach_component common_banner_bg" v-if="resultData.xuan_ze">
    <img class="common_banner_top" src="../../assets/banner_bg_bottom.png" alt="" />
    <img class="common_title" src="../../assets/ResultTeach_title.png" alt="" />
    <div class="common_banner_middle result flex-y f-y-c">
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
    <img class="common_banner_bottom" src="../../assets/banner_bg_bottom.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'Teach_component',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.Teach_component {
  margin-top: 120px;
    div {
        line-height: 50px;
        font-size: 28px;
        text-indent: 2em;
    }
    .common_sub_title {
        text-indent: 0;
    }
    .common_bold {
        text-indent: 0;
        margin-bottom: 10px;
    }
}
</style>

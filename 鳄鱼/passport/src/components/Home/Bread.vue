<template>
  <div class="Bread_component">
    <div class="limit flex f-y-c f-x-c">
      <span class="text" :class="{ choose: step == 1 }">Choose the country</span>
      <span class="chart">></span>
      <span class="text" :class="{ choose: step == 2 }">Upload photos </span>
      <span class="chart">></span>
      <span class="text" :class="{ choose: step == 3 }">Confirm and pay</span>
      <span class="chart">></span>
      <span class="text" :class="{ choose: step == 4 }">Download the photo</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bread-component',
  props: {
    step: String || Number,
  },
  data: function () {
    return {};
  },
};
</script>

<style lang="less" scoped>
.Bread_component {
  width: 100%;
  background: #305eb4;
  .limit {
    width: 1422px;
    height: 49px;
    margin: 0 auto;
    .chart {
      margin: 0 60px;
    }
    .text,
    .chart {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 22px;
    }
    .text.choose {
      font-weight: 900;
    }
  }
}
</style>

<template>
  <div class="ThreeSecondsBanner_component">
    <div class="bg flex-y f-y-c">
      <div class="title">
        <div>Passport and Visa Photos</div>
        <div>Online In 3 Seconds</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeSecondsBanner-component',
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.ThreeSecondsBanner_component {
  width: 100%;
  background-color: #f9f9fa;
  .bg {
    width: 100%;
    height: 481px;
    margin: 0 auto;
    background: url('../../assets/pc/choose_country_bg.png') center/cover no-repeat;
  }

  .title {
    width: 633px;
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 70px;
    margin-top: 139px;
    margin-left: -400px;
  }
}
</style>

<template>
  <div class="ResultBottom_components flex f-y-c f-sb">
    <div class="flex f-y-c">
      <div class="item_box flex-y f-y-c f-x-c">
        <img class="icon" src="../assets/Result_call.png" alt="" />
        查询
      </div>
      <div class="item_box flex-y f-y-c f-x-c">
        <img class="icon" src="../assets/Result_fly.png" alt="" />
        再测一次
      </div>
    </div>
    <img class="img" src="../assets/ResultChange_img.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'ResultBottom',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
};
</script>

<style lang="less" scoped>
.ResultBottom_components {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 108px;
  padding: 0 25px 0 40px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #c13b5b, #f3868d);
  .icon {
    height: 30px;
    margin-bottom: 16px;
  }
  .item_box {
    font-size: 30px;
    line-height: 30px;
    color: #ffffff;
    &:first-of-type {
      margin-right: 48px;
    }
  }
  .img {
    width: 420px;
    height: 89px;

    transform: scale(0.8);
    animation: button 2s linear infinite;
    @keyframes button {
      0% {
        transform: scale(0.8);
      }
      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(0.8);
      }
    }
  }
}
</style>

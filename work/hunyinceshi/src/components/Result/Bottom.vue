<template>
  <div class="ResultBottom_components flex f-y-c f-sb">
    <div class="flex f-y-c">
      <div class="item_box flex-y f-y-c f-x-c" @click="toOrderQuery">
        <img class="icon" src="../../assets/Result_call.png" alt="" />
        查询
      </div>
      <div class="item_box flex-y f-y-c f-x-c" @click="repurchase">
        <img class="icon" src="../../assets/Result_fly.png" alt="" />
        再测一次
      </div>
    </div>
    <img class="img" src="../../assets/ResultChange_img.png" alt="" @click="toQiMing"/>
  </div>
</template>

<script>
import CommonTools from "@/utils/CommonTools";

export default {
  name: 'ResultBottom',
  computed: {
    resultData() {
      return this.$store.state.resultData;
    },
  },
    methods: {
      toOrderQuery() {
          window.location.href = '/unity/index.html#/home'
      },
        toQiMing() {
          window.location.href ='https://t.yushics.com/bb/';
        },
        repurchase() {
          this.$router.push({
              path: '/',
              query: {
                  eventCode: CommonTools.getEventCode(),
                  traceCode: CommonTools.getTraceCode(),
                  PChan: CommonTools.getPChan(),
              }
          })
        }
    }
};
</script>

<style lang="less" scoped>
.ResultBottom_components {
  position: fixed;
  bottom: 0;
  width: 750px;
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

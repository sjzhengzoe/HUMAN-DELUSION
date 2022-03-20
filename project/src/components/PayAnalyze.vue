<template>
  <div class="PayAnalyze_components flex-y f-y-c" :class="loading ? '' : 'moving'">
    <img class="title" src="../assets/PayAnalyze_title.png" alt="" />
    <div class="table_box">
      <div class="name flex f-x-c">王华</div>
      <div class="flex f-y-start">
        <div>
          <div class="flex-y left_box">
            <div class="red one flex f-x-c f-y-c">乾</div>
            <div class="red two flex f-x-c f-y-c">造</div>
            <div class="date">一 九 九 零 年 五 月 初 九 丑 时</div>
          </div>
          <img class="log" src="../assets/Pay_log.png" alt="" />
        </div>
        <div>
          <div class="flex f-y-start">
            <div class="line_box">
              <div class="line1 index1">年柱</div>
              <div class="line2 index1">七杀</div>
              <div class="line3 index1 flex f-y-c f-x-c">【甲寅】</div>
              <div class="line4 index1">长生</div>
              <div class="line5 index1">国印</div>
            </div>
            <div class="line_box">
              <div class="line1">年柱</div>
              <div class="line2 index2">七杀</div>
              <div class="line3 index2 flex f-y-c f-x-c">【甲寅】</div>
              <div class="line4 index2">长生</div>
              <div class="line5 index2">国印</div>
            </div>
            <div class="line_box">
              <div class="line1 index3">年柱</div>
              <div class="line2 index3">七杀</div>
              <div class="line3 index3 flex f-y-c f-x-c">【甲寅】</div>
              <div class="line4 index3">长生</div>
              <div class="line5 index3">国印</div>
            </div>
            <div class="line_box">
              <div class="line1 index4">年柱</div>
              <div class="line2 index4">七杀</div>
              <div class="line3 index4 flex f-y-c f-x-c">【甲寅】</div>
              <div class="line4 index4">长生</div>
              <div class="line5 index4">国印</div>
            </div>
          </div>
          <div class="long_text">
            这是一段很长的文字，文字，文字，文字，文字，文字文字，文字，文字文字，文字，文字文字，文字，文字文字，文字，文字文字，文字，文字
          </div>
          <div class="year_box flex f-y-c">
            <div class="year index1">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index2">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index3">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index4">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index5">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index6">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index7">
              <div>2009</div>
              <div>辛未</div>
            </div>
            <div class="year index8">
              <div>2009</div>
              <div>辛未</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pay-Analyze',
  computed: {
    loading() {
      return this.$store.state.resourceLoading || this.$store.state.apiLoading;
    },
  },
  watch: {
    loading(value) {
      if (!value) {
        setTimeout(() => {
          document
            .getElementsByClassName('payLock')[0]
            .scrollIntoView({ block: 'start', inline: 'center', behavior: 'smooth' });
        }, 13000);
      }
    },
  },
};
</script>

<style lang="less" scoped>
@keyframes bigAndNormal {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes bigAndNormal2 {
  0% {
    opacity: 1;
    transform: scale(4);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes opacityShow {
  0% {
    width: 0;
    opacity: 0;
  }
  100% {
    width: 60px;
    opacity: 1;
  }
}
@keyframes opacityShow2 {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 48px;
    opacity: 1;
  }
}
@keyframes opacityShow3 {
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    width: 544px;
    opacity: 1;
  }
}
.PayAnalyze_components {
  width: 100%;
  margin-bottom: 60px;
  background: url('../assets/PayAnalyze_bg.png') top no-repeat;
  background-size: 100% auto;
  &.moving {
    .table_box {
      .name {
        opacity: 1;
      }
      .left_box {
        opacity: 1;
        transform: scale(1);
      }
      .line_box {
        .line2.index1 {
          animation: 0.3s linear 3.2s opacityShow forwards;
        }
        .line3.index1 {
          animation: 0.3s linear 2s bigAndNormal forwards;
        }
        .line4.index1 {
          animation: 0.3s linear 4.4s opacityShow forwards;
        }
        .line5.index1 {
          animation: 0.3s linear 5s opacityShow forwards;
        }

        .line2.index2 {
          animation: 0.3s linear 3.5s opacityShow forwards;
        }
        .line3.index2 {
          animation: 0.3s linear 2.3s bigAndNormal forwards;
        }
        .line4.index2 {
          animation: 0.3s linear 4.7s opacityShow forwards;
        }
        .line5.index2 {
          animation: 0.3s linear 5.3s opacityShow forwards;
        }

        .line2.index3 {
          animation: 0.3s linear 3.8s opacityShow forwards;
        }
        .line3.index3 {
          animation: 0.3s linear 2.6s bigAndNormal forwards;
        }
        .line4.index3 {
          animation: 0.3s linear 5s opacityShow forwards;
        }
        .line5.index3 {
          animation: 0.3s linear 5.6s opacityShow forwards;
        }

        .line2.index4 {
          animation: 0.3s linear 4.1s opacityShow forwards;
        }
        .line3.index4 {
          animation: 0.3s linear 2.9s bigAndNormal forwards;
        }
        .line4.index4 {
          animation: 0.3s linear 5.3s opacityShow forwards;
        }
        .line5.index4 {
          animation: 0.3s linear 5.9s opacityShow forwards;
        }
      }

      .long_text {
        animation: 4s linear 7.6s opacityShow3 forwards;
      }

      .year_box {
        .year.index1 {
          animation: 0.3s linear 5.5s opacityShow2 forwards;
        }

        .year.index2 {
          animation: 0.3s linear 5.8s opacityShow2 forwards;
        }

        .year.index3 {
          animation: 0.3s linear 6.1s opacityShow2 forwards;
        }

        .year.index4 {
          animation: 0.3s linear 6.4s opacityShow2 forwards;
        }
        .year.index5 {
          animation: 0.3s linear 6.7s opacityShow2 forwards;
        }

        .year.index6 {
          animation: 0.3s linear 7s opacityShow2 forwards;
        }

        .year.index7 {
          animation: 0.3s linear 7.3s opacityShow2 forwards;
        }

        .year.index8 {
          animation: 0.3s linear 7.6s opacityShow2 forwards;
        }
      }
      .log {
        animation: 0.2s linear 11.6s bigAndNormal2 forwards;
      }
    }
  }
  .title {
    width: 652px;
    height: 84px;
    margin: 58px 0 33px;
  }
  .table_box {
    width: 709px;
    height: 780px;
    background: url('../assets/PayAnalyze_table.png') center/contain no-repeat;
    .name {
      opacity: 0;
      font-size: 32px;
      line-height: 32px;
      font-weight: bold;
      color: #df596b;
      margin: 45px 0 30px;
      transition: all 2s;
    }
    .left_box {
      opacity: 0;
      transform: scale(0.6);
      transition: opacity 1s 1s, transform 1s 1s;
    }
    .red {
      font-size: 36px;
      color: #ffffff;
      line-height: 72px;
      width: 60px;
      height: 60px;
      background: #df596b;
      border-radius: 50%;
      margin-left: 54px;
      &.one {
        margin-bottom: 12px;
      }
      &.two {
        margin-bottom: 12px;
      }
    }
    .date {
      width: fit-content;
      writing-mode: tb-rl;
      font-size: 28px;
      color: #666666;
      line-height: 34px;
      margin-left: 70px;
      margin-bottom: 24px;
    }
    .log {
      width: 80px;
      height: 80px;
      margin-left: 43px;
      opacity: 0;
    }
    .line_box {
      margin-left: 36px;
      .line1 {
        font-size: 28px;
        font-weight: bold;
        color: #7d334c;
        line-height: 34px;
        width: 100px;
        margin-bottom: 20px;
        text-align: center;
      }
      .line2 {
        margin: 0 20px;
        overflow: hidden;
        margin-bottom: 8px;
        opacity: 0;
        white-space: nowrap;
        text-align: left;
      }
      .line2,
      .line4,
      .line5 {
        font-size: 28px;
        color: #666666;
        line-height: 36px;
      }
      .line3 {
        opacity: 0;
        width: 100px;
        font-size: 28px;
        font-weight: bold;
        color: #df596b;
        line-height: 36px;
        writing-mode: tb-rl;
        margin-bottom: 6px;
      }
      .line4 {
        margin: 0 20px;
        overflow: hidden;
        opacity: 0;
        white-space: nowrap;
        text-align: left;
        opacity: 0;
        margin-bottom: 24px;
      }
      .line5 {
        margin: 0 20px;
        overflow: hidden;
        opacity: 0;
        white-space: nowrap;
        text-align: left;
        opacity: 0;
        margin-bottom: 2px;
      }
    }
    .long_text {
      width: 544px;
      height: 208px;
      font-size: 28px;
      overflow: hidden;
      color: #df596b;
      line-height: 40px;
      writing-mode: vertical-lr;
      direction: rtl;
      margin: 30px 0 0 24px;
      opacity: 0;
    }
  }
  .year_box {
    width: 100px;
    font-size: 12px;
    line-height: 30px;
    color: #666666;
    margin-top: 26px;
    text-align: center;
    transform: scale(0.8);
    margin-left: 14px;
    .year {
      width: 60px;
      height: 48px;
      margin: 0 26px 4px 0;
      opacity: 0;
    }
  }
}
</style>

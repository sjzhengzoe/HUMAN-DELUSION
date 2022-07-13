<template>
  <div class="PayAnalyze_component flex-y f-y-c" :class="loading ? '' : 'moving'">
    <img class="title" src="../../assets/PayAnalyze_title.png" alt="" />
    <div class="table_box" v-if="baseData">
      <div class="name flex f-x-c">{{ baseData.name }}</div>
      <div class="flex f-y-start">
        <div>
          <div class="flex-y left_box">
            <div class="red one flex f-x-c f-y-c">{{ baseData.lunar_name[0] }}</div>
            <div class="red two flex f-x-c f-y-c">{{ baseData.lunar_name[1] }}</div>
            <div class="date">{{ baseData.lunar }}</div>
          </div>
          <img class="log" src="../../assets/Pay_log.png" alt="" />
        </div>
        <div>
          <div class="flex f-y-start">
            <div class="line_box">
              <div class="line1 index1">年柱</div>
              <div class="line2 index1">{{ baseData.shi_shen.year }}</div>
              <div class="line3 index1 flex f-y-c f-x-c">【{{ baseData.si_zhu.year }}】</div>
              <div class="line4 index1">{{ baseData.chang_sheng.year }}</div>
              <div class="line5 index1">{{ baseData.shen_sha.year }}</div>
            </div>
            <div class="line_box">
              <div class="line1">月柱</div>
              <div class="line2 index2">{{ baseData.shi_shen.month }}</div>
              <div class="line3 index2 flex f-y-c f-x-c">【{{ baseData.si_zhu.month }}】</div>
              <div class="line4 index2">{{ baseData.chang_sheng.month }}</div>
              <div class="line5 index2">{{ baseData.shen_sha.month }}</div>
            </div>
            <div class="line_box">
              <div class="line1 index3">日柱</div>
              <div class="line2 index3">{{ baseData.shi_shen.day }}</div>
              <div class="line3 index3 flex f-y-c f-x-c">【{{ baseData.si_zhu.day }}】</div>
              <div class="line4 index3">{{ baseData.chang_sheng.day }}</div>
              <div class="line5 index3">{{ baseData.shen_sha.day }}</div>
            </div>
            <div class="line_box">
              <div class="line1 index4">时柱</div>
              <div class="line2 index4">{{ baseData.shi_shen.hour }}</div>
              <div class="line3 index4 flex f-y-c f-x-c">【{{ baseData.si_zhu.hour }}】</div>
              <div class="line4 index4">{{ baseData.chang_sheng.hour }}</div>
              <div class="line5 index4">{{ baseData.shen_sha.hour }}</div>
            </div>
          </div>
          <div class="long_text">
            {{ baseData.rand_text }}
          </div>
          <div class="year_box">
            <div class="content_box flex f-x-c f-y-c">
              <div
                class="year"
                :class="`index${idx + 1}`"
                v-for="(item, idx) in baseData.da_yun_year"
                :key="idx"
              >
                <div>{{ item.year }}</div>
                <div>{{ item.text }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';
export default {
  name: 'Pay-Analyze',
  data: function () {
    return { timer: null };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    payData() {
      return this.$store.state.payData;
    },
    baseData() {
      return this.$store.state.baseData;
    },
  },
  watch: {
    loading(value) {
      if (!value) {
        this.timer = setTimeout(() => {
          smoothscroll.polyfill();
          document
            .getElementsByClassName('payLock')[0]
            .scrollIntoView({ block: 'start', inline: 'center', behavior: 'smooth' });
        }, 13000);
      }
    },
  },
  destroyed() {
    clearTimeout(this.timer);
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
@keyframes bigAndNormal3 {
  0% {
    opacity: 0;
    transform: scale(0.6);
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
    width: 135px;
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
    width: 520px;
    opacity: 1;
  }
}
@keyframes opacityShow4 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.PayAnalyze_component {
  width: 100%;
  min-height: 955px;
  margin-bottom: 60px;
  background: url('../../assets/PayAnalyze_bg.png') top no-repeat;
  background-size: 100% auto;
  &.moving {
    .table_box {
      .name {
        animation: 2s linear opacityShow4 forwards;
      }
      .left_box {
        animation: 1s linear 1s bigAndNormal3 forwards;
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
    width: 710px;
    height: 780px;
    background: url('../../assets/PayAnalyze_table.png') center/contain no-repeat;
    .name {
      opacity: 0;
      font-size: 32px;
      line-height: 32px;
      font-weight: bold;
      color: #df596b;
      margin: 45px 0 18px;
    }
    .left_box {
      width: 114px;
      opacity: 0;
      margin: 20px 26px 0 0;
      transform: scale(0.6);
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
      width: 135px;
      height: 338px;

      .line1 {
        font-size: 28px;
        font-weight: bold;
        color: #7d334c;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .line2 {
        font-size: 28px;
        color: #666666;
        height: 58px;
        overflow: hidden;
        opacity: 0;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .line3 {
        opacity: 0;
        height: 104px;
        font-size: 28px;
        font-weight: bold;
        color: #df596b;
        writing-mode: tb-rl;
        margin-bottom: 8px;
        white-space: nowrap;
        margin: auto;
      }

      .line4 {
        font-size: 28px;
        color: #666666;
        overflow: hidden;
        opacity: 0;
        height: 63px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .line5 {
        font-size: 28px;
        color: #666666;
        overflow: hidden;
        opacity: 0;
        height: 58px;
        white-space: nowrap;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .long_text {
      width: 520px;
      box-sizing: border-box;
      height: 200px;
      font-size: 28px;
      overflow: hidden;
      color: #df596b;
      line-height: 50px;
      writing-mode: vertical-lr;
      margin: 24px;
      opacity: 0;
      box-sizing: border-box;
    }
  }
  .year_box {
    width: 542px;
    overflow: hidden;

    .content_box {
      flex-wrap: nowrap;
      width: 1084px;
      height: 130px;
      font-size: 40px;
      color: #666666;
      white-space: nowrap;
      transform: scale(0.5);
      transform-origin: left top;
    }
    .year {
      width: 155px;
      box-sizing: border-box;
      opacity: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>

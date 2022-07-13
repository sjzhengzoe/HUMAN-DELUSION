<template>
  <div class="Analyze_component" v-if="baseData" :class="loading ? '' : 'moving'">
    <div class="user_name">{{ baseData.name }}命主的命书</div>
    <div class="table_box flex f-y-c f-x-c">
      <div class="content_box">
        <div class="flex f-y-start">
          <div class="left_box">
            <div class="flex f-y-start">
              <div class="line_box">
                <div class="line1 index1">
                  <img src="../../assets/Book_Analyze_shizhu.png" alt="" />
                </div>
                <div class="line2 index1">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shi_shen.hour }}</div>
                </div>
                <div class="line3 index1 flex f-y-c f-x-c">
                  <div class="word flex f-y-c f-x-c">{{ baseData.si_zhu.hour }}</div>
                </div>
                <div class="line4 index1">
                  <div class="word flex f-y-c f-x-c">{{ baseData.chang_sheng.hour }}</div>
                </div>
                <div class="line5 index1">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shen_sha.hour }}</div>
                </div>
              </div>
              <div class="line_box">
                <div class="line1"><img src="../../assets/Book_Analyze_riyuan.png" alt="" /></div>
                <div class="line2 index2">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shi_shen.day }}</div>
                </div>
                <div class="line3 index2 flex f-y-c f-x-c">
                  <div class="word flex f-y-c f-x-c">{{ baseData.si_zhu.day }}</div>
                </div>
                <div class="line4 index2">
                  <div class="word flex f-y-c f-x-c">{{ baseData.chang_sheng.day }}</div>
                </div>
                <div class="line5 index2">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shen_sha.day }}</div>
                </div>
              </div>
              <div class="line_box">
                <div class="line1 index3">
                  <img src="../../assets/Book_Analyze_yuezhu.png" alt="" />
                </div>
                <div class="line2 index3">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shi_shen.month }}</div>
                </div>
                <div class="line3 index3 flex f-y-c f-x-c">
                  <div class="word flex f-y-c f-x-c">{{ baseData.si_zhu.month }}</div>
                </div>
                <div class="line4 index3">
                  <div class="word flex f-y-c f-x-c">{{ baseData.chang_sheng.month }}</div>
                </div>
                <div class="line5 index3">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shen_sha.month }}</div>
                </div>
              </div>
              <div class="line_box">
                <div class="line1 index4">
                  <img src="../../assets/Book_Analyze_nianzhu.png" alt="" />
                </div>
                <div class="line2 index4">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shi_shen.year }}</div>
                </div>
                <div class="line3 index4 flex f-y-c f-x-c">
                  <div class="word flex f-y-c f-x-c">{{ baseData.si_zhu.year }}</div>
                </div>
                <div class="line4 index4">
                  <div class="word flex f-y-c f-x-c">{{ baseData.chang_sheng.year }}</div>
                </div>
                <div class="line5 index4">
                  <div class="word flex f-y-c f-x-c">{{ baseData.shen_sha.year }}</div>
                </div>
              </div>
            </div>
            <div class="flex f-x-end long_text_box">
              <div class="long_text">
                {{ baseData.rand_text }}
              </div>
            </div>
            <div class="year_box">
              <div class="year_content_box flex f-x-c f-y-c">
                <div
                  class="year"
                  :class="`index${idx + 1}`"
                  v-for="(item, idx) in baseData.da_yun_year"
                  :key="idx"
                >
                  <div class="word">{{ item.year }}</div>
                  <div class="word">{{ item.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex-y right_width">
            <div class="flex-y right_box f-y-c">
              <div class="red one flex f-x-c f-y-c">{{ baseData.lunar_name[0] }}</div>
              <div class="red two flex f-x-c f-y-c">{{ baseData.lunar_name[1] }}</div>
              <div class="date">{{ baseData.lunar }}</div>
            </div>
            <img class="log" src="../../assets/Book_Analyze_xi.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="isProcess" class="loading_bar_box flex-y f-y-c f-x-c">
      <div class="loading_text_box">
        <div class="loading_box">
          <div class="loading_text">1.正在录入命主信息</div>
          <div class="loading_text">2.正在排布生辰八字、十神</div>
          <div class="loading_text">3.正在排布十二长生、神煞</div>
          <div class="loading_text">4.正在检测命主大运</div>
          <div class="loading_text">5.正在检测你一生会有几段婚姻</div>
        </div>
      </div>
      <div class="loading_process_box flex">
        <div class="process"></div>
      </div>
    </div>
    <div v-else>
      <div class="analyze_result_box">
        <div>姓名：{{ baseData.name }}</div>
        <div>性别：{{ baseData.gender }}</div>
        <div class="flex f-y-c">
          生辰：
          <div>
            <div>{{ baseData.lunar }}</div>
            <div>{{ baseData.solar }}</div>
          </div>
        </div>
        <div>
          八字：{{ baseData.si_zhu.year }}、{{ baseData.si_zhu.month }}、{{
            baseData.si_zhu.day
          }}、{{ baseData.si_zhu.hour }}
        </div>
        <div>先天婚姻：{{ baseData.rand_text }}</div>
      </div>
      <div @click="toPay">
        <img class="to_pay_button flex no_click" src="../../assets/Book_pay_order_button.png" />
      </div>
    </div>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill';
export default {
  name: 'Pay-Analyze',
  data: function () {
    return {
      timer: null,
      isProcess: true,
    };
  },
  computed: {
    loading() {
      return this.$store.state.loading;
    },
    baseData() {
      return this.$store.state.baseData;
    },
  },
  methods: {
    toPay() {
      this.$store.commit('setLoading', true);
      const oid = this.$route.query.oid;
      this.$router.push({ path: '/pay', query: { oid } });
    },
  },
  watch: {
    loading(value) {
      if (!value) {
        this.timer = setTimeout(() => {
          smoothscroll.polyfill();
          this.isProcess = false;
          this.$nextTick(() => {
            document
              .getElementsByClassName('analyze_result_box')[0]
              .scrollIntoView({ block: 'start', inline: 'center', behavior: 'smooth' });
          });
        }, 17500);
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
    width: 116px;
    opacity: 1;
  }
}
@keyframes opacityShow2 {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 38px;
    opacity: 1;
  }
}
@keyframes opacityShow3 {
  0% {
    width: 0;
    opacity: 1;
  }
  100% {
    width: 472px;
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
@keyframes widthChange {
  0% {
    width: 0;
  }
  8.9% {
    width: 100%;
  }

  8.91% {
    width: 0;
  }
  29.3% {
    width: 100%;
  }

  29.31% {
    width: 0;
  }
  49.7% {
    width: 100%;
  }

  49.71% {
    width: 0;
  }
  70% {
    width: 100%;
  }

  70.01% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}
@keyframes topChange {
  0% {
    margin-top: 0;
  }
  8.9% {
    margin-top: 0;
  }

  8.91% {
    margin-top: -42px;
  }
  29.3% {
    margin-top: -42px;
  }

  29.31% {
    margin-top: -84px;
  }
  49.7% {
    margin-top: -84px;
  }

  49.71% {
    margin-top: -126px;
  }
  70% {
    margin-top: -126px;
  }

  70.01% {
    margin-top: -168px;
  }
  100% {
    margin-top: -168px;
  }
}
.Analyze_component {
  width: 100%;
  padding: 21px 0 30px;
  background: url('../../assets/Book_Analyze_bg.jpg') top no-repeat;
  background-size: 100% auto;
  background-color: #7c2024;
  &.moving {
    .table_box {
      .right_box {
        animation: 1s linear 1s bigAndNormal3 forwards;
      }
      .line_box {
        .line2.index1 .word {
          animation: 0.3s linear 2.5s opacityShow forwards;
        }
        .line3.index1 .word {
          animation: 0.3s linear 3.7s bigAndNormal forwards;
        }
        .line4.index1 .word {
          animation: 0.3s linear 5.9s opacityShow forwards;
        }
        .line5.index1 .word {
          animation: 0.3s linear 7.1s opacityShow forwards;
        }

        .line2.index2 .word {
          animation: 0.3s linear 2.8s opacityShow forwards;
        }
        .line3.index2 .word {
          animation: 0.3s linear 4s bigAndNormal forwards;
        }
        .line4.index2 .word {
          animation: 0.3s linear 6.2s opacityShow forwards;
        }
        .line5.index2 .word {
          animation: 0.3s linear 7.4s opacityShow forwards;
        }

        .line2.index3 .word {
          animation: 0.3s linear 3.1s opacityShow forwards;
        }
        .line3.index3 .word {
          animation: 0.3s linear 4.3s bigAndNormal forwards;
        }
        .line4.index3 .word {
          animation: 0.3s linear 6.5s opacityShow forwards;
        }
        .line5.index3 .word {
          animation: 0.3s linear 7.7s opacityShow forwards;
        }

        .line2.index4 .word {
          animation: 0.3s linear 3.4s opacityShow forwards;
        }
        .line3.index4 .word {
          animation: 0.3s linear 4.6s bigAndNormal forwards;
        }
        .line4.index4 .word {
          animation: 0.3s linear 6.8s opacityShow forwards;
        }
        .line5.index4 .word {
          animation: 0.3s linear 8s opacityShow forwards;
        }
      }

      .long_text {
        animation: 4s linear 12.7s opacityShow3 forwards;
      }

      .year_box {
        .year.index1 .word {
          animation: 0.3s linear 9.3s opacityShow2 forwards;
        }

        .year.index2 .word {
          animation: 0.3s linear 9.6s opacityShow2 forwards;
        }

        .year.index3 .word {
          animation: 0.3s linear 9.9s opacityShow2 forwards;
        }

        .year.index4 .word {
          animation: 0.3s linear 10.2s opacityShow2 forwards;
        }
        .year.index5 .word {
          animation: 0.3s linear 10.5s opacityShow2 forwards;
        }

        .year.index6 .word {
          animation: 0.3s linear 10.8s opacityShow2 forwards;
        }

        .year.index7 .word {
          animation: 0.3s linear 11.1s opacityShow2 forwards;
        }

        .year.index8 .word {
          animation: 0.3s linear 11.4s opacityShow2 forwards;
        }
      }
      .log {
        animation: 0.3s linear 17.2s bigAndNormal2 forwards;
      }
    }
    .process {
      animation: 16.7s linear 1s widthChange forwards;
    }
  }
  .user_name {
    font-size: 32px;
    color: #f4d3b1;
    font-weight: 700;
    margin: 50px 90px 0 0;
    text-align: right;
  }
  .table_box {
    position: relative;
    width: 650px;
    height: 784px;
    margin: 100px auto 20px;
    background: url('../../assets/Book_Analyze_bg.png') center/contain no-repeat;
    .content_box {
      width: 550px;
      height: 660px;
      background: url('../../assets/Book_Analyze_line_bg.png') center/contain no-repeat;
      margin: -30px auto 0;
      position: relative;
      z-index: 10;
      flex-direction: row;
      overflow: hidden;
    }
    .left_box {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        right: 2px;
        width: 6px;
        height: 660px;
        background: url('../../assets/Book_Analyze_line_1.png');
      }
    }
    .right_width {
      width: 80px;
    }
    .right_box {
      width: 68px;
      margin: 20px auto 0;
      opacity: 0;
      transform: scale(0.6);
    }
    .red {
      font-size: 36px;
      color: #ffffff;
      line-height: 72px;
      width: 50px;
      height: 50px;
      background: #dc634c;
      border-radius: 50%;
      &.one {
        margin-bottom: -4px;
      }
      &.two {
        margin-bottom: 4px;
      }
    }
    .date {
      width: fit-content;
      writing-mode: tb-rl;
      font-weight: 700;
      font-size: 24px;
      color: #4b1114;
      line-height: 34px;
      margin-bottom: 24px;
    }
    .log {
      position: absolute;
      bottom: 10px;
      width: 60px;
      height: 60px;
      opacity: 0;
      margin-left: 8px;
    }
    .line_box {
      width: 116px;
      height: 300px;

      .line1 {
        width: 116px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2px;
        position: relative;
        &.index4 {
          &::before {
            width: 0 !important;
          }
        }
        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 2px;
          height: 60px;
          background: url('../../assets/Book_Analyze_line_2.png');
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 116px;
          height: 2px;
          background: url('../../assets/Book_Analyze_line_3.png');
        }
        > img {
          width: 60px;
        }
      }
      .line2,
      .line4 {
        height: 40px;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        .word {
          width: 100%;
          font-size: 26px;
          color: #666666;
          opacity: 0;
        }
        &.index4 {
          &::before {
            width: 0 !important;
          }
        }
        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 2px;
          height: 60px;
          background: url('../../assets/Book_Analyze_line_2.png');
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 116px;
          height: 2px;
          background: url('../../assets/Book_Analyze_line_3.png');
        }
      }
      .line3 {
        width: 116px;
        position: relative;
        height: 123px;
        font-weight: bold;
        writing-mode: tb-rl;
        white-space: nowrap;
        .word {
          background: url('../../assets/Book_Analyze_chou_text_bg.png') center/contain no-repeat;
          width: 40px;
          height: 100px;
          font-size: 32px;
          font-weight: 400;
          opacity: 0;
          color: #dc634c;
        }
        &.index4 {
          &::before {
            width: 0 !important;
          }
        }
        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 2px;
          height: 123px;
          background: url('../../assets/Book_Analyze_line_2.png');
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 116px;
          height: 2px;
          background: url('../../assets/Book_Analyze_line_3.png');
        }
      }
      .line5 {
        height: 40px;
        overflow: hidden;
        white-space: nowrap;
        position: relative;
        .word {
          width: 100%;
          font-size: 26px;
          color: #666666;
          opacity: 0;
        }
        &.index4 {
          &::before {
            width: 0 !important;
          }
        }
        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 2px;
          height: 60px;
          background: url('../../assets/Book_Analyze_line_2.png');
        }
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          width: 116px;
          height: 6px;
          background: url('../../assets/Book_Analyze_line_4.png');
        }
      }
    }
    .long_text_box {
      padding: 20px;
      width: 472px;
      height: 288px;
      box-sizing: border-box;
    }
    .long_text {
      font-size: 28px;
      overflow: hidden;
      color: #4b1114;
      line-height: 50px;
      writing-mode: vertical-rl;

      opacity: 0;
      box-sizing: border-box;
    }
    .year_box {
      width: 472px;
      overflow: hidden;

      .year_content_box {
        flex-wrap: nowrap;
        width: 930px;
        height: 138px;
        font-size: 30px;
        color: #4b1114;
        font-weight: 700;
        white-space: nowrap;
        transform: scale(0.5);
        transform-origin: left top;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          top: 0;
          width: 944px;
          height: 6px;
          background: url('../../assets/Book_Analyze_line_4.png');
        }
      }
      .year {
        position: relative;
        width: 155px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .word {
          opacity: 0;
          margin: 6px 0;
        }

        &::before {
          content: '';
          position: absolute;
          right: 0;
          width: 2px;
          height: 136px;
          background: url('../../assets/Book_Analyze_line_2.png');
        }
        &.index8 {
          &::before {
            width: 0 !important;
          }
        }
      }
    }
  }
  .loading_bar_box {
    width: 644px;
    margin: 0 auto;
    background: rgba(1, 1, 1, 0.2);
    padding: 46px 0;
    border-radius: 20px;
    .loading_text_box {
      height: 42px;
      margin-bottom: 16px;
      overflow: hidden;

      .loading_box {
        height: 210px;
        animation: 16.7s linear 1s topChange forwards;
      }
      .loading_text {
        font-size: 30px;
        height: 42px;
        line-height: 42px;
        color: #f4d3b1;
        text-align: center;
        color: #f4d3b1;
      }
    }

    .loading_process_box {
      width: 516px;
      height: 16px;
      margin: 0 auto;
      border-radius: 6px;
      background-color: rgba(1, 1, 1, 0.3);
    }
    .process {
      width: 0%;
      height: 16px;
      border-radius: 8px;
      background: linear-gradient(180deg, #ffeaca 0, #ca9037);
    }
  }
  .analyze_result_box {
    width: 602px;
    margin: 0 auto;
    font-size: 26px;
    background: rgba(1, 1, 1, 0.2);
    padding: 26px 18px;
    border-radius: 20px;
    color: #f4d3b1;
    line-height: 40px;
  }
  .to_pay_button {
    width: 550px;
    margin: 30px auto 0;
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

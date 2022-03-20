<template>
  <div @touchmove.prevent>
    <div class="lunar">
      <div class="lunarCont">
        <p class="logo" v-show="status == 1">
          公历:{{ this.lunar_year }}年 {{ this.lunar_month }}月 {{ this.lunar_day }}日
        </p>
        <p class="logo" v-show="status == 2">
          农历:{{ this.solar_year }}年 {{ this.solar_month }} {{ this.solar_day }}
        </p>
        <div class="lunarHeader">
          <div v-show="status == 1" class="selected" @click="qj(1)">公历</div>
          <div v-show="status != 1" class="noselected" @click="qj(1)">公历</div>
          <div v-show="status == 2" class="selected" @click="qj(2)">农历</div>
          <div v-show="status != 2" class="noselected" @click="qj(2)">农历</div>
        </div>
        <div v-show="status == 1">
          <div class="pickerList">
            <span
              ><mt-picker
                :slots="lunar_year_slots"
                @change="lunar_yearChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
            <span
              ><mt-picker
                :slots="lunar_month_slots"
                @change="lunar_monthChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
            <span
              ><mt-picker
                :slots="lunar_day_slots"
                @change="lunar_dayChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
            <span
              ><mt-picker
                :slots="lunar_time_slots"
                @change="lunar_timeChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
          </div>
        </div>
        <div v-show="status == 2">
          <div class="pickerList">
            <!-- <mt-picker value-key="picker2" :slots="slots2" @change="onValuesChange2"></mt-picker> -->
            <span
              ><mt-picker
                :slots="solar_year_slots"
                @change="solar_yearChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
            <span
              ><mt-picker
                :key="menuKey"
                ref="solar_month"
                :slots="solar_month_slots"
                @change="solar_monthChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
            <span
              ><mt-picker
                :slots="solar_day_slots"
                @change="solar_dayChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
            <span
              ><mt-picker
                :slots="solar_time_slots"
                @change="solar_timeChange"
                :visible-item-count="3"
                :item-height="45"
              ></mt-picker
            ></span>
          </div>
        </div>
        <div class="btn" v-show="status == 1">
          <p @click="ok()">完成</p>
          <p @click="close()">关闭</p>
        </div>
        <div class="btn" v-show="status == 2">
          <p @click="ok2()">完成</p>
          <p @click="close()">关闭</p>
        </div>
      </div>

      <div class="confirm_box" v-if="popupVisible">
        <mt-popup v-model="popupVisible">
          <div class="confirm">
            <p class="title">确认日期</p>
            <div class="confirmCont">
              <div class="title2">请确认输入的时间是否正确</div>
              <div class="date_box">
                公历：<span class="date"
                  >{{ lunar_year }}年 {{ lunar_month }}月 {{ lunar_day }}日 {{ time }}</span
                >
              </div>
              <div class="date_box">
                农历：<span class="date"
                  >{{ solar_year }}年 {{ solar_month }} {{ solar_day }} {{ time }}</span
                >
              </div>
            </div>
            <div class="btn_box">
              <div @click="reconfirm">确认</div>
              <div @click="update">返回修改</div>
            </div>
          </div>
        </mt-popup>
      </div>
    </div>
  </div>
</template>

<script>
import './lunar.less';

import 'mint-ui/lib/style.css';
import Calendar from './calendar.js';
import lunar from './datePicker.js';
import tools from './tools.js';

export default {
  data() {
    //数据源
    return {
      menuKey: 1,
      popupVisible: false,
      showLunar: false,
      status: 1,
      lunar_year: '',
      lunar_month: '',
      lunar_day: '',
      time: '',
      solar_year: '',
      solar_month: '',
      solar_day: '',
      Alldate: '',
      lunar_year_slots: [
        {
          flex: 1,
          values: [],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
          value: '',
        },
        {
          divider: true,
          content: '-',
          className: 'slot1',
        },
      ],
      lunar_month_slots: [
        {
          flex: 1,
          values: [],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
        },
        {
          divider: true,
          content: '-',
          className: 'slot1',
        },
      ],
      lunar_day_slots: [
        {
          flex: 1,
          values: [],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
        },
        {
          divider: true,
          content: '-',
          className: 'slot1',
        },
      ],
      lunar_time_slots: [
        {
          flex: 1,
          values: [
            '未知',
            '00:00-00:59早子',
            '01:00-01:59丑',
            '02:00-02:59丑',
            '03:00-03:59寅',
            '04:00-04:59寅',
            '05:00-05:59卯',
            '06:00-06:59卯',
            '07:00-07:59辰',
            '08:00-08:59辰',
            '09:00-09:59巳',
            '10:00-10:59巳',
            '11:00-11:59午',
            '12:00-12:59午',
            '13:00-13:59未',
            '14:00-14:59未',
            '15:00-15:59申',
            '16:00-16:59申',
            '17:00-17:59酉',
            '18:00-18:59酉',
            '19:00-19:59戌',
            '20:00-20:59戌',
            '21:00-21:59亥',
            '22:00-22:59亥',
            '23:00-23:59晚子',
          ],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
        },
      ],

      solar_year_slots: [
        {
          flex: 1,
          values: [],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
        },
        {
          divider: true,
          content: '-',
          className: 'slot1',
        },
      ],
      solar_month_slots: [
        {
          flex: 1,
          values: [],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
          value: '',
        },
        {
          divider: true,
          content: '-',
          className: 'slot1',
        },
      ],
      solar_day_slots: [
        {
          flex: 1,
          values: [
            '初一',
            '初二',
            '初三',
            '初四',
            '初五',
            '初六',
            '初七',
            '初八',
            '初九',
            '初十',
            '十一',
            '十二',
            '十三',
            '十四',
            '十五',
            '十六',
            '十七',
            '十八',
            '十九',
            '二十',
            '廿一',
            '廿二',
            '廿三',
            '廿四',
            '廿五',
            '廿六',
            '廿七',
            '廿八',
            '廿九',
            '三十',
            '三十一',
          ],
          className: 'slot0',
          textAlign: 'left',
          defaultIndex: 0,
        },
        {
          divider: true,
          content: '-',
          className: 'slot1',
        },
      ],
      solar_time_slots: [
        {
          flex: 1,
          values: [
            '未知',
            '00:00-00:59早子',
            '01:00-01:59丑',
            '02:00-02:59丑',
            '03:00-03:59寅',
            '04:00-04:59寅',
            '05:00-05:59卯',
            '06:00-06:59卯',
            '07:00-07:59辰',
            '08:00-08:59辰',
            '09:00-09:59巳',
            '10:00-10:59巳',
            '11:00-11:59午',
            '12:00-12:59午',
            '13:00-13:59未',
            '14:00-14:59未',
            '15:00-15:59申',
            '16:00-16:59申',
            '17:00-17:59酉',
            '18:00-18:59酉',
            '19:00-19:59戌',
            '20:00-20:59戌',
            '21:00-21:59亥',
            '22:00-22:59亥',
            '23:00-23:59晚子',
          ],
          className: 'slot6',
          textAlign: 'left',
          defaultIndex: 0,
        },
      ],
    };
  },
  props: ['birdate'],
  created() {},
  mounted() {
    let arr1 = '';
    let arr2 = '';
    for (var i = 1900; i <= 2030; i++) {
      this.lunar_year_slots[0].values.push(i);
      this.solar_year_slots[0].values.push(i);
    }
    for (var i = 1; i <= 12; i++) {
      this.lunar_month_slots[0].values.push(i);
    }
    for (var i = 1; i <= 31; i++) {
      this.lunar_day_slots[0].values.push(i);
    }

    var year;
    var month;
    var day;
    var hour;
    if (this.birdate.y) {
      year = this.birdate.y;
      month = this.birdate.m;
      day = this.birdate.d;
      hour = this.birdate.hour;
    } else {
      year = 1990;
      month = 3;
      day = 10;
    }
    this.$nextTick(() => {
      setTimeout(() => {
        for (i = 0; i < this.lunar_year_slots[0].values.length; i++) {
          if (year == this.lunar_year_slots[0].values[i]) {
            this.lunar_year_slots[0].defaultIndex = i;
            this.lunar_year = year;
            this.lunarToSolar();
          }
        }
      }, 20);
      setTimeout(() => {
        for (i = 0; i < this.lunar_month_slots[0].values.length; i++) {
          if (month == this.lunar_month_slots[0].values[i]) {
            this.lunar_month_slots[0].defaultIndex = i;
            this.lunar_month = month;
            this.lunarMonthDays();
            this.leapMonth();
            this.lunarToSolar();
          }
        }
      }, 30);
      setTimeout(() => {
        for (i = 0; i < this.lunar_day_slots[0].values.length; i++) {
          if (day == this.lunar_day_slots[0].values[i]) {
            this.lunar_day_slots[0].defaultIndex = i;
            this.lunar_day = day;
            this.lunarToSolar();
          }
        }
      }, 40);
      setTimeout(() => {
        for (i = 0; i < this.lunar_time_slots[0].values.length; i++) {
          if (hour == this.lunar_time_slots[0].values[i]) {
            this.lunar_time_slots[0].defaultIndex = i;
            this.time = hour;
          }
        }
      }, 50);
    });
  },
  methods: {
    //公历年月日改变时
    lunar_yearChange(picker, values) {
      this.lunar_year = values[0];
      this.lunarMonthDays();
      this.lunarToSolar();
    },
    lunar_monthChange(picker, values) {
      this.lunar_month = values[0];
      this.lunarMonthDays();
      this.lunarToSolar();
    },
    lunar_dayChange(picker, values) {
      this.lunar_day = values[0];
      this.lunarToSolar();
    },
    lunar_timeChange(picker, values) {
      this.time = values[0];
    },

    //农历年月日改变时
    solar_yearChange(picker, values) {
      this.solar_year = values[0];
      this.solarMonthDays();
      this.leapMonth(this.solar_year);
      this.$nextTick(() => {
        for (var i = 0; i <= this.solar_month_slots[0].values.length; i++) {
          if (this.solar_month == this.solar_month_slots[0].values[i]) {
            this.solar_month_slots[0].defaultIndex = i;
            this.solar_month_slots[0].value = this.solar_month;
            this.$refs.solar_month.setSlotValue(0, this.solar_month);
            ++this.menuKey;
          }
        }
      });
    },
    solar_monthChange(picker, values) {
      this.solar_month = values[0];
      this.solarMonthDays();
      this.leapMonth();
    },
    solar_dayChange(picker, values) {
      this.solar_day = values[0];
      this.leapMonth();
    },
    solar_timeChange(picker, values) {
      this.time = values[0];
    },

    //公历转农历
    lunarToSolar() {
      // var m=this.leapMonth();
      let solar = Calendar.solar2lunar(this.lunar_year, this.lunar_month, this.lunar_day); //调用calendar组件的toLunar方
      this.solar_year = solar.lYear;
      this.solar_month = solar.IMonthCn;
      this.solar_day = solar.IDayCn;
      this.$nextTick(() => {
        for (var i = 0; i < this.solar_year_slots[0].values.length; i++) {
          if (solar.lYear == this.solar_year_slots[0].values[i]) {
            this.solar_year_slots[0].defaultIndex = i;
          }
        }

        for (var i = 0; i < this.solar_month_slots[0].values.length; i++) {
          if (solar.IMonthCn == this.solar_month_slots[0].values[i]) {
            this.solar_month_slots[0].defaultIndex = i;
            this.solar_month_slots[0].value = solar.IMonthCn;
            this.$refs.solar_month.setSlotValue(0, solar.IMonthCn);
          }
        }

        for (var i = 0; i < this.solar_day_slots[0].values.length; i++) {
          if (solar.IDayCn == this.solar_day_slots[0].values[i]) {
            this.solar_day_slots[0].defaultIndex = i;
          }
        }

        for (var i = 0; i < this.solar_time_slots[0].values.length; i++) {
          if (this.time == this.solar_time_slots[0].values[i]) {
            this.solar_time_slots[0].defaultIndex = i;
          }
        }
      });
    },
    //农历转新历
    solarToLunar() {
      let solar_month = this.leap();
      let solar = lunar.toSolar(this.solar_year, solar_month, this.solar_day); //调用lunar组件的toSolar方法
      this.lunar_year = solar[0];
      this.lunar_month = solar[1];
      this.lunar_day = solar[2];
      this.$nextTick(() => {
        for (var i = 0; i < this.lunar_year_slots[0].values.length; i++) {
          if (solar[0] == this.lunar_year_slots[0].values[i]) {
            this.lunar_year_slots[0].defaultIndex = i;
          }
        }
        for (var i = 0; i < this.lunar_month_slots[0].values.length; i++) {
          if (solar[1] == this.lunar_month_slots[0].values[i]) {
            this.lunar_month_slots[0].defaultIndex = i;
          }
        }
        for (var i = 0; i < this.lunar_day_slots[0].values.length; i++) {
          if (solar[2] == this.lunar_day_slots[0].values[i]) {
            this.lunar_day_slots[0].defaultIndex = i;
          }
        }
        for (var i = 0; i < this.lunar_time_slots[0].values.length; i++) {
          if (this.time == this.lunar_time_slots[0].values[i]) {
            this.lunar_time_slots[0].defaultIndex = i;
          }
        }
      });
    },
    //闰月传值(农历转新历)
    leap() {
      let solar_month;
      let month = lunar.leapMonth(this.solar_year);
      if (month == 1) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '闰正月':
            solar_month = 2;
            break;
          case '二月':
            solar_month = 3;
            break;
          case '三月':
            solar_month = 4;
            break;
          case '四月':
            solar_month = 5;
            break;
          case '五月':
            solar_month = 6;
            break;
          case '六月':
            solar_month = 7;
            break;
          case '七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 2) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '闰二月':
            solar_month = 3;
            break;
          case '三月':
            solar_month = 4;
            break;
          case '四月':
            solar_month = 5;
            break;
          case '五月':
            solar_month = 6;
            break;
          case '六月':
            solar_month = 7;
            break;
          case '七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 3) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '闰三月':
            solar_month = 4;
            break;
          case '四月':
            solar_month = 5;
            break;
          case '五月':
            solar_month = 6;
            break;
          case '六月':
            solar_month = 7;
            break;
          case '七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 4) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '闰四月':
            solar_month = 5;
            break;
          case '五月':
            solar_month = 6;
            break;
          case '六月':
            solar_month = 7;
            break;
          case '七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 5) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '闰五月':
            solar_month = 6;
            break;
          case '六月':
            solar_month = 7;
            break;
          case '七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 6) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '闰六月':
            solar_month = 7;
            break;
          case '七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 7) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '闰七月':
            solar_month = 8;
            break;
          case '八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 8) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '八月':
            solar_month = 8;
            break;
          case '闰八月':
            solar_month = 9;
            break;
          case '九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 9) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '八月':
            solar_month = 8;
            break;
          case '九月':
            solar_month = 9;
            break;
          case '闰九月':
            solar_month = 10;
            break;
          case '十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 10) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '八月':
            solar_month = 8;
            break;
          case '九月':
            solar_month = 9;
            break;
          case '十月':
            solar_month = 10;
            break;
          case '闰十月':
            solar_month = 11;
            break;
          case '冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 11) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '八月':
            solar_month = 8;
            break;
          case '九月':
            solar_month = 9;
            break;
          case '十月':
            solar_month = 10;
            break;
          case '冬月':
            solar_month = 11;
            break;
          case '闰冬月':
            solar_month = 12;
            break;
          case '腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      }
      if (month == 12) {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '八月':
            solar_month = 8;
            break;
          case '九月':
            solar_month = 9;
            break;
          case '十月':
            solar_month = 10;
            break;
          case '冬月':
            solar_month = 11;
            break;
          case '腊月':
            solar_month = 12;
            break;
          case '闰腊月':
            solar_month = 13;
            break;
          default:
            break;
        }
        return solar_month;
      } else {
        switch (this.solar_month) {
          case '正月':
            solar_month = 1;
            break;
          case '二月':
            solar_month = 2;
            break;
          case '三月':
            solar_month = 3;
            break;
          case '四月':
            solar_month = 4;
            break;
          case '五月':
            solar_month = 5;
            break;
          case '六月':
            solar_month = 6;
            break;
          case '七月':
            solar_month = 7;
            break;
          case '八月':
            solar_month = 8;
            break;
          case '九月':
            solar_month = 9;
            break;
          case '十月':
            solar_month = 10;
            break;
          case '冬月':
            solar_month = 11;
            break;
          case '腊月':
            solar_month = 12;
            break;
          default:
            break;
        }
        return solar_month;
      }
    },
    //渲染闰月
    leapMonth(year) {
      // this.lunarToSolar();
      let month = lunar.leapMonth(this.solar_year);
      let arr = [
        '正月',
        '二月',
        '三月',
        '四月',
        '五月',
        '六月',
        '七月',
        '八月',
        '九月',
        '十月',
        '冬月',
        '腊月',
      ];
      switch (month) {
        case 1:
          arr.splice(1, 0, '闰正月');
          this.solar_month_slots[0].values = arr;
          break;
        case 2:
          arr.splice(2, 0, '闰二月');
          this.solar_month_slots[0].values = arr;
          this.$refs.solar_month.setSlotValues(0, arr);
          break;
        case 3:
          arr.splice(3, 0, '闰三月');
          this.solar_month_slots[0].values = arr;
          break;
        case 4:
          arr.splice(4, 0, '闰四月');
          this.solar_month_slots[0].values = arr;
          break;
        case 5:
          arr.splice(5, 0, '闰五月');
          this.solar_month_slots[0].values = arr;
          break;
        case 6:
          arr.splice(6, 0, '闰六月');
          this.solar_month_slots[0].values = arr;
          break;
        case 7:
          arr.splice(7, 0, '闰七月');
          this.solar_month_slots[0].values = arr;
          break;
        case 8:
          arr.splice(8, 0, '闰八月');
          this.solar_month_slots[0].values = arr;
          break;
        case 9:
          arr.splice(9, 0, '闰九月');
          this.solar_month_slots[0].values = arr;
          break;
        case 10:
          arr.splice(10, 0, '闰十月');
          this.solar_month_slots[0].values = arr;
          break;
        case 11:
          arr.splice(11, 0, '闰冬月');
          this.solar_month_slots[0].values = arr;
          break;
        case 12:
          arr.splice(12, 0, '闰腊月');
          this.solar_month_slots[0].values = arr;
          break;
        default:
          this.solar_month_slots[0].values = [
            '正月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '冬月',
            '腊月',
          ];
          break;
      }
      return this.solar_month_slots[0].values;
      // this.lunarToSolar()
    },
    //渲染公历月的天数
    lunarMonthDays() {
      let day = lunar.solarMonthDays(this.lunar_year, this.lunar_month);
      let arr = [];
      for (var i = 1; i <= day; i++) {
        arr.push(i);
      }
      this.lunar_day_slots[0].values = arr;
    },
    //渲染农历月的天数
    solarMonthDays() {
      let solarMonth = this.leap();
      // this.solar_month= Number(this.solar_month)+1
      let day = lunar.lunarMonthDays(this.solar_year, solarMonth);

      if (day == 31) {
        this.solar_day_slots[0].values = [
          '初一',
          '初二',
          '初三',
          '初四',
          '初五',
          '初六',
          '初七',
          '初八',
          '初九',
          '初十',
          '十一',
          '十二',
          '十三',
          '十四',
          '十五',
          '十六',
          '十七',
          '十八',
          '十九',
          '二十',
          '廿一',
          '廿二',
          '廿三',
          '廿四',
          '廿五',
          '廿六',
          '廿七',
          '廿八',
          '廿九',
          '三十',
          '三十一',
        ];
      } else if (day == 30) {
        this.solar_day_slots[0].values = [
          '初一',
          '初二',
          '初三',
          '初四',
          '初五',
          '初六',
          '初七',
          '初八',
          '初九',
          '初十',
          '十一',
          '十二',
          '十三',
          '十四',
          '十五',
          '十六',
          '十七',
          '十八',
          '十九',
          '二十',
          '廿一',
          '廿二',
          '廿三',
          '廿四',
          '廿五',
          '廿六',
          '廿七',
          '廿八',
          '廿九',
          '三十',
        ];
      } else if (day == 29) {
        this.solar_day_slots[0].values = [
          '初一',
          '初二',
          '初三',
          '初四',
          '初五',
          '初六',
          '初七',
          '初八',
          '初九',
          '初十',
          '十一',
          '十二',
          '十三',
          '十四',
          '十五',
          '十六',
          '十七',
          '十八',
          '十九',
          '二十',
          '廿一',
          '廿二',
          '廿三',
          '廿四',
          '廿五',
          '廿六',
          '廿七',
          '廿八',
          '廿九',
        ];
      } else if (day == 28) {
        this.solar_day_slots[0].values = [
          '初一',
          '初二',
          '初三',
          '初四',
          '初五',
          '初六',
          '初七',
          '初八',
          '初九',
          '初十',
          '十一',
          '十二',
          '十三',
          '十四',
          '十五',
          '十六',
          '十七',
          '十八',
          '十九',
          '二十',
          '廿一',
          '廿二',
          '廿三',
          '廿四',
          '廿五',
          '廿六',
          '廿七',
          '廿八',
        ];
      } else {
        this.solar_day_slots[0].values = [
          '初一',
          '初二',
          '初三',
          '初四',
          '初五',
          '初六',
          '初七',
          '初八',
          '初九',
          '初十',
          '十一',
          '十二',
          '十三',
          '十四',
          '十五',
          '十六',
          '十七',
          '十八',
          '十九',
          '二十',
          '廿一',
          '廿二',
          '廿三',
          '廿四',
          '廿五',
          '廿六',
          '廿七',
          '廿八',
          '廿九',
          '三十',
          '三十一',
        ];
      }
    },
    //切换新历农历按钮
    qj(val) {
      this.status = val;
      if (val == 1) {
        this.leapMonth();
        this.lunarMonthDays();
        this.solarToLunar();
        // this.leapMonth().then(val => {
        //     this.solarToLunar();
        // });
      } else {
        this.leapMonth();
        // console.log('月份数组',this.solar_month_slots[0].values);
        this.solarMonthDays();
        this.lunarToSolar();
        // this.leapMonth().then(val => {
        //     this.lunarToSolar();
        // });
      }
    },
    //点击关闭
    close() {
      this.$emit('closedate');
    },
    //确认
    ok() {
      this.popupVisible = true;
      this.lunarToSolar();
      // this.reconfirm(1);
    },
    //确认
    ok2() {
      this.popupVisible = true;
      this.solarToLunar();
      // this.reconfirm(2);
    },
    //再次确认
    reconfirm(val) {
      var h;
      var zh;
      switch (this.time) {
        case '未知':
          {
            h = -1;
          }
          break;
        case '00:00-00:59早子':
          {
            h = 0;
            zh = '早子';
          }
          break;
        case '01:00-01:59丑':
          {
            h = 1;
            zh = '丑';
          }
          break;
        case '02:00-02:59丑':
          {
            h = 2;
            zh = '丑';
          }
          break;
        case '03:00-03:59寅':
          {
            h = 3;
            zh = '寅';
          }
          break;
        case '04:00-04:59寅':
          {
            h = 4;
            zh = '寅';
          }
          break;
        case '05:00-05:59卯':
          {
            h = 5;
            zh = '卯';
          }
          break;
        case '06:00-06:59卯':
          {
            h = 6;
            zh = '卯';
          }
          break;
        case '07:00-07:59辰':
          {
            h = 7;
            zh = '辰';
          }
          break;
        case '08:00-08:59辰':
          {
            h = 8;
            zh = '辰';
          }
          break;
        case '09:00-09:59巳':
          {
            h = 9;
            zh = '巳';
          }
          break;
        case '10:00-10:59巳':
          {
            h = 10;
            zh = '巳';
          }
          break;
        case '11:00-11:59午':
          {
            h = 11;
            zh = '午';
          }
          break;
        case '12:00-12:59午':
          {
            h = 12;
            zh = '午';
          }
          break;
        case '13:00-13:59未':
          {
            h = 13;
            zh = '未';
          }
          break;
        case '14:00-14:59未':
          {
            h = 14;
            zh = '未';
          }
          break;
        case '15:00-15:59申':
          {
            h = 15;
            zh = '申';
          }
          break;
        case '16:00-16:59申':
          {
            h = 16;
            zh = '申';
          }
          break;
        case '17:00-17:59酉':
          {
            h = 17;
            zh = '酉';
          }
          break;
        case '18:00-18:59酉':
          {
            h = 18;
            zh = '酉';
          }
          break;
        case '19:00-19:59戌':
          {
            h = 19;
            zh = '戌';
          }
          break;
        case '20:00-20:59戌':
          {
            h = 20;
            zh = '戌';
          }
          break;
        case '21:00-21:59亥':
          {
            h = 21;
            zh = '亥';
          }
          break;
        case '22:00-22:59亥':
          {
            h = 22;
            zh = '亥';
          }
          break;
        case '23:00-23:59晚子':
          {
            h = 23;
            zh = '晚子';
          }
          break;
      }
      let data;
      if (this.status == 1) {
        this.Alldate = `${this.lunar_year}年${this.lunar_month}月${this.lunar_day}日  ${
          h == -1 ? '未知' : h
        }时`;
        this.birthday = `${this.lunar_year}${
          this.lunar_month <= 9 ? `0${this.lunar_month}` : this.lunar_month
        }${this.lunar_day <= 9 ? `0${this.lunar_day}` : this.lunar_day}`;
        data = {
          y: this.lunar_year,
          m: this.lunar_month,
          d: this.lunar_day,
          h: h,
          hour: this.time,
          Alldate: this.Alldate,
          birthday: this.birthday,
          type: 1,
        };
      } else if (this.status == 2) {
        this.Alldate = `${tools.ToYear(this.solar_year)}年${this.solar_month}${this.solar_day} ${
          h == -1 ? '未知' : zh
        }时`;
        this.birthday = `${tools.ToYear(this.solar_year)}年${this.solar_month}${this.solar_day}`;
        data = {
          y: this.lunar_year,
          m: this.lunar_month,
          d: this.lunar_day,
          h: h,
          hour: this.time,
          Alldate: this.Alldate,
          birthday: this.birthday,
          type: 2,
        };
      }
      this.$emit('closedate', data); //触发父组件的closedate函数，关闭弹窗并回传值
      this.popupVisible = false;
    },
    //返回修改
    update() {
      this.popupVisible = false;
    },
  },
};
</script>
<style lang="less">
.picker-selected {
  color: #851912 !important;
  font-weight: 600;
}
</style>

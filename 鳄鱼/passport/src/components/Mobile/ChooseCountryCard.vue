<template>
  <div class="ChooseCountryCard_component">
    <div class="bg">
      <div class="title">{{ countryCardData.photoType.title }}</div>
      <div class="desc">{{ countryCardData.photoType.summary }}</div>
      <div class="choose_box flex-y f-y-c" v-if="countryCardData">
        <div class="choose_title">PLEASE CHOOSE COUNTRY</div>
        <Select :value="countryCardData.region.id" class="select">
          <img
            class="icon_location"
            slot="prefix"
            src="@/assets/m/choose_country_location.png"
            alt=""
          />
          <Option :value="countryCardData.region.id">
            {{ countryCardData.region.name }}
          </Option>
        </Select>
        <div class="scroll_box">
          <div
            class="flex f-y-c radio_item"
            v-for="(item, idx) in sizeList"
            :key="idx"
            @click="chooseSize = item.id"
          >
            <img
              class="icon_radio flex"
              v-if="chooseSize == item.id"
              src="@/assets/m/choose_country_choose.png"
              alt=""
            />
            <img
              class="icon_radio flex"
              v-if="chooseSize != item.id"
              src="@/assets/m/choose_country_no_choose.png"
              alt=""
            />
            <span>{{ item.name }}</span>
            <router-link :to="{ path: '/country-photo', query: { photoTypeId: chooseSize } }">
              <div class="link">Image</div>
            </router-link>
          </div>
        </div>
        <router-link :to="{ path: '/use', query: { photoTypeId: chooseSize } }">
          <div class="start_box flex f-x-c f-y-c">START</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Select, Option } from 'view-design';
import * as Api from '../../api/api.js';
export default {
  name: 'ChooseCountryCard-component',
  components: { Select, Option },
  computed: {
    countryCardData() {
      return this.$store.state.countryCardData;
    },
    region() {
      if (!this.countryCardData) return null;
      return this.countryCardData.region;
    },
  },
  watch: {
    region({ id }) {
      this.getDoc(id);
    },
  },
  methods: {
    // 获取护照信息
    async getDoc(regionId) {
      const res = await Api.getDoc({ regionId });
      this.sizeList = res.data.data;
      this.chooseSize = this.sizeList[0].id;
    },
  },
  data() {
    return {
      chooseSize: '',
      sizeList: [],
    };
  },
};
</script>

<style lang="less" scoped>
.ChooseCountryCard_component {
  background-color: #f9f9fa;
  margin-bottom: 148px;
  .bg {
    width: 750px;
    margin: 0 auto;
    background: url('../../assets/m/choose_country_card_bg.png') top/contain no-repeat;
  }

  .title {
    font-size: 53px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 74px;
    padding: 61px 0 0 92px;
  }
  .desc {
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 37px;
    padding: 31px 0 345px 92px;
  }

  .choose_box {
    padding-bottom: 57px;
    width: 100%;
    background-size: 100%;

    width: 707px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 15px 45px 0px #edf1f7;
    border-radius: 9px;
    // backdrop-filter: blur(42.36311239193084px);
    .choose_title {
      font-size: 36px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 50px;
      margin: 0 0 22px 0;
      padding-top: 40px;
    }
    .select {
      width: 634px;
      background: rgba(255, 255, 255, 0.86);
      border-radius: 9px;
      .icon_location {
        width: 41px;
        margin: 18px 16px 0 10px;
      }
      /deep/.ivu-select-selection {
        height: 78px;
        border-radius: 9px;
        border: 1px solid rgba(211, 218, 223, 0.86);
      }
      /deep/.ivu-select-selected-value {
        font-size: 32px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #071c43;
        line-height: 74px;
      }
      /deep/.ivu-select-arrow {
        color: #000000;
        font-size: 50px;
      }
    }
  }
  .scroll_box {
    width: 632px;
    height: 333px;
    margin: 18px 0 50px 0;
    background: #ffffff;
    border-radius: 9px;
    border: 1px solid #d3dadf;
    padding: 26px 33px;
    overflow-y: scroll;
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: block;
      width: 17px;
      height: 148px;
    }
    &::-webkit-scrollbar-thumb {
      background: #d8dee7;
    }

    .radio_item {
      cursor: pointer;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #010101;
      line-height: 45px;
      margin: 0 0 29px 0;
      &:last-child {
        margin: 0;
      }
      .icon_radio {
        width: 30px;
        height: 30px;
        margin-right: 18px;
      }
      .link {
        margin: 0 0 0 23px;
        font-size: 26px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #305eb4;
        line-height: 45px;
      }
    }
  }
  .start_box {
    font-size: 39px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 55px;

    width: 257px;
    height: 82px;
    background: #38d063;
    box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
    border-radius: 41px;
    margin: 0 auto;
    cursor: pointer;
  }
}
</style>

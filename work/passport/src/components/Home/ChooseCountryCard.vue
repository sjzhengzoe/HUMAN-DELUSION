<template>
  <div class="ChooseCountryCard_component">
    <div class="bg flex-y f-y-c">
      <div class="title">
        <div>{{ countryCardData.photoType.title }}</div>
      </div>
      <div class="desc">{{ countryCardData.photoType.summary }}</div>
      <div class="choose_box" v-if="countryCardData">
        <div class="choose_title">PLEASE CHOOSE COUNTRY</div>
        <Select :value="countryCardData.region.id" class="select">
          <img
            class="icon_location"
            slot="prefix"
            src="@/assets/pc/choose_country_location.png"
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
              src="@/assets/pc/choose_country_choose.png"
              alt=""
            />
            <img
              class="icon_radio flex"
              v-if="chooseSize != item.id"
              src="@/assets/pc/choose_country_no_choose.png"
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
  width: 100%;
  background-color: #f9f9fa;
  margin-bottom: 96px;
  .bg {
    max-width: 1920px;
    height: 660px;
    margin: 0 auto;
    background: url('../../assets/pc/choose_country_card_bg.png') center/contain no-repeat;
  }

  .title {
    width: 1000px;
    font-size: 50px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 70px;
    padding-top: 70px;
  }
  .desc {
    width: 1000px;
    font-size: 24px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #071c43;
    line-height: 33px;
    padding: 13px 0 19px;
  }
  .choose_box {
    width: 1000px;
    padding-left: 25px;
    box-sizing: border-box;
    .choose_title {
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 20px;
    }
    .select {
      width: 418px;
      background: rgba(255, 255, 255, 0.86);
      border-radius: 6px;
      font-size: 14px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #071c43;
      line-height: 20px;
      margin: 9px 0 0 0;
      .icon_location {
        width: 16px;
        margin: 4px 10px 0 10px;
      }
      /deep/.ivu-select-selection {
        height: 38px;
        padding: 4px 0;
        border: 1px solid rgba(211, 218, 223, 0.86);
      }
      /deep/.ivu-select-arrow {
        color: #000000;
        font-size: 20px;
      }
    }
  }
  .scroll_box {
    width: 419px;
    height: 148px;
    margin: 21px 0;
    background: #ffffff;
    border-radius: 6px;
    opacity: 0.86;
    border: 1px solid #d3dadf;
    padding: 13px 21px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: block;
      width: 7px;
      height: 98px;
    }
    &::-webkit-scrollbar-thumb {
      background: #d8dee7;
    }

    .radio_item {
      cursor: pointer;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #010101;
      line-height: 22px;
      margin: 0 0 9px 0;
      &:last-child {
        margin: 0;
      }
      .icon_radio {
        width: 13px;
        height: 14px;
        margin-right: 9px;
      }
      .link {
        margin: 0 0 0 14px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        color: #305eb4;
        line-height: 20px;
        cursor: pointer;
      }
    }
  }
  .start_box {
    font-size: 26px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 37px;
    width: 170px;
    height: 54px;
    background: #38d063;
    box-shadow: 0px 2px 10px 0px rgba(56, 208, 99, 0.45);
    border-radius: 27px;
    margin: 0 0 0 125px;
    cursor: pointer;
  }
}
</style>

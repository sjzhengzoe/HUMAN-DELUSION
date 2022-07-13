import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import CommonTools from '../utils/CommonTools.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // loading
    loading: true,
    // 支付页数据
    payData: {},
    // 支付页数据
    baseData: null,
    // 结果页数据
    resultData: {},
    // 结果页 广告数据
    adsData: {},
    // 接口域名
    // eslint-disable-next-line
    DOMAIN: DEFINE_DOMAIN,
    // 支付域名
    // eslint-disable-next-line
    DOMAIN_PAY: DEFINE_DOMAIN_PAY,
    TAG: 'hycsb',
  },
  mutations: {
    setPayData(state, payload) {
      state.payData = payload;
    },
    setResultData(state, payload) {
      state.resultData = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
    setBaseData(state, payData) {
      state.baseData = payData;
    },
    setAdsData(state, payData) {
      state.adsData = payData;
    },
  },
  actions: {
    // 首页 || 外部不通过首页进入支付页 - 获取产品配置数据 获取id
    async getConfigData({ state }, { type = 'home', channel }) {
      const res = await axios.get(`${state.DOMAIN}/product/config`, {
        params: { tag: state.TAG, channel: type == 'home' ? CommonTools.getPChan() : channel },
      });
      const business = res.data?.business;
      CommonTools.setLocal('product', JSON.stringify(res.data));
      CommonTools.setLocal('business', JSON.stringify(business));
      CommonTools.setLocal('tag', state.TAG);
      return res.data;
    },
    // 首页 - 下单接口 获取oid
    async postOrder({ state }, { data, cb }) {
      const res = await axios.post(`${state.DOMAIN}/order/order`, {
        ...data,
        tag: state.TAG,
      });
      const oid = res.data?.oid;
      cb(oid);
    },

    // 支付页 获取用户数据
    async getBaseData({ state, commit }, { oid }) {
      const res = await axios.get(`${state.DOMAIN}/algorithm/base`, {
        params: { oid, tag: state.TAG },
      });
      commit('setBaseData', res.data);
    },

    // 结果页 - 获取广告数据
    async getAdsData({ state, commit }) {
      const res = await axios.get(`${state.DOMAIN}/product/recommend`);
      commit('setAdsData', res.data);
    },

    // 支付页 || 结果页 - 获取订单信息
    async getPayData({ state, commit }, { oid }) {
      const res = await axios.get(`${state.DOMAIN}/order/find`, {
        params: { oid, tag: state.TAG },
      });
      commit('setPayData', res.data);
      return res.data;
    },

    // 保存手机号码
    async postMobile({ state }, params) {
      await axios.post(`${state.DOMAIN}/order/bind`, { tag: state.TAG, ...params });
    },

    // 获取结果页数据
    async getResultData({ state, commit }, { oid }) {
      const res = await axios.get(`${state.DOMAIN}/algorithm/result`, {
        params: { oid, tag: state.TAG },
      });
      commit('setResultData', res.data);
      return res.data;
    },
  },
});

export default store;

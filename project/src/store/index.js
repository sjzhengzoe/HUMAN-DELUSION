import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as utils from '../utils/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // 资源是否未加载完成
    resourceLoading: true,
    // 接口是否未加载完成
    apiLoading: true,
    // 支付页数据
    payData: {},
    // 结果页数据
    resultData: {},
    // 接口域名
    DOMAIN: 'https://test.a.yushiqm.com',
    // 支付域名
    DOMAIN_PAY: 'https://test.p.yushiqm.com',
  },
  mutations: {
    setPayData(state, payload) {
      state.payData = payload;
    },
    setResultData(state, payload) {
      state.resultData = payload;
    },
    setResourceLoading(state, payload) {
      state.resourceLoading = payload;
    },
    setApiLoading(state, payload) {
      state.apiLoading = payload;
    },
  },
  actions: {
    // 对资源是否加载完成进行监控
    init({ commit }) {
      const timer = setInterval(function () {
        // 判断文档和所有子资源(图片、音视频等)已完成加载
        if (document.readyState === 'complete') {
          commit('setResourceLoading', false);
          clearInterval(timer);
        }
      }, 500);
    },
    // 首页 - 获取产品配置数据 获取id
    async getConfigData({ state }) {
      const { channel, params } = utils.urlParams();
      const res = await axios.get(`${state.DOMAIN}/product/config`, {
        params: { tag: 'hunyinceshi', channel },
      });
      const id = res.data?.product?.id;
      utils.setLocal({ id, channel, params, tag: 'hunyinceshi' });
    },
    // 首页 - 下单接口 获取oid
    async postOrder({ state }, data) {
      console.log(state);
      const res = await await axios.post(`${state.DOMAIN}/order/order`, {
        ...data,
        tag: 'hunyinceshi',
      });
      const oid = res.data?.oid;
      utils.setLocal({ oid });
    },

    // 支付页 || 结果页 - 获取订单信息
    async getPayData({ state, commit }, { oid } = {}) {
      const oidData = oid || utils.getLocal().oid;

      const res = await await axios.get(`${state.DOMAIN}/order/find`, {
        params: { oid: oidData, tag: 'hunyinceshi' },
      });
      commit('setPayData', res.data);
    },

    // 保存手机号码
    async postMobile({ state }, params) {
      const oid = utils.getLocal()?.oid;
      await axios.post(`${state.DOMAIN}/order/bind`, { oid, tag: 'hunyinceshi', ...params });
    },

    // 获取结果页数据
    async getResultData({ state, commit }, cb = () => {}) {
      const {
        params: { oid },
      } = utils.urlParams();
      utils.setLocal({ oid });
      const res = await axios.get(`${state.DOMAIN}/algorithm/result`, {
        params: { oid, tag: 'hunyinceshi' },
      });
      // 未支付 返回首页
      if (res.data.code == 0) {
        cb();
        return;
      }
      commit('setResultData', res.data);
    },
  },
});

export default store;

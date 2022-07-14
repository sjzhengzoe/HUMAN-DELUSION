import Vue from 'vue';
import Vuex from 'vuex';
import * as Api from '../api/api.js';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isMobile: false,
    payInfo: {},
    countryCardData: null,
    countryPhotoData: null,
  },
  mutations: {
    setIsMobile(state, payload) {
      state.isMobile = payload;
    },
    setPayInfo(state, payload) {
      state.payInfo = { ...state.payInfo, ...payload };
    },
    setCountryCardData(state, payload) {
      state.countryCardData = payload;
    },
    setCountryPhotoData(state, payload) {
      state.countryPhotoData = payload;
    },
  },
  actions: {
    async getPayInfo({ commit }, { cb, payToken }) {
      const {
        data: { data, code },
      } = await Api.getDownloadInfo({ payToken });

      //  0为未支付，1为已付款，2为交易成功，3为交易关闭，4为退款
      if (code == 0 || code == 3 || code == 4) {
        commit('setPayInfo', data);
      } else {
        cb();
      }
    },

    async getCountryCard({ commit }, { code, cb }) {
      const { data } = await Api.getLinkInfo({ code });
      if (data.code == 0) {
        commit('setCountryCardData', data.data);
      } else {
        cb();
      }
    },
    // 获取 /country-photo 数据
    async getCountryPhoto({ commit }, { cb, code, photoTypeId }) {
      let countryData;
      if (code) {
        const { data } = await Api.getLinkInfo({ code });
        countryData = data;
      }
      if (photoTypeId) {
        const { data } = await Api.getDocInfo({ photoTypeId });
        countryData = data;
      }

      if (countryData.code == 0) {
        commit('setCountryPhotoData', countryData.data);
      } else {
        cb();
      }
    },
  },
});

export default store;

import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';

import getI18n from './i18n';
const i18n = getI18n();

window.i18n = i18n;

// window.i18n.locale = 'zh';
Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
  i18n,
}).$mount('#app');

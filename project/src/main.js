import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import MintUI from 'mint-ui';
import './utils/index';

Vue.config.productionTip = false;
Vue.use(MintUI);

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

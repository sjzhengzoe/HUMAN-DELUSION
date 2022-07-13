import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import MintUI from 'mint-ui';
import { Lazyload } from 'vant';

Vue.config.productionTip = false;
Vue.use(MintUI);

// 懒加载
Vue.use(Lazyload, {
  lazyComponent: true,
});

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

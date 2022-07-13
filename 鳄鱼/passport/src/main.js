import Vue from 'vue';
import router from './router';
import store from './store';
import App from './App';
import './index.less';
import 'view-design/dist/styles/iview.css';
import vConsole from 'vconsole';

import { Message } from 'view-design';
const DOMAIN = 'http://test.zhaopianhuandise.com';
new vConsole();
Vue.config.productionTip = false;
Vue.filter('download', (link) => {
  if (!link) return null;
  const arr = link.split('/');
  const fileName = arr[arr.length - 1];
  return `${DOMAIN}/doc/download/${fileName}`;
});
Message.config({ top: 300, duration: 5 });
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});

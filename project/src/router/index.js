import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Pay from '../pages/Pay';
import Result from '../pages/Result';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/home', component: Home },
  { path: '/pay', component: Pay },
  { path: '/result', component: Result },
];

const router = new VueRouter({
  routes,
  base: '',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: () => import('../pages/Home') },
  { path: '/home', component: () => import('../pages/Home') },
  { path: '/use', component: () => import('../pages/Use') },
  { path: '/pay', component: () => import('../pages/Pay') },
  { path: '/find', component: () => import('../pages/Find') },
  { path: '/country-card', component: () => import('../pages/CountryCard') },
  { path: '/country-photo', component: () => import('../pages/CountryPhoto') },
  { path: '/download', component: () => import('../pages/Download') },
  { path: '/faq', component: () => import('../pages/Faq') },
  { path: '*', redirect: '/' },
];

const router = new VueRouter({
  routes,
  base: process.env.env == 'development' ? '/' : '/',
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
});

export default router;

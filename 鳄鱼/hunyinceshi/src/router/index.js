import Vue from "vue";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: "/", component: () => import("../pages/Home") },
  { path: "/home", component: () => import("../pages/Home") },
  { path: "/pay", component: () => import("../pages/Pay") },
  { path: "/result", component: () => import("../pages/Result") },
];


const router = new VueRouter({
  routes,
  base:process.env.env == "development" ? "/hunyinceshi/dist/" : "/hunyinceshi/",
  // mode: 'hash',
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
});

/*router.beforeEach((to, from, next) => {
  const agent = navigator.userAgent.toLowerCase();
  const isAndroid = agent.indexOf('android') > -1 || agent.indexOf('adr') > -1; //android终端
  if(agent.indexOf('baidu') > 0 && isAndroid) {
    const url = window.location.origin + window.location.pathname + window.location.search + '#' + to.fullPath
    window.location.replace(url)
  }
  next()
})*/

export default router;

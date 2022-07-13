const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.env === 'development' ? '/hycs/dist/' : 'https://s.xymlcs.com/hycs/',
  lintOnSave: true,
  filenameHashing: process.env.env == 'development',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.entry('main').add('babel-polyfill');
    config.entry.app = ['babel-polyfill', './src/main.js'];
    config.plugin('define').tap((args) => {
      args[0]['DEFINE_DOMAIN'] = JSON.stringify(
        process.env.env === 'development' ? 'https://test.a.yushiqm.com' : 'https://a.xymlcs.com'
      );
      args[0]['DEFINE_DOMAIN_PAY'] = JSON.stringify(
        process.env.env === 'development' ? 'https://test.p.yushiqm.com' : 'https://p2.xyzscs.com'
      );
      args[0]['PROCESS_ENV'] = JSON.stringify(process.env.env);
      return args;
    });
  },
});

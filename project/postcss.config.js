const postcss = require('postcss-pxtorem')({
  rootValue: 75,
  propList: ['*'],
});

module.exports = () => {
  return {
    plugins: [[postcss]],
  };
};

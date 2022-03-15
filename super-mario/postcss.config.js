const postcss = require('postcss-px2rem')({
  remUnit: 75,
});

module.exports = () => {
  return {
    plugins: [
      [postcss],
      // postcss,
    ],
  };
};

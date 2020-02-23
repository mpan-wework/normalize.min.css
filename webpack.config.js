module.exports = {
  mode: 'production',
  optimization: {
    minimizer: [
      new (require('terser-webpack-plugin'))({}),
      new (require('optimize-css-assets-webpack-plugin'))({
        cssProcessorPluginOptions: { preset: [ 'default', { discardComments: { removeAll: true, } } ] },
      }),
    ],
  },
  plugins: [new (require('mini-css-extract-plugin'))({ filename: 'normalize.min.css' })],
  module: {
    rules: [{ test: /\.css$/i, use: [require('mini-css-extract-plugin').loader, 'css-loader'] }],
  },
};

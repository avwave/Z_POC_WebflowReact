// config-overrides.js

const { override, useBabelRc, addWebpackPlugin } = require('customize-cra');
const { ESBuildMinifyPlugin } = require('esbuild-loader');


module.exports = override(
  useBabelRc(),
  addWebpackPlugin(
    new ESBuildMinifyPlugin({
      css: true, // Minify CSS
    }),
  ),
);
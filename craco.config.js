/* eslint-disable @typescript-eslint/no-require-imports */
const CracoLessPlugin = require('craco-less');

const path = require('path');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  webpack: {
    alias: {
      '@': path.resolve('src'),
    },
  },
};

const custom = require('./webpack.config.js');

module.exports = {
  stories: ['../src/**/stories/*.stories.tsx'],
  webpackFinal: async (config, { configType }) => {
    return {
      ...config,
      module: {
        rules: [...config.module.rules, ...custom.module.rules],
      },
      resolve: {
        ...config.resolve,
        extensions: [...config.resolve.extensions, ...custom.resolve.extensions],
      },
      plugins: [...config.plugins, ...custom.plugins],
    };
  },
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
};

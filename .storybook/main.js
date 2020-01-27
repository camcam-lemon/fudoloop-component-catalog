const path = require('path');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');
const custom = require('./webpack.config.js');

module.exports = {
  stories: ['../src/stories/*.stories.tsx', '../src/**/stories/*.stories.mdx'],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.(stories|story)\.mdx$/,
        use: [
          {
            loader: 'babel-loader',
            // may or may not need this line depending on your app's setup
            options: {
              plugins: ['@babel/plugin-transform-react-jsx'],
            },
          },
          {
            loader: '@mdx-js/loader',
            options: {
              compilers: [createCompiler({})],
            },
          },
        ],
      },
      {
        test: /\.stories\.[tj]sx?$/,
        use: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { injectParameters: true },
          },
        ],
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
      },
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: require.resolve('ts-loader'),
            options: {
              transpileOnly: true,
            },
          },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
    );
    config.resolve.extensions.push('ts', 'tsx', 'json');
    return config;
  },
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-links/register',
    '@storybook/addon-storysource/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs/register',
  ],
  presets: [
    {
      name: '@storybook/addon-docs/preset',
      options: {
        configureJSX: true,
        sourceLoaderOptions: null,
      },
    },
  ],
};

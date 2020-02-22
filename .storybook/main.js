const babelrc = require('./babel.config.js');

module.exports = {
  stories: ['../src/**/stories/**/*.stories.tsx'],
  webpackFinal: async config => {
    // styled-componentsでsvgをラップするとbabelの設定がバッティングして
    // エラーを引き起こすのを回避するために設定を上書きしている
    config.module.rules[0].use[0].options = {
      babelrc: false,
      cacheDirectory: true,
      ...babelrc,
    };
    config.module.rules.push(
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
      {
        test: /\.stories\.tsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/source-loader'),
            options: { parser: 'typescript' },
          },
        ],
        enforce: 'pre',
      },
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource/register',
  ],
};

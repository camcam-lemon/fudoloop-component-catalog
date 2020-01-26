const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          // {
          //   loader: require.resolve('ts-loader'),
          //   options: {
          //     transpileOnly: true,
          //   },
          // },
          {
            loader: require.resolve('react-docgen-typescript-loader'),
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: true,
      //   eslint: true,
      watch: '../src',
      tsconfig: '../',
    }),
  ],
};

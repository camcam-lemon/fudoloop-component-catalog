const presets = [
  [
    '@babel/preset-env',
    {
      targets: { ie: 11 },
      modules: false,
    },
  ],
  '@babel/preset-react',
];
const plugins = [
  [
    'babel-plugin-styled-components',
    {
      ssr: false,
      minify: true,
      pure: true,
      transpileTemplateLiterals: true,
      fileName: false,
    },
  ],
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-dynamic-import',
];

module.exports = { presets, plugins };

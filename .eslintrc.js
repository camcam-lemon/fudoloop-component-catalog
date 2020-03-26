const OFF = 0;
const WARNING = 1;
const ERROR = 2;

// airbnbルールでfor...ofのみ許可
const NO_RESTRICTED_SYNTAX_OPTION = [
  {
    selector: 'ForInStatement',
    message:
      'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
  },
  {
    selector: 'LabeledStatement',
    message:
      'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  },
  {
    selector: 'WithStatement',
    message:
      '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  },
];

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    useJSXTextNode: false,
    project: './tsconfig.json',
  },
  env: {
    node: true,
    es6: true,
    jest: true,
    browser: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      WARNING,
      {
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'all',
        jsxBracketSameLine: false,
      },
    ],
    'no-console': OFF,
    'no-alert': OFF,
    'import/first': OFF,
    'import/prefer-default-export': OFF,
    'import/no-extraneous-dependencies': OFF,
    'no-plusplus': OFF,
    'react/jsx-props-no-spreading': OFF,
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/explicit-member-accessibility': OFF,
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/prefer-interface': OFF,
    '@typescript-eslint/no-unnecessary-type-assertion': ERROR,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {
        varsIgnorePattern: '^_',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrorsIgnorePattern: 'e|err',
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      {
        typedefs: false, // ESLint側が対応されていなくて動かない
      },
    ],
    'max-len': [ERROR, 100],
    curly: [ERROR, 'multi-or-nest'],
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': WARNING,
    // 'react/sort-comp': [
    //   ERROR,
    //   {
    //     order: [
    //       'state',
    //       'defaultProps',
    //       'static-methods',
    //       'constructor',
    //       'lifecycle',
    //       'everything-else',
    //       'render',
    //     ],
    //   },
    // ],
    'react/jsx-filename-extension': [
      ERROR,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      ERROR,
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-restricted-syntax': [ERROR, ...NO_RESTRICTED_SYNTAX_OPTION],
  },
};

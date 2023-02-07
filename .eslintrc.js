module.exports = {
  parser: '@babel/eslint-parser',
  env: {
    es6: true,
  },
  extends: ['plugin:react/recommended', 'prettier', 'airbnb'],
  plugins: ['prettier', 'react', 'react-native', 'jsx-a11y'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-use-before-define': 0,
    'no-console': 0,
    'no-shadow': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [0, {}],
    'import/no-unresolved': [0, { caseSensitive: false }],
    'import/no-extraneous-dependencies': [0, { devDependencies: false, optionalDependencies: false, peerDependencies: false }],
    'react/jsx-indent-props': [0, {}],
    'import/prefer-default-export': 0,
    'global-require': [0, {}],
    'max-len': 0,
    'react/jsx-props-no-spreading': 0,
    'object-curly-newline': [0, 'never'],
    'no-plusplus': 0,
    'no-extra-boolean-cast': 0,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'arrow-parens': ["as-needed"],
    requireConfigFile: false,
  },
};

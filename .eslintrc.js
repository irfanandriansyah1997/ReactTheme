module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    jasmine: true
  },
  extends: 'airbnb',
  rules: {
    // allow async-await
    'generator-star-spacing': 0,
    // user defined rules
    'arrow-parens': [1, 'as-needed'],
    'no-undef': 0,
    'space-before-function-paren': ['error', 'always'],
    quotes: [1, 'single'],
    semi: [1, 'never'],
    'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: true }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prefer-stateless-function': 0,
    'max-len': [
      2,
      {
        code: 100
      }
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'comma-dangle': ['error', 'never']
  }
}

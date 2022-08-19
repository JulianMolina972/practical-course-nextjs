module.export = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'next',
    'next/core-web-vitals',
    '@salesforce/eslint-config-lwc/recommended',
  ],
  rules: {
    'semi': ['error', 'always'],
  },
  parserOptions: {
      'sourceType': 'module',
      'ecmaVersion': 2020,
  }
}
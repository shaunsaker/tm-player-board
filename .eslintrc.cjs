const ERROR = 'error'
const OFF = 0

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort', 'react-hooks'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-unused-vars': [ERROR, { args: 'all', argsIgnorePattern: '^_' }],
    'simple-import-sort/imports': ERROR,
    'simple-import-sort/exports': ERROR,
    'react/no-unescaped-entities': OFF,
    'react/display-name': OFF,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
    '@typescript-eslint/explicit-function-return-type': [
      ERROR,
      {
        // disable the rule for expressions, e.g. in styled-components: ({theme}) => {}
        allowExpressions: true,
      },
    ],
  },
}

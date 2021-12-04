module.exports = {
  plugins: ['simple-import-sort'],
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'import/order': 'off',
  },
};

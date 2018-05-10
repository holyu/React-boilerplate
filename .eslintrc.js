module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import', 'jest'],
  rules: { 'jsx-a11y/anchor-is-valid': ['error', { components: ['Link'], specialLink: ['to'] }] },
  overrides: [
    {
      files: ['**/*.test.js', '**/setupTests.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error',
        'react/jsx-filename-extension': 0,
      },
    },
    {
      files: ['**/setupTests.js', '**/webpack.prod.fake.js'],
      rules: {
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      },
    },
  ],
  globals: {
    document: true,
  },
};

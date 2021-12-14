module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 13,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'node', 'prettier'],
  rules: {
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'eol-last': ['error', 'always'],
    'prettier/prettier': ['warn', { singleQuote: true, trailingComma: 'none', endOfLine: 'auto' }]
  }
};

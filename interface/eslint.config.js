const { defineConfig } = require('eslint-define-config');

module.exports = defineConfig({
  languageOptions: {
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 2021, // ou ce que tu utilises pour ECMA
      sourceType: 'module',
      babelOptions: {
        presets: ['@babel/preset-react'],
      },
      requireConfigFile: false,
    },
    globals: {
      React: 'writable', // Ajoute React comme une variable globale
    },
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
  },
});

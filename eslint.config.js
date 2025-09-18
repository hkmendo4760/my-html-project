import eslintPluginJs from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: {
      js: eslintPluginJs,
    },
    rules: {
      ...eslintPluginJs.configs.recommended.rules,
    },
  },
];

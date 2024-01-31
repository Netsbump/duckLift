module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react', 'react-refresh', '@typescript-eslint', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn', // Require explicit return types for functions.
    '@typescript-eslint/no-unused-vars': 'error', // Report unused variables.
    '@typescript-eslint/no-explicit-any': 'warn', // Avoid using 'any'.
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }], // Prefer .tsx extension for React files with JSX.
    'react/prop-types': 'off', // Disable prop-types as you're using TypeScript.
    'react/jsx-props-no-spreading': 'warn', // Warn on props spreading.
    'prettier/prettier': 'error', // Report Prettier formatting errors as ESLint errors.
    'react/react-in-jsx-scope': 'off', // Disable as React 17+ doesn't require `React` to be in scope for JSX.
  },
};
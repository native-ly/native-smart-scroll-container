module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
<<<<<<< Updated upstream
    'plugin:react-hooks/recommended',
=======
    'plugin:import/errors',
    'plugin:import/typescript',
>>>>>>> Stashed changes
  ],
  plugins: ['functional', 'prettier', 'react-native'],
  env: {
    'react-native/react-native': true,
    node: true,
    jest: true,
  },
  rules: {
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}

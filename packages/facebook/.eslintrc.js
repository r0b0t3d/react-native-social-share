module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'prettier', 'import', 'module-resolver'],
    extends: [
      'airbnb',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/typescript',
      'plugin:react/recommended',
      'plugin:import/recommended',
      'prettier',
      'prettier/@typescript-eslint',
      'prettier/react',
    ],
    env: {
      browser: true,
      jasmine: true,
      jest: true,
    },
    rules: {
      'prettier/prettier': ['error'],
      '@typescript-eslint/explicit-member-accessibility': 0,
      '@typescript-eslint/no-empty-interface': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-non-null-assertion': 0,
      '@typescript-eslint/no-use-before-define': 0,
      'no-use-before-define': 0,
      '@typescript-eslint/indent': ['error', 2],
      'max-len': ['error', 150],
      'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
      'object-curly-newline': ['error', { ImportDeclaration: 'never' }],
      '@typescript-eslint/interface-name-prefix': 0,
      'class-methods-use-this': 0,
      'no-unused-vars': 0,
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_[0-9]?' }],
      'react/display-name': 0,
      'react/prop-types': 0, // not necessary as we use typescript
      'object-curly-newline': 0,
      'react/jsx-props-no-spreading': 0,
    },
    settings: {
      'import/resolver': {
        'babel-module': {},
        typescript: {},
      },
    },
    globals: {
      __DEV__: true,
    },
  };
  
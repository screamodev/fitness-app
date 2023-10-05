module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'import'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const'],
        next: '*',
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      1,
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: '@',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'auth/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'common/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'db/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'exercise-types/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'exercise/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'medias/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'muscles/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'storage/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'users/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '../**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'linebreak-style': 'off',
  },
};

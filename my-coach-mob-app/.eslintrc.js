module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    '@typescript-eslint',
    'prettier',
    'import',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: ['shared'],
        patterns: ['shared/api/*/*', 'shared/config/*/*', 'shared/lib/*/*', 'shared/ui/*/*'],
      },
    ],
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': 'off',
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off',
    'no-unsafe-optional-chaining': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'index', 'object', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'react-native',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'app',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'widgets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'features/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'entities/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/api/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/config/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/lib/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'shared/ui/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './styles',
            group: 'sibling',
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
  },
};

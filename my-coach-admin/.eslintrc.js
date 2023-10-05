module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
  ],
  plugins: ['prettier', 'import'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'padding-line-between-statements': 'off',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/space-before-blocks': 'warn',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: ['const'],
        next: '*',
      },
    ],
    '@typescript-eslint/no-restricted-imports': [
      'error',
      {
        paths: ['shared'],
        patterns: ['shared/config/*/*', 'shared/lib/*/*', 'shared/ui/*/*', 'shared/api/*/*'],
      },
    ],
    'max-len': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/no-reserved-component-names': 'off',
    quotes: ['error', 'single'],
    'vue/valid-template-root': 'off',
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      1,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'vue',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@/app/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/pages/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/widgets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/features/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/entities/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/shared/api/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/shared/config/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/shared/lib/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: '@/shared/ui/**',
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
  },
};

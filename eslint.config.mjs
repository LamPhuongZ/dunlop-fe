import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  {
    ignores: ['node_modules/', '.next/', 'dist/', 'build/', 'out/', 'public/'],
  },

  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    plugins: {
      prettier: prettier,
    },
    rules: {
      ...prettierConfig.rules,

      'prettier/prettier': [
        'error',
        {
          tabWidth: 2,
          useTabs: false,
          semi: true,
          singleQuote: true,
          printWidth: 100,
          trailingComma: 'all',
        },
      ],

      indent: 'off',
      '@typescript-eslint/indent': 'off',
    },
  },

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-console': 'warn',
    },
  },
]

export default eslintConfig

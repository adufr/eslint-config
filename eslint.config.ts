import { adufr } from './src/index'

export default adufr({
  vue: true,
  pnpm: true,
}).append(
  {
    ignores: ['src/typegen.ts'],
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
  {
    files: ['**/*.md/*'],
    rules: {
      'perfectionist/sort-imports': 'off',
      'perfectionist/sort-named-imports': 'off',
    },
  },
)

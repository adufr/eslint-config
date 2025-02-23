// import { adufr} from './dist/index.js'
import { adufr } from './src/index'

export default adufr(
  [
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
  ],
  { vue: true },
)

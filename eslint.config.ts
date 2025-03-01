import { adufr } from './src/index'

export default adufr(
  [
    {
      ignores: ['src/typegen.ts'],
    },
  ],
  {
    prettier: true,
    markdown: true,
  },
)

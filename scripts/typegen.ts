import { writeFile } from 'node:fs/promises'
import { green } from 'ansis'
import { flatConfigsToRulesDTS } from 'eslint-typegen/core'
import { builtinRules } from 'eslint/use-at-your-own-risk'
import { sxzz } from '../src/presets'

const configs = await sxzz(
  [
    {
      plugins: { '': { rules: Object.fromEntries(builtinRules) } },
    },
  ],
  { vue: true, unocss: true, pnpm: true },
)
let dts = await flatConfigsToRulesDTS(configs, {
  includeAugmentation: false,
  exportTypeName: 'Rules',
})

const configNames = configs.map((i) => i.name).filter(Boolean) as string[]
dts += `
// Names of all the configs
export type ConfigNames = ${configNames.map((i) => `'${i}'`).join(' | ')}
`

await writeFile('src/typegen.ts', dts)

console.log(green('Type definitions generated!'))

import { GLOB_EXCLUDE } from '../globs'
import { pluginIgnore } from '../plugins'
import type { Config } from '../types'

export const ignores = (): Config[] => [
  {
    ignores: GLOB_EXCLUDE,
    name: 'adufr/global-ignores',
  },
  {
    ...pluginIgnore({ strict: false }),
    name: 'adufr/gitignore',
  },
]

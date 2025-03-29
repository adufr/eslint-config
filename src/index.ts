import { sxzz, type Options } from '@sxzz/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

/**
 * Generate the ESLint config
 */
export function adufr(
  options: Options = {},
  userConfigs: Linter.FlatConfig[] = [],
): FlatConfigComposer {
  // Let sxzz handle auto-detection for any unspecified options
  return sxzz(
    options,
    // Include user's custom configs
    ...userConfigs,
  ) as FlatConfigComposer
}

export default adufr

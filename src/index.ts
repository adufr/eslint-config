import vueI18n from '@intlify/eslint-plugin-vue-i18n'
import { sxzz, type Options as SxzzOptions } from '@sxzz/eslint-config'
import type { Linter } from 'eslint'
import type { FlatConfigComposer } from 'eslint-flat-config-utils'

/**
 * Extended options interface with i18n support
 */
export interface Options extends SxzzOptions {
  /**
   * Enable Vue I18n support
   * @default false
   */
  vueI18n?: boolean
}

/**
 * Generate the ESLint config
 */
export function adufr(
  options: Options = {},
  userConfigs: Linter.Config[] = [],
): FlatConfigComposer {
  const configs: Linter.Config[] = []

  // Add Vue I18n configs if i18n is enabled
  if (options.vueI18n) {
    configs.push(
      ...vueI18n.configs['flat/recommended'],
      {
        settings: {
          'vue-i18n': {
            localeDir: './i18n/locales/*.yaml',
            messageSyntaxVersion: '^9.0.0',
          },
        },
      },
      {
        rules: {
          '@intlify/vue-i18n/no-deprecated-i18n-component': 'error',
          '@intlify/vue-i18n/no-i18n-t-path-prop': 'error',
          '@intlify/vue-i18n/no-deprecated-i18n-places-prop': 'error',
          '@intlify/vue-i18n/no-raw-text': 'error',
          '@intlify/vue-i18n/no-missing-keys': 'error',
        },
      },
    )
  }

  // Let sxzz handle auto-detection for any unspecified options
  return sxzz(
    options,
    // Include my personal configs
    ...configs,
    // Include user's custom configs
    ...userConfigs,
  ) as FlatConfigComposer
}

export default adufr

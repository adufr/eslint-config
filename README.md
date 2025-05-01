# @adufr/eslint-config [![npm](https://img.shields.io/npm/v/@adufr/eslint-config.svg)](https://npmjs.com/package/@adufr/eslint-config)

A thin wrapper around [@sxzz/eslint-config](https://github.com/sxzz/eslint-config) with the same features and configuration options.

## Install

```bash
# using pnpm
pnpm add -D eslint @adufr/eslint-config
```

## Usage

Create an `eslint.config.ts` file in your project root:

```js
import { adufr } from '@adufr/eslint-config'

export default adufr(
  {
    prettier: true, // Auto-detected if not specified
    vue: true, // Auto-detected if not specified
    unocss: false, // Auto-detected if not specified
    markdown: true,
    vueI18n: false, // Enable Vue I18n support
  },
  [
    // Your custom overrides (optional)
    {
      ignores: ['src/generated/**'],
    },
  ],
)
```

## Features

This package provides all the same features as [@sxzz/eslint-config](https://github.com/sxzz/eslint-config):

- JavaScript, TypeScript, Vue, JSX, JSON, YAML, Markdown support
- Automatic detection of installed dependencies
- Opinionated but configurable defaults

For detailed configuration options, please refer to the [@sxzz/eslint-config documentation](https://github.com/sxzz/eslint-config).

Additional features:
- Vue I18n support via [@intlify/eslint-plugin-vue-i18n](https://github.com/intlify/eslint-plugin-vue-i18n)

## License

[MIT](./LICENSE) License © 2025-PRESENT [Arthur Dufour](https://github.com/adufr)

# @adufr/eslint-config [![npm](https://img.shields.io/npm/v/@adufr/eslint-config.svg)](https://npmjs.com/package/@adufr/eslint-config)

A opinionated ESLint config preset for JavaScript, TypeScript, Vue,
and Prettier.

Forked from @sxzz's [eslint-config](https://github.com/sxzz/eslint-config)

## Features

- Format with Prettier.
- Designed to work with TypeScript, Vue out-of-box.
- Support JSON(5), YAML, Markdown...
- Sort imports, `package.json`, `tsconfig.json`...
- [ESLint Flat config](https://eslint.org/docs/latest/use/configure/configuration-files-new), compose easily!
- Ignores common files like `dist`, `node_modules`, `coverage`, and files in `.gitignore`.
- Reasonable defaults, best practices, only one-line of config
- Reasonable strict, but with better code quality.

## Install

Require Node.js >= 18.18, and ESLint >= 9.5.0.

```bash
npm i -D @adufr/eslint-config
```

## Usage

```js
import { adufr } from '@adufr/eslint-config'
export default adufr(
  // Features: it'll detect installed dependency and enable necessary features automatically
  {
    prettier: true,
    markdown: true,
    vue: true, // auto detection
    unocss: false, // auto detection
  },
  [
    /* your custom config */
  ],
).removeRules('foo/bar') // see more in https://github.com/antfu/eslint-flat-config-utils
```

### Presets

```js
// eslint.config.js
import {
  // Includes
  // - `presetBasic` (JS+TS) support
  // - `presetLangsExtensions` (markdown, yaml, jsonc) support
  // - Vue support
  // - UnoCSS support (`uno.config.ts` is required)
  // - Prettier support
  presetAll,
  presetBasic, // Includes `presetJavaScript` and typescript support
  presetJavaScript, // Ignore common files and include javascript support
  presetJsonc, // Includes basic json(c) file support and sorting json keys
  presetLangsExtensions, // Includes markdown, yaml + `presetJsonc` support
} from '@adufr/eslint-config'

export default presetAll
```

See [preset.ts](./src/presets.ts) for more details.

## License

[MIT](./LICENSE) License © 2025-PRESENT [Arthur Dufour](https://github.com/adufr)

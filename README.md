# Nuxt App Config

Extends the built-in app config feature.

## Features

- Dynamically imports data for different environments
- Organizes files with the main `config/` directory
- Supports multiple file formats _(.ts, .js, .mjs)_
- Lightweight and flexible solution
- Designed for Nuxt 3+
- TypeScript friendly
- Super easy to use
- No dependencies

## Quick Start

1. Install `nuxt-app-config` to your project

```sh
npm i -D nuxt-app-config
```

2. Enable the module in the main config file

```js
// nuxt.config.ts

{
  modules: ['nuxt-app-config'],

  config: {
    /* Module options */
  }
}
```

That's it! Start developing your app!

## Structure

Create a new `config/` directory at the project's `root`.

The module will automatically scans the directory for the required files and merge their content with the Nuxt [app config](https://nuxt.com/docs/guide/directory-structure/app-config#app-config-file) option.

Configuration parameters will be available globally depending on your current environment, for example if you are in `dev` mode you will be able to access `dev` data and vice versa.

Also, `defaults` are available in all environments and can be overridden in a specific environment if needed.

```txt
.
├── .nuxt/
│
├── config/
│   ├── defaults.ts
│   ├── development.ts
│   └── production.ts
│
└── nuxt.config.ts
```

### defaults

Contains all _default_ parameters that are available in all environments.

Also, it can be overwritten with _development_ or _production_ files if needed.

### development

Contains parameters specific to the _development_ environment.

### production

Contains parameters specific to the _production_ environment.

## Options

The module is written in TypeScript so it improves the development experience with detailed descriptions, examples, and auto-hinted configuration right in the code editor.

### Defaults

```js
// nuxt.config.ts

{
  config: {
    dir: 'config',
    files: {
      defaults: 'defaults',
      development: 'development',
      production: 'production'
    }
  }
}
```

### dir

- Type: `string`
- Default: `config`

Specifies the name for the _config_ directory.

Feel free to rename it as needed.

```js
{
  dir: 'app-config'
}
```

Use it like this:

```txt
├── app-config/
│   │── defaults.ts
│   │── development.ts
│   └── production.ts
```

### files

- Type: `object`
- Default: `{ ... }`

Specifies the file names that will be used in the _config_ directory.

All files supports `.ts`, `.js`, and `.mjs` formats.

### files.defaults

- Type: `string`
- Default: `defaults`

Specifies the name for the _defaults_ file.

```js
{
  defaults: 'def'
}
```

Use it in the directory:

```txt
├── config/
│   └── def.ts
```

### files.development

- Type: `string`
- Default: `development`

Specifies the name for the _development_ file.

```js
{
  development: 'dev'
}
```

Use it in the directory:

```txt
├── config/
│   └── dev.ts
```

### files.production

- Type: `string`
- Default: `production`

Specifies the name for the _production_ file.

```js
{
  production: 'prod'
}
```

Use it in the directory:

```txt
├── config/
│   └── prod.ts
```

## Show Support

This is a free and open source project available to everyone. If you like it, `leave a star` to show your support.

### Starring a repository

Navigate to the top-right corner of the page and click the <kbd>☆ Star</kbd> button.

## License

### Nuxt App Config

[MIT License](LICENSE)

Copyright © Ivo Dolenc

Developed in Croatia 🇭🇷

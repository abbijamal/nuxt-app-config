import type { FilesOptions } from './files'

/**
 * Module options.
 *
 * @since 1.0.0
 */
export interface ModuleOptions {
  /**
   * Specifies the name for the `config` directory.
   *
   * Feel free to rename it as needed.
   *
   * @example
   *
   * ```js
   * {
   *   dir: 'app-config'
   * }
   * ```
   *
   * Use it like this:
   *
   * ```txt
   * ├── app-config/
   * │   │── defaults.ts
   * │   │── development.ts
   * │   └── production.ts
   * ```
   *
   * @default 'config'
   */
  dir?: string
  /**
   * Specifies the file names that will be used in the `config` directory.
   *
   * All files supports `.ts`, `.js`, and  `.mjs` formats.
   *
   * @default FilesOptions
   */
  files?: FilesOptions
}

declare module '@nuxt/schema' {
  interface NuxtConfig {
    /**
     * Nuxt App Config
     *
     * Extends the built-in app config feature.
     *
     * @see [source](https://github.com/ivodolenc/nuxt-app-config)
     */
    config?: ModuleOptions
  }
  interface NuxtOptions {
    /**
     * Nuxt App Config
     *
     * Extends the built-in app config feature.
     *
     * @see [source](https://github.com/ivodolenc/nuxt-app-config)
     */
    config?: ModuleOptions
  }
}

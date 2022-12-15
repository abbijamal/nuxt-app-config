/**
 * Files options.
 *
 * @since 1.0.0
 */
export interface FilesOptions {
  /**
   * Specifies the name for the `defaults` file.
   *
   * Contains all `default` parameters that are available in all environments.
   *
   * Also, it can be overwritten with `development` or `production` files if needed.
   *
   * @example
   *
   * ```js
   * {
   *   defaults: 'def'
   * }
   * ```
   *
   * Use it in the directory:
   *
   * ```txt
   * ├── config/
   * │   └── def.ts
   * ```
   *
   * @default 'defaults'
   */
  defaults?: string
  /**
   * Specifies the name for the `development` file.
   *
   * Contains parameters specific to the `development` environment.
   *
   * @example
   *
   * ```js
   * {
   *   development: 'dev'
   * }
   * ```
   *
   * Use it in the directory:
   *
   * ```txt
   * ├── config/
   * │   └── dev.ts
   * ```
   *
   * @default 'development'
   */
  development?: string
  /**
   * Specifies the name for the `production` file.
   *
   * Contains parameters specific to the `production` environment.
   *
   * @example
   *
   * ```js
   * {
   *   production: 'prod'
   * }
   * ```
   *
   * Use it in the directory:
   *
   * ```txt
   * ├── config/
   * │   └── prod.ts
   * ```
   *
   * @default 'production'
   */
  production?: string
}

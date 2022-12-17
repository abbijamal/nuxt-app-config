/**
 * Directories options.
 *
 * @since 1.0.1
 */
export interface DirsOptions {
  /**
   * Specifies path to the `config/` directory.
   */
  srcDir: string
  /**
   * Specifies path to the `.nuxt/config/` directory.
   *
   * This is used only for the transpiled `typescript` files.
   */
  distDir: string
}

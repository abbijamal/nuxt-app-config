/**
 * Contains all `default` parameters that are available in all environments.
 *
 * Also, it can be overwritten with `development` or `production` files if needed.
 */
interface Defaults {
  name: string
  title: string
}

const defaults: Defaults = {
  name: 'Nuxt Static Boilerplate',
  title: 'Default Title'
}

export default defaults

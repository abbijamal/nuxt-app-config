/**
 * Contains parameters specific to the `development` environment.
 */
interface Development {
  url: string
  name: string
}

const development: Development = {
  url: 'http://localhost:3000',
  name: 'Development Static Boilerplate'
}

export default development

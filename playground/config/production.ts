/**
 * Contains parameters specific to the `production` environment.
 */
interface Production {
  url: string
  title: string
}

const production: Production = {
  url: 'https://www.website.com',
  title: 'Production Title'
}

export default production

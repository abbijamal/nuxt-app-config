import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: ['defu', 'fast-glob', 'typescript']
})

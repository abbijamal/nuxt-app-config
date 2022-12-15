import { existsSync } from 'node:fs'
import defu from 'defu'
import { defineNuxtModule } from '@nuxt/kit'
import { parseFiles, importFile } from './utils'
import type { ModuleOptions } from './types'

export * from './types'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-app-config',
    configKey: 'config',
    compatibility: {
      nuxt: '>=3.0.0'
    }
  },

  defaults: {
    dir: 'config',
    files: {
      defaults: 'defaults',
      development: 'development',
      production: 'production'
    }
  },

  async setup(moduleOptions, nuxt) {
    const { dev, srcDir } = nuxt.options
    const { dir, files } = moduleOptions
    const configDir = `${srcDir}/${dir}`

    if (existsSync(configDir)) {
      const { defFile, devFile, proFile } = await parseFiles(configDir, files)

      if (defFile || devFile || proFile) {
        const defImport = await importFile(configDir, defFile)
        const devImport = await importFile(configDir, devFile)
        const proImport = await importFile(configDir, proFile)

        const environment = dev ? devImport : proImport
        const config: any = defu({}, environment, defImport)

        nuxt.options.appConfig = config
      }
    }
  }
})

import { existsSync } from 'node:fs'
import { defu } from 'defu'
import { defineNuxtModule } from '@nuxt/kit'
import { parseFiles, importFile } from './utils'
import type { ModuleOptions, DirsOptions } from './types'

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
    const { dev, srcDir: _srcDir, buildDir } = nuxt.options
    const { dir, files } = moduleOptions

    const dirs: DirsOptions = {
      srcDir: `${_srcDir}/${dir}`,
      distDir: `${buildDir}/${dir}`
    }

    if (existsSync(dirs.srcDir)) {
      const { defFile, devFile, proFile } = await parseFiles(dirs, files)

      if (defFile || devFile || proFile) {
        const defImport = await importFile(dirs, defFile)
        const devImport = await importFile(dirs, devFile)
        const proImport = await importFile(dirs, proFile)

        const environment = dev ? devImport : proImport
        const config: object = defu({}, environment, defImport)

        nuxt.options.appConfig = config
      }
    }
  }
})

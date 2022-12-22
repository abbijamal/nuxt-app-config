import { existsSync, mkdirSync } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { transform } from 'esbuild'
import type { DirsOptions } from '../types'

/**
 * Dynamically imports a specific file.
 *
 * @since 1.0.0
 */
export const importFile = async (dirs: DirsOptions, _file: string) => {
  const { srcDir, distDir } = dirs

  let file = {}
  const [name, ,] = _file.split(/\.(?=[^.]+$)/)
  const fileSrc = `${srcDir}/${_file}`
  const fileDist = `${distDir}/${name}.mjs`

  if (_file.includes('.ts')) {
    const ts = await readFile(fileSrc)
    const transformed = await transform(ts.toString(), { loader: 'ts' })

    if (!existsSync(distDir)) mkdirSync(distDir, { recursive: true })
    await writeFile(fileDist, transformed.code)

    file = (await import(fileDist)).default
  } else if (_file) {
    file = (await import(fileSrc)).default
  }

  return file
}

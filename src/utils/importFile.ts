import { existsSync } from 'node:fs'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import tsc from 'typescript'
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
  const options = { compilerOptions: { module: tsc.ModuleKind.ESNext } }

  if (_file.includes('.ts')) {
    const ts = await readFile(fileSrc)
    const transpile = tsc.transpileModule(ts.toString(), options).outputText

    if (!existsSync(distDir)) await mkdir(distDir, { recursive: true })
    await writeFile(fileDist, transpile)

    file = (await import(fileDist)).default
  } else if (_file) {
    file = (await import(fileSrc)).default
  }

  return file
}

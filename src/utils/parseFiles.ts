import fg from 'fast-glob'
import type { FilesOptions } from '../types'

/**
 * Filters the required file from the list.
 *
 * @since 1.0.0
 */
const filterFile = (files: string[], name: string) => {
  let file = ''

  if (!files.length) return file

  const exists = files.filter(f => f.includes(name))

  if (exists[0]) file = exists[0]

  return file
}

/**
 * Scans all the files in the directory and parses the required ones.
 *
 * @since 1.0.0
 */
export const parseFiles = async (configDir: string, files?: FilesOptions) => {
  const defName = files?.defaults as string
  const devName = files?.development as string
  const proName = files?.production as string

  const getFiles = await fg([`${configDir}/*.{ts,js,mjs}`])
  const parsedFiles: string[] = []

  if (getFiles.length) {
    for (const file of getFiles) {
      const newFile = file.split('/').pop() as string

      parsedFiles.push(newFile)
    }
  }

  const defFile = filterFile(parsedFiles, defName)
  const devFile = filterFile(parsedFiles, devName)
  const proFile = filterFile(parsedFiles, proName)

  return {
    defFile,
    devFile,
    proFile
  }
}

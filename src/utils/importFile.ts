/**
 * Dynamically imports a specific file.
 *
 * @since 1.0.0
 */
export const importFile = async (dir: string, _file: string) => {
  const fileSrc = `${dir}/${_file}`
  let file = {}

  if (_file) file = await import(`${fileSrc}`)

  return file
}

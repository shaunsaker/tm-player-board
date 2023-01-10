import { execCommand } from './execCommand'
import { log } from './log'

export const copyFile = async ({
  inputPath,
  outputPath,
}: {
  inputPath: string
  outputPath: string
}): Promise<void> => {
  log(`Copying ${inputPath} to ${outputPath}...`)

  await execCommand(`cp ${inputPath} ${outputPath}`)

  log(`Copied!`, 'success')
}

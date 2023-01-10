import * as fs from 'fs'
import * as path from 'path'
import pngToIco from 'png-to-ico'

import { createPng } from './createPng'
import { execCommand } from './execCommand'
import { log } from './log'

const CURRENT_WORKING_DIRECTORY = process.env.PWD || __dirname
const TEMP_PATH_16 = path.join(CURRENT_WORKING_DIRECTORY, './temp-16.png')
const TEMP_PATH_32 = path.join(CURRENT_WORKING_DIRECTORY, './temp-32.png')

export const createFavicon = async ({
  inputPath,
  outputPath,
}: {
  inputPath: string
  outputPath: string
}): Promise<void> => {
  // convert the image to pngs
  log(`Converting ${inputPath} to 16px png...`)
  await createPng({ inputPath, outputPath: TEMP_PATH_16, size: 16, quality: 100 })
  log(`Converted!`, 'success')

  log(`Converting ${inputPath} to 32px png...`)
  await createPng({ inputPath, outputPath: TEMP_PATH_32, size: 32, quality: 100 })
  log(`Converted!`, 'success')

  // convert the pngs to ico
  log(`Converting ${TEMP_PATH_16} and ${TEMP_PATH_32} to favicon at ${outputPath}...`)
  await pngToIco([TEMP_PATH_16, TEMP_PATH_32]).then(buffer => {
    fs.writeFileSync(outputPath, buffer)
  })
  log(`Converted!`, 'success')

  // remove the temporary images
  log(`Removing temp file at ${TEMP_PATH_16}...`)
  await execCommand(`rm ${TEMP_PATH_16}`)
  log(`Removed!`, 'success')

  log(`Removing temp file at ${TEMP_PATH_32}...`)
  await execCommand(`rm ${TEMP_PATH_32}`)
  log(`Removed!`, 'success')
}

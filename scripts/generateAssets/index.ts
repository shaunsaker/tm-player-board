import * as path from 'path'

import { copyFile } from '../utils/copyFile'
import { createFavicon } from '../utils/createFavicon'
import { createPng } from '../utils/createPng'
import { ensureFileDirExists } from '../utils/ensureFileDirExists'

const CURRENT_WORKING_DIRECTORY = process.env.PWD || __dirname
const PUBLIC_PATH = path.join(CURRENT_WORKING_DIRECTORY, './public')
const LOGO_PATH = path.join(PUBLIC_PATH, './icon.svg')

async function main(): Promise<void> {
  ensureFileDirExists(PUBLIC_PATH)

  await createFavicon({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/favicon.ico`,
  })

  await createPng({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/icon-512.png`,
    size: 512,
  })

  await createPng({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/icon-192.png`,
    size: 192,
  })

  await createPng({
    inputPath: LOGO_PATH,
    outputPath: `${PUBLIC_PATH}/apple-touch-icon.png`,
    size: 180,
  })

  // copy svg to ./src/assets for use in HeaderBar
  await copyFile({
    inputPath: LOGO_PATH,
    outputPath: path.join(CURRENT_WORKING_DIRECTORY, './src/assets/logo-icon.svg'),
  })
}

main()

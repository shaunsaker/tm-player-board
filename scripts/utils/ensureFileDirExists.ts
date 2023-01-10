import * as fs from 'fs'

import { log } from './log'

export const ensureFileDirExists = (dir: string): void => {
  log(`Ensuring ${dir} exists...`)

  fs.mkdirSync(dir, { recursive: true })

  log(`Ensured! 😉`, 'success')
}

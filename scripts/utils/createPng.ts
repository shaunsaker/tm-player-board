import sharp from 'sharp'

import { log } from './log'

export const createPng = async ({
  inputPath,
  outputPath,
  size,
  quality = 70,
}: {
  inputPath: string
  outputPath: string
  size: number
  quality?: number
}): Promise<void> => {
  log(`Creating png from ${inputPath} at ${outputPath} with size ${size}px...`)

  await sharp(inputPath).png({ quality }).resize({ width: size, height: size }).toFile(outputPath)

  log(`Created!`, 'success')
}

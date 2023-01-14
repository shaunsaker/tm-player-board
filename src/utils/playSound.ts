import { Howl, HowlOptions } from 'howler'

export const playSound = (filepath: string, options?: Omit<HowlOptions, 'src'>): void => {
  // stop any previously playing sounds
  Howler.stop()

  const sound = new Howl({
    src: [filepath],
    ...options,
  })

  sound.play()
}

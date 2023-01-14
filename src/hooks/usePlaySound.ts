import { HowlOptions } from 'howler'
import { useCallback } from 'react'

import { useSoundSetting } from '../store/soundSetting/useSoundSetting'
import { playSound } from '../utils/playSound'

export const usePlaySound = (
  filepath: string,
  options?: Omit<HowlOptions, 'src'>,
): (() => void) => {
  const [soundEnabled] = useSoundSetting()

  const playSoundCb = useCallback(() => {
    if (soundEnabled) {
      playSound(filepath, options)
    }
  }, [filepath, options, soundEnabled])

  return playSoundCb
}

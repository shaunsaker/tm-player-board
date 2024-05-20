import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const starsAnimationEnabledAtom = atomWithStorage('starsAnimationEnabled', true, undefined, {
  getOnInit: true,
})

export const useStarsAnimationEnabled = () => useAtom(starsAnimationEnabledAtom)

import { atom, useAtom } from 'jotai'

export type GameTabs = 'actions' | 'summary'

const activeGameTabAtom = atom<GameTabs>('actions')

export const useActiveGameTab = () => useAtom(activeGameTabAtom)

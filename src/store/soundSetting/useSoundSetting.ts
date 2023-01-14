import { BooleanParam, useQueryParam, withDefault } from 'use-query-params'

export const useSoundSetting = (): [boolean, (newValue: boolean) => void] => {
  return useQueryParam('sound', withDefault(BooleanParam, true))
}

import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { RoutePaths } from '../../Router'

export const useGoBack = (): (() => void) => {
  const navigate = useNavigate()

  const onBackClick = useCallback(() => {
    navigate(RoutePaths.home)
  }, [navigate])

  return onBackClick
}

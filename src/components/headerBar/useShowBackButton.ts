import { useMatch } from 'react-router-dom'

import { RoutePaths } from '../../Router'

export const useShowBackButton = (): boolean => {
  // show a back button if we're not on the home route
  const isHomeRoute = useMatch(RoutePaths.home)
  const showBackButton = !isHomeRoute

  return showBackButton
}

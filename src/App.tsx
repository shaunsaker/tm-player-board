import React, { ReactElement } from 'react'

import { AppProvider } from './components/appProvider/AppProvider'
import { initMixpanel } from './mixpanel'
import { Router } from './Router'

initMixpanel()

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

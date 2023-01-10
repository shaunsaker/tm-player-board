import React, { ReactElement } from 'react'

import { AppProvider } from './components/appProvider/AppProvider'
import { Router } from './Router'

export const App = (): ReactElement => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}

import React, { ReactElement } from 'react'

import { AppProvider } from '../components/appProvider/AppProvider'
import { MockRouter } from './MockRouter'

type TestWrapperProps = {
  children: ReactElement
}

export const TestWrapper = ({ children }: TestWrapperProps): ReactElement => (
  <AppProvider>
    <MockRouter>{children}</MockRouter>
  </AppProvider>
)

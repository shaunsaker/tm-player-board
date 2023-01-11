import React, { ReactElement } from 'react'

import { AppProvider } from '../components/appProvider/AppProvider'
import { RouterMock } from './RouterMock'

type TestWrapperProps = {
  children: ReactElement
}

export const TestWrapper = ({ children }: TestWrapperProps): ReactElement => (
  <AppProvider>
    <RouterMock>{children}</RouterMock>
  </AppProvider>
)

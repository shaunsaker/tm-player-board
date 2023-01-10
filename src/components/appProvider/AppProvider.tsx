import React, { ReactElement } from 'react'
import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../theme/theme'
import { CustomScrollbar } from '../customScrollbar/CustomScrollbar'
import { GlobalStyles } from '../globalStyles/GlobalStyles'

type Props = { children: ReactNode }

export const AppProvider = ({ children }: Props): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <CustomScrollbar />

      {children}
    </ThemeProvider>
  )
}

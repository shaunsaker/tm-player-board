import { DefaultTheme } from 'styled-components'

import appJson from '../../app.json'

const BLACK_50 = 'rgba(1, 0, 9, 0.5)'

export const theme: DefaultTheme = {
  colors: {
    accent: appJson.themeColor,
    black100: '#010009',
    black80: 'rgba(1, 0, 9, 0.8)',
    black50: BLACK_50,
    white100: '#FFFFFF',
    white60: 'rgba(255, 255, 255, 0.6)',
    white20: 'rgba(255, 255, 255, 0.2)',
    red: '#ff6347',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 32,
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 16,
  },
  shadows: {
    md: `0px 4px 4px 0px ${BLACK_50}`,
  },
  transition: {
    default: '0.167s all ease-out',
  },
  breakpoints: {
    mobile: 425,
  },
}

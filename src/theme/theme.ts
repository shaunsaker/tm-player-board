import { DefaultTheme } from 'styled-components'

import appJson from '../../app.json'
import { hexToRgb } from '../utils/hexToRgb/hexToRgb'

const THEME_COLOR = appJson.themeColor
const BLACK_50 = 'rgba(1, 0, 9, 0.5)'

export const theme: DefaultTheme = {
  colors: {
    accent: THEME_COLOR,
    accent80: `rgba(${hexToRgb(THEME_COLOR)}, 0.8)`,
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
    sm: 2,
    md: 4,
    lg: 8,
  },
  shadows: {
    md: `0px 4px 4px 0px ${BLACK_50}`,
  },
  transition: {
    default: '0.167s all ease-out',
  },
  breakpoints: {
    tablet: 767,
    mobile: 425,
    mobileSm: 374,
  },
  elements: {
    inputs: 40,
  },
  maxWidths: {
    content: 480,
    button: 160,
  },
}

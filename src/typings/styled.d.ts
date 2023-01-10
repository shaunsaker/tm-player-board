import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      accent: string
      black100: string
      black80: string
      black50: string
      white100: string
      white60: string
      white20: string
      red: string
    }
    spacing: {
      xs: number
      sm: number
      md: number
      lg: number
    }
    radius: {
      sm: number
      md: number
      lg: number
    }
    shadows: {
      md: string
    }
    transition: {
      default: string
    }
    breakpoints: {
      mobile: number
    }
  }
}

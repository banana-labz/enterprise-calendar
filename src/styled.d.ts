import "styled-components"

interface Size {
  small: number
  medium: number
  large: number
  extraLarge: number
}

declare module "styled-components" {
  export interface DefaultTheme {
    fontSize: Size
    metrics: Size
    fontWeight: {
      thin: number
      regular: number
      semiBold: number
      bold: number
    }
    palette: {
      blue: string
      lightBlue: string
      white: string
      black: string
      red: string
      grey: string
      lightGrey: string
      lighterGrey: string
    }
  }
}

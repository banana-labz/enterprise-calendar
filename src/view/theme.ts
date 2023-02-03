import { createGlobalStyle, DefaultTheme } from "styled-components"

export const defaultTheme: DefaultTheme = {
  metrics: {
    small: 4,
    medium: 8,
    large: 16,
    extraLarge: 32,
  },
  fontSize: {
    small: 12,
    medium: 14,
    large: 16,
    extraLarge: 20,
  },
  fontWeight: {
    thin: 200,
    regular: 400,
    semiBold: 500,
    bold: 700,
  },
  palette: {
    blue: "#0BB5F4",
    lightBlue: "#B1EAFF",
    white: "#FFFFFF",
    black: "#000000",
    lightGrey: "#ECECEC",
    lighterGrey: "#F5F5F5",
    grey: "#808080",
    red: "#FF0000",
  },
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: "Ubuntu", sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`

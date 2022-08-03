import { createGlobalTheme } from '@vanilla-extract/css'

export const vars = createGlobalTheme(":root", {
  colors: {
    primary: {
      light: "#e6e",
      main: "#e2e",
      dark: "#c0e",
    },
    secondary: "#ee2",
  },
})
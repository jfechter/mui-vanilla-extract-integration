import type { AppProps } from "next/app"
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles"
import { rawBreakpoints, vars } from "../styles/theme.css"
import { muiVarsOverwrite } from "../styles/globals.css"

const theme = extendTheme({
  breakpoints: {
    values: {
      ...rawBreakpoints,
      // we don't use XL, so it's the same value as lg
      xl: 1440,
    },
  },
  typography: {
    fontFamily: vars.font.body,
    fontSize: 16,
  },
  shape: {
    borderRadius: 16
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={theme}>
      <div className={muiVarsOverwrite}>
        <Component {...pageProps} />
      </div>
    </CssVarsProvider>
  )
}

export default MyApp

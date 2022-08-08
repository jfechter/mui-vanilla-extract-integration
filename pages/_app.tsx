import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles"
import { rawBreakpoints } from '../styles/theme.css'

const theme = extendTheme({
  breakpoints: {
    values: {
      ...rawBreakpoints,
      // we don't use XL, so it's the same value as lg
      xl: 1440,
    },
  },
  typography: {
    fontFamily: "DM Sans",
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CssVarsProvider theme={theme}>
      <Component {...pageProps} />
    </CssVarsProvider>
  )
}

export default MyApp

import type { AppProps } from "next/app"
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  StyledEngineProvider
} from "@mui/material/styles"
import { rawBreakpoints, vars } from "@styles/theme.css"
import { muiVarsOverwrite } from "@styles/globals.css"

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
    borderRadius: 16,
  },
  components: {
    // not sure if we'll end up using <OutlinedInput /> components
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            opacity: 1,
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "212px",
          height: "56px",
          textTransform: "capitalize",
        },
        outlined: {
          borderColor: vars.colors.cream.cream3,
          color: vars.colors.black,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        track: {
          height: "3px"
        },
        rail: {
          backgroundColor: vars.colors.cream.cream3,
          opacity: 1,
          height: "3px"
        },
        valueLabel: {
          backgroundColor: vars.colors.cerulean.cerulean5,
          borderRadius: vars.borderRadius.large,
          fontSize: vars.fontSize.body2,
          height: "36px"
        },
      },
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider theme={theme}>
        <div className={muiVarsOverwrite}>
          <Component {...pageProps} />
        </div>
      </CssVarsProvider>
    </StyledEngineProvider>
  )
}

export default MyApp

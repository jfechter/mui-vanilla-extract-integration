import { style } from "@vanilla-extract/css";
import { sprinkles } from "./sprinkles.css";
import { vars } from './theme.css'

export const mainContainer = style({
  padding: '20px',
  vars: {
    '--mui-palette-primary-main': vars.colors.primary.main,
    '--mui-palette-primary-light': vars.colors.primary.light,
    '--mui-palette-primary-dark': vars.colors.primary.dark,
  }
})
import { style } from "@vanilla-extract/css"
import { sprinkles } from "./sprinkles.css"
import { vars } from "./theme.css"

export const mainContainer = style({
  padding: "20px",
  vars: {
    "--mui-palette-primary-main": vars.colors.cerulean.cerulean5,
    "--mui-palette-primary-light": vars.colors.cerulean.cerulean3,
    "--mui-palette-primary-dark": vars.colors.cerulean.cerulean7,
  },
})

export const sstyle = sprinkles({
  background: "tertiary",
  fontFamily: "dm",
  color: "secondary",
  fontSize: "body2",
  padding: {
    xs: 2,
  },
})

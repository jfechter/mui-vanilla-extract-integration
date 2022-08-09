import { style, globalStyle, globalFontFace } from "@vanilla-extract/css"
import { vars } from "./theme.css";

globalFontFace("DM Sans", {
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'fallback',
  src: "url('/fonts/DM_Sans/dmsans-regular-webfont.woff')"
})

globalFontFace("GalaxieCopernicus", {
  fontStyle: 'normal',
  fontWeight: 400,
  fontDisplay: 'fallback',
  src: "url('/fonts/Galaxie_Copernicus/GalaxieCopernicus-Book.otf')"
})

globalStyle('html, body', {
  padding: 0,
  margin: 0,
  fontFamily: vars.font.body,
  backgroundColor: vars.colors.cerulean.cerulean5,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
})

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box'
})

export const muiVarsOverwrite = style({
  vars: {
    "--mui-palette-primary-main": vars.colors.cerulean.cerulean5,
    "--mui-palette-primary-light": vars.colors.cerulean.cerulean3,
    "--mui-palette-primary-dark": vars.colors.cerulean.cerulean7,

    "--mui-shape-borderRadius": vars.borderRadius.large
  },
})
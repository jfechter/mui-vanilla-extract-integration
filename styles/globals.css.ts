import { globalStyle, globalFontFace } from "@vanilla-extract/css"
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
  backgroundColor: vars.colors.cream.cream1,
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none'
})

globalStyle('*', {
  boxSizing: 'border-box'
})

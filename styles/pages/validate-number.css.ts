import { style } from "@vanilla-extract/css"
import { sprinkles } from "../sprinkles.css"
import { fromBreakpoint, untilBreakpoint, vars } from "../theme.css"

export const mobileTransparentCard = style({
  background: "transparent",
  boxShadow: "var(--mui-shadows-0)",

  "@media": {
    [untilBreakpoint.sm]: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    [fromBreakpoint.sm]: {
      background: vars.colors.white,
      boxShadow: "var(--mui-shadows-1)",
    },
  },
})

export const noPaddingOnMobile = style({
  "@media": {
    [untilBreakpoint.sm]: {
      padding: 0,
    },
  },
})

export const cardMedia = style({
  minHeight: "286px",
  "@media": {
    [fromBreakpoint.md]: {
      minHeight: "208px",
    },
  },
})

export const button = style({
  minWidth: "212px",
  height: "56px",
  textTransform: "capitalize"
})
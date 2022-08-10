import { untilBreakpoint, vars } from "@styles/theme.css"
import { style } from "@vanilla-extract/css"

export const backButtonContainer = style({
  "@media": {
    [untilBreakpoint.sm]: {
      position: "absolute",
      top: vars.spacing[5],
      left: vars.spacing[3],
    }
  }
})

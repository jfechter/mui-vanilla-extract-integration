import { style } from "@vanilla-extract/css"
import { sprinkles } from "@styles/sprinkles.css"
import { untilBreakpoint, vars } from "@styles/theme.css"

export const mainCta = style([
  sprinkles({
    position: { xs: "fixed", sm: "relative" },
    left: 0,
    right: 0,
    bottom: 0,
  }),
  {
    "@media": {
      [untilBreakpoint.sm]: {
        borderRadius: vars.borderRadius.none,
      },
    },
  },
])

import { calc } from '@vanilla-extract/css-utils'
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { breakpoints, vars } from "./theme.css"
import mapValues from "lodash/mapValues"

const negativeSpace = {
  ["-xsmall"]: `${calc(vars.spacing[0]).negate()}`,
  ["-small"]: `${calc(vars.spacing[1]).negate()}`,
  ["-medium"]: `${calc(vars.spacing[2]).negate()}`,
  ["-large"]: `${calc(vars.spacing[3]).negate()}`,
  ["-xlarge"]: `${calc(vars.spacing[4]).negate()}`,
  ["-xxlarge"]: `${calc(vars.spacing[5]).negate()}`,
  ["-xxxlarge"]: `${calc(vars.spacing[6]).negate()}`,
}

const margins = {
  ...vars.spacing,
  ...negativeSpace,
}

const responsiveProperties = defineProperties({
  conditions: mapValues(breakpoints, (bp) =>
  bp === "0" ? {} : { "@media": bp }
),
  defaultCondition: "xs",
  properties: {
    position: ["absolute", "relative", "fixed", "sticky"],
    display: ["none", "block", "inline", "inline-block", "flex", "grid"],
    alignItems: ["flex-start", "center", "flex-end"],
    justifyContent: [
      "flex-start",
      "center",
      "flex-end",
      "space-between",
      "space-around",
    ],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    paddingTop: vars.spacing,
    paddingBottom: vars.spacing,
    paddingLeft: vars.spacing,
    paddingRight: vars.spacing,
    marginTop: margins,
    marginBottom: margins,
    marginLeft: margins,
    marginRight: margins,
    pointerEvents: ["none", "auto"],
    overflow: ["hidden", "visible"],
    opacity: ["0", "0.3", "0.7", "1"],
    order: [0, 1, 2, 3, 4],
    textAlign: ["left", "center"],
    textTransform: ["none", "lowercase", "uppercase", "capitalize"],
    // maxWidth: vars.contentWidth,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
  },
})

const sprinklesColors = {
  ...vars.colors.context,
  ...vars.colors.cerulean,
  ...vars.colors.ocean,
}

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: sprinklesColors,
    background: sprinklesColors,
  },
})

const fontProperties = defineProperties({
  properties: {
    fontFamily: vars.font,
    fontSize: vars.fontSize,
    fontWeight: vars.fontWeight,
    lineHeight: vars.lineHeight,
    letterSpacing: vars.letterSpacing
  },
})

export const sprinkles = createSprinkles(
  responsiveProperties,
  colorProperties,
  fontProperties
)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]

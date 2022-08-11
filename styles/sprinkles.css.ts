import { calc } from '@vanilla-extract/css-utils'
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles"
import { fromBreakpoint, vars } from "./theme.css"
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
  conditions: mapValues(fromBreakpoint, (bp) =>
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
    gap: vars.spacing,
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
    maxWidth: vars.contentWidth,
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
  ...vars.colors.papaya,
  ...vars.colors.cream,
}

const unresponsiveProperties = defineProperties({
  properties: {
    flexWrap: ["wrap", "nowrap"],
    gridColumn: [
      "span 1",
      "span 2",
      "span 3",
      "span 4",
      "span 5",
      "span 6",
      "span 7",
      "span 8",
      "span 9",
      "span 10",
      "span 11",
      "span 12",
    ],
    top: [0],
    bottom: [0],
    left: [0],
    right: [0],
    flexShrink: [0],
    flexGrow: [0, 1],
    zIndex: [-1, 0, 1, 2, 3, 4],
    width: { full: "100%" },
    userSelect: ["none"],
    cursor: ["pointer"],
    aspectRatio: ["1"],
    transition: ["all 0.3s", "all 0.6s", "all 1s", "all 1.5s"],
    whiteSpace: ["normal", "nowrap"],
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
  unresponsiveProperties,
  fontProperties
)

// It's a good idea to export the Sprinkles type too
export type Sprinkles = Parameters<typeof sprinkles>[0]

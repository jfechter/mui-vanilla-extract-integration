import { sprinkles } from "@styles/sprinkles.css"
import { vars } from "@styles/theme.css"
import { style } from "@vanilla-extract/css"

export const cardResting = style({
  boxShadow: "var(--mui-shadows-1)",
})

export const cardSelected = style({
  boxShadow: "var(--mui-shadows-6)",
})

export const cardFaded = sprinkles({
  color: "cream4"
})
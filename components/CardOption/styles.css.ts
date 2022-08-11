import { sprinkles } from "@styles/sprinkles.css"
import { vars } from "@styles/theme.css"
import { style } from "@vanilla-extract/css"

export const card = sprinkles({
  transition: "all 0.3s",
  background: "cream2",
  textAlign: "center",
  display: "flex",
})

export const cardSelected = style([
  sprinkles({
    color: "white"
  }),
  {
    background: vars.colors.cerulean.cerulean5
  }
])

import { recipe } from "@vanilla-extract/recipes"
import { sprinkles } from "../../styles/sprinkles.css"

export const textRecipe = recipe({
  variants: {
    font: {
      heading: sprinkles({
        fontFamily: "heading",
      }),
      body: sprinkles({
        fontFamily: "body",
      }),
    },
    variant: {
      h1: sprinkles({
        fontSize: "h1",
      }),
      h2: sprinkles({
        fontSize: "h2",
      }),
      h3: sprinkles({
        fontSize: "h3",
      }),
      subheading1: sprinkles({
        fontSize: "subheading1",
      }),
      subheading2: sprinkles({
        fontSize: "subheading2",
      }),
      body1: sprinkles({
        fontSize: "body1",
      }),
      body2: sprinkles({
        fontSize: "body2",
      }),
      legal: sprinkles({
        fontSize: "legal",
      }),
    },
  },
  compoundVariants: [
    // Copernicus
    {
      variants: {
        font: "heading",
        variant: "h1",
      },
      style: sprinkles({
        lineHeight: "1.4",
        letterSpacing: "-2%",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "h2",
      },
      style: sprinkles({
        lineHeight: "1.4",
        letterSpacing: "-2%",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "h3",
      },
      style: sprinkles({
        lineHeight: "1.4",
        letterSpacing: "-2%",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "subheading1",
      },
      style: sprinkles({
        lineHeight: "1.4",
        letterSpacing: "-1%",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "subheading2",
      },
      style: sprinkles({
        lineHeight: "1.4",
        letterSpacing: "-1%",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "body1",
      },
      style: sprinkles({
        fontWeight: "500",
        lineHeight: "1.5",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "body2",
      },
      style: sprinkles({
        fontWeight: "500",
        lineHeight: "1.5",
      }),
    },
    {
      variants: {
        font: "heading",
        variant: "legal",
      },
      style: sprinkles({
        fontWeight: "500",
        lineHeight: "1.5",
        letterSpacing: "1%",
      }),
    },
    // DM Sans
    {
      variants: {
        font: "body",
        variant: "h1",
      },
      style: sprinkles({
        lineHeight: "1.1",
        letterSpacing: "1%",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "h2",
      },
      style: sprinkles({
        lineHeight: "1.2",
        letterSpacing: "-0.5%",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "h3",
      },
      style: sprinkles({
        lineHeight: "1.3",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "subheading1",
      },
      style: sprinkles({
        lineHeight: "1.4",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "subheading2",
      },
      style: sprinkles({
        lineHeight: "1.4",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "body1",
      },
      style: sprinkles({
        lineHeight: "1.5",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "body2",
      },
      style: sprinkles({
        lineHeight: "1.5",
      }),
    },
    {
      variants: {
        font: "body",
        variant: "legal",
      },
      style: sprinkles({
        lineHeight: "1.5",
        letterSpacing: "1%"
      }),
    },
  ],
})

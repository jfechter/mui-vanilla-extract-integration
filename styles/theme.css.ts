import { createGlobalTheme } from '@vanilla-extract/css'

const BASE_COLORS = {
  cerulean: {
    cerulean1: "#DBF7FF",
    cerulean2: "#ACE0EF",
    cerulean3: "#7CC8DF",
    cerulean4: "#4DB1CE",
    cerulean5: "#1D99BE",
    cerulean6: "#1988A8",
    cerulean7: "#157893",
    cerulean8: "#10677D",
  },
  ocean: {
    ocean1: "#C0E4EB",
    ocean2: "#90C8D4",
    ocean3: "#6DA9B5",
    ocean4: "#386E78",
    ocean5: "#0C5968",
    ocean6: "#084652",
    ocean7: "#043B45",
    ocean8: "#002F38",
  },
  plantain: {
    plantain1: "#FFEBBF",
    plantain2: "#FFDE99",
    plantain3: "#FECA5B",
    plantain4: "#FECA5B",
    plantain5: "#FDBB2E",
    plantain6: "#E59100",
    plantain7: "#CC7A00",
    plantain8: "#945600",
  },
  papaya: {
    papaya1: "#FFD7CB",
    papaya2: "#F9B49F",
    papaya3: "#F09D84",
    papaya4: "#EE805E",
    papaya5: "#E8633A",
    papaya6: "#BE502F",
    papaya7: "#953E23",
    papaya8: "#80351D",
  },
  cream: {
    cream1: "#FCFAF5",
    cream2: "#F5F2EB",
    cream3: "#D9D5CC",
    cream4: "#A8A39B",
    cream5: "#8C8881",
    cream6: "#716E68",
    cream7: "#55524E",
    cream8: "#3A3835",
  },
}

export const vars = createGlobalTheme(":root", {
  colors: {
    context: {
      primary: BASE_COLORS.cerulean.cerulean5,
      secondary: BASE_COLORS.cream.cream1,
      tertiary: BASE_COLORS.plantain.plantain5,
      optional1: BASE_COLORS.ocean.ocean5,
      optional2: BASE_COLORS.papaya.papaya5,
    },
    ...BASE_COLORS,
  },
})
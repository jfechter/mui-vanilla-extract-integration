import { createElement, AllHTMLAttributes, ElementType, Ref } from 'react'
import cn from 'classnames'
// import * as resetStyles from '../styles/reset.css'
import { sprinkles, Sprinkles } from '../../styles/sprinkles.css'

export interface BoxProps
  extends Omit<
      AllHTMLAttributes<HTMLElement>,
      'content' | 'height' | 'translate' | 'color' | 'width' | 'cursor' | 'size'
    >,
    Sprinkles {
  component?: ElementType
  innerRef?: Ref<HTMLElement>
  [key: string]: any
}

export const Div = ({
  component = 'div',
  className,
  aspectRatio,
  boxShadow,
  padding,
  paddingX,
  paddingY,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  margin,
  marginX,
  marginY,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  maxWidth,
  gap,
  display,
  overflow,
  alignItems,
  justifyContent,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  borderRadius,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
  gridColumn,
  position,
  top,
  bottom,
  left,
  right,
  background,
  color,
  order,
  width,
  zIndex,
  opacity,
  pointerEvents,
  cursor,
  textAlign,
  textTransform,
  transition,
  userSelect,
  fontSize,
  fontWeight,
  fontFamily,
  lineHeight,
  whiteSpace,
  innerRef,
  ...restProps
}: BoxProps) => {
  // TODO: get reset to work https://github.com/seek-oss/vanilla-extract/discussions/301
  const atomClasses = sprinkles({
    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    margin,
    marginX,
    marginY,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    maxWidth,
    gap,
    display,
    overflow,
    alignItems,
    justifyContent,
    flexWrap,
    flexShrink,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
    borderBottomLeftRadius,
    flexGrow,
    flexDirection,
    position,
    gridColumn,
    top,
    bottom,
    left,
    right,
    background,
    color,
    order,
    width,
    zIndex,
    opacity,
    pointerEvents,
    cursor,
    textAlign,
    fontSize,
    fontWeight,
    fontFamily,
    lineHeight,
    whiteSpace,
    textTransform,
    transition,
    userSelect,
  })

  return createElement(component, {
    className: cn(atomClasses, className),
    ref: innerRef,
    ...restProps
  })
}

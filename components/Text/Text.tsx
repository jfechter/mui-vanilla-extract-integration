import cn from "classnames"
import { Div } from "../Div"
import { vars } from "../../styles/theme.css"
import { IUIComponent } from "../../types"
import * as styles from "./styles.css"

interface IProps extends IUIComponent {
  font?: keyof typeof vars.font
  variant: keyof typeof vars.fontSize
  children: any
}

const variantToTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subheading1: "p",
  subheading2: "p",
  body1: "p",
  body2: "p",
  legal: "p",
}

export function Text({ font = 'body', variant, children, className, ...rest }: IProps) {
  return (
    <Div
      component={variantToTag[variant]}
      className={cn(
        className,
        styles.textRecipe({
          font,
          variant,
        })
      )}
      {...rest}
    >
      {children}
    </Div>
  )
}

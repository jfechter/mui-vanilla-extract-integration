import { Div } from "../Div"
import { vars } from "../../styles/theme.css"
import { IUIComponent } from "../../types"
import * as styles from "./styles.css"

interface IProps extends IUIComponent {
  font: keyof typeof vars.font
  variant: keyof typeof vars.fontSize
  children: any
}

const variantToTag = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  subheading1: "p",
  subheading2: "p",
  body1: "small",
  body2: "small",
  legal: "small",
}

export function Text({ font, variant, children, ...rest }: IProps) {
  return (
    <Div
      component={variantToTag[variant]}
      className={styles.textRecipe({
        font,
        variant,
      })}
      {...rest}
    >
      {children}
    </Div>
  )
}

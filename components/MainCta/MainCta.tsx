import { Button, ButtonProps } from "@mui/material"
import cn from "classnames"

import * as styles from "./styles.css"

interface IProps extends ButtonProps {
  [key: string]: any
}

export function MainCta({ ...rest }: IProps) {
  return (
    <Button variant="contained" className={cn(styles.mainCta)} {...rest}>
      Next
    </Button>
  )
}
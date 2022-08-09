import { Button } from "@mui/material"
import cn from "classnames"

import * as styles from "./styles.css"

export function MainCta() {
  return (
    <Button variant="contained" className={cn(styles.button, styles.mainCta)}>
      Next
    </Button>
  )
}
import { Button } from "@mui/material"
import cn from "classnames"

import * as styles from "./styles.css"

export function MainCta() {
  return (
    <Button variant="contained" className={cn(styles.mainCta)}>
      Next
    </Button>
  )
}
import { Button, IconButton } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import * as styles from "./styles.css"
import { Div } from "@components/Div"
import { IUIComponent } from "types"
import Link from "next/link"

interface IProps extends IUIComponent {
  href: string
}

export function BackButton({ href }: IProps) {
  return (
    <Div className={styles.backButtonContainer}>
      <Div component={IconButton} display={{ sm: "none" }}>
        {/* TODO: replace this with the custom SVGIcon: https://mui.com/material-ui/icons/#svgicon */}
        <ArrowBackIcon />
      </Div>
      <Link href={href}>
        <Div
          component={Button}
          variant="outlined"
          display={{ xs: "none", sm: "flex" }}
        >
          Back
        </Div>
      </Link>
    </Div>
  )
}
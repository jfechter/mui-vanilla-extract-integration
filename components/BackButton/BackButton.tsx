import { Button, IconButton } from "@mui/material"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import * as styles from "./styles.css"
import { Div } from "@components/Div"

export function BackButton() {
  return (
    <Div className={styles.backButtonContainer}>
      <Div component={IconButton} display={{ sm: "none" }}>
        {/* TODO: replace this with the custom SVGIcon: https://mui.com/material-ui/icons/#svgicon */}
        <ArrowBackIcon />
      </Div>
      <Div
        component={Button}
        variant="outlined"
        display={{ xs: "none", sm: "flex" }}
      >
        Back
      </Div>
    </Div>
  )
}
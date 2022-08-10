import { Div } from "@components/Div"
import * as styles from "./styles.css"

interface IProps {
  children: any
}

export function Page({ children }: IProps) {
  return (
    <Div background="cream1" className={styles.page}>
      {children}
    </Div>
  )
}
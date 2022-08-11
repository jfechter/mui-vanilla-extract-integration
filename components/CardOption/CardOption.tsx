import { Div } from "@components/Div"
import { Text } from "@components/Text"
import { Card, CardActionArea, CardContent } from "@mui/material"
import cn from "classnames"
import { IUIComponent } from "types"

import * as styles from "./styles.css"

interface IProps extends IUIComponent {
  label: string
  selected: boolean
  onClick: (value: any) => void
  icon?: any
}

export function CardOption({ label, selected, onClick, className, ...rest }: IProps) {
  return (
    <Card
      elevation={0}
      className={cn(
        className,
        styles.card,
        {
          [styles.cardSelected]: selected
        }
      )}
    >
      <CardActionArea onClick={onClick}>
        <Div component={CardContent} {...rest}>
          <Text variant="body1">{label}</Text>
        </Div>
      </CardActionArea>
    </Card>
  )
}

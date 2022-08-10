import { IUIComponent } from "types"
import cn from "classnames"
import { Div } from "@components/Div"
import { useState } from "react"

interface IProps extends IUIComponent {
  children: (
    value: {
      selectedCard: string,
      setSelectedCard: (card: string) => void
    }
  ) => any
}

export function CardPicker({ children, className, style }: IProps) {
  const [selectedCard, setSelectedCard] = useState('')

  return (
    <Div className={cn(className)}>
      {children({
        selectedCard,
        setSelectedCard
      })}
    </Div>
  )
}

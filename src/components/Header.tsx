import { HeaderArea } from "./Header.style"
import { HeaderType } from "../assets/types/Header"

export const Header = (props: HeaderType) => {
  return (
    <HeaderArea
      css={{
        display: props.display,
        margin: props.margin,
        position: props.position,
        padding: props.padding,
        alignItems: props.alignItems,
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        gridTemplateArea: props.gridTemplateArea,
        gridTemplateRows: props.gridTemplateRows,
        gridTemplateColumns: props.gridTemplateColumns
      }}
    >
      {props.children}
    </HeaderArea>
  )
}
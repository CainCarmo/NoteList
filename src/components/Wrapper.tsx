import { WrapperArea } from "./Wrapper.style"
import { WrapperType } from "../assets/types/Wrapper"

export const Wrapper = (props: WrapperType) => {
  return (

    <WrapperArea
      css={{
        display: props.display,
        gap: props.gap,
        margin: props.margin,
        position: props.position,
        padding: props.padding,
        alignItems: props.alignItems,
        flexDirection: props.flexDirection,
        justifyContent: props.justifyContent,
        gridTemplateArea: props.gridTemplateArea,
        gridTemplateRows: props.gridTemplateRows,
        gridTemplateColumns: props.gridTemplateColumns,
      }}
    >
      {props.children}
    </WrapperArea>

  )
}
import WrapperArea from "./Wrapper.style"
import WrapperType from "../assets/types/Wrapper"

const Wrapper = (props: WrapperType) => {
  return (

    <WrapperArea
      css={{
        display: props.display,
        margin: props.margin,
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
    </WrapperArea>

  )
}

export default Wrapper
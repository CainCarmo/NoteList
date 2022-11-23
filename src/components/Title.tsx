import TitleArea from "./Title.style"
import TitleType from "../assets/types/Title"

const Title = (props: TitleType) => {
  return (
    <TitleArea css={{ fontSize: props.fontSize }}>
      {props.text}
    </TitleArea>
  )
}

export default Title
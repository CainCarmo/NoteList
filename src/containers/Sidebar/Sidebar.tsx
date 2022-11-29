import { Link } from "react-router-dom"

import { Wrapper } from "../../components/Wrapper"
import { SidebarArea, Logo, Option } from "./Sidebar.style"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faChartSimple, faGear, faRightFromBracket } from "@fortawesome/free-solid-svg-icons"

export const Sidebar = () => {
  return (
    <SidebarArea>
      <Wrapper display="flex" alignItems="center" padding="0 1.5rem">
        <Logo>.note<strong>list</strong></Logo>
      </Wrapper>
      <Wrapper display="flex" alignItems="center" flexDirection="column">
        <Link to="/home">
          <Option>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Option>
        </Link>
        <Link to="/status">
          <Option>
            <FontAwesomeIcon icon={faChartSimple} />
            <span>Status</span>
          </Option>
        </Link>
        <Link to="/configuration">
          <Option>
            <FontAwesomeIcon icon={faGear} />
            <span>Configurações</span>
          </Option>
        </Link>
      </Wrapper>
      <Wrapper display="flex" alignItems="center" flexDirection="column" padding="50px 0 0 0">
        <Option>
          <FontAwesomeIcon icon={faRightFromBracket} />
          <span>Logout</span>
        </Option>
      </Wrapper>
    </SidebarArea>
  )
}
import Wrapper from "../../components/Wrapper"
import { DashboardArea, Header, Search, UserArea } from "./Dashboard.style"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faInbox, faChevronDown } from "@fortawesome/free-solid-svg-icons"

import Icon from "../../assets/icon/user.jpg"

const Dashboard = () => {
  return (
    <DashboardArea>
      <Header>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Wrapper position="relative" display="flex" alignItems="center">
            <input
              type="text"
              name="search__input"
              id="search__input"
              placeholder="Digite aqui . . ."
            />
            <div className="underline"></div>
          </Wrapper>
        </Search>
        <UserArea>
          <FontAwesomeIcon icon={faInbox} />
          <Wrapper display="flex" alignItems="center" justifyContent="end">
            <div className="user__name">
              <span>Cainã Carmo</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <img src={Icon} alt="Foto do Usuário" />
          </Wrapper>
        </UserArea>
      </Header>
    </DashboardArea>
  )
}

export default Dashboard
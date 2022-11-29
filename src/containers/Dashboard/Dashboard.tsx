import { Wrapper } from "../../components/Wrapper"
import { DashboardArea, Header, Search, UserArea } from "./Dashboard.style"

import Icon from "../../assets/icon/user.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faInbox, faChevronDown } from "@fortawesome/free-solid-svg-icons"

import { Routing } from "../../routes"

export const Dashboard = () => {
  return (
    <DashboardArea>
      <Header>
        <Search>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <Wrapper position="relative" display="flex" alignItems="center">
            <input
              type="text"
              id="search__input"
              name="search__input"
              placeholder="Procure por algo . . ."
            />
          </Wrapper>
        </Search>
        <UserArea>
          <FontAwesomeIcon icon={faInbox} />
          <Wrapper display="flex" alignItems="center" justifyContent="end">
            <div className="user__name">
              <span>Cainã Carmo</span>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            <figure id="user__picture">
              <img src={Icon} alt="Foto do Usuário" />
            </figure>
          </Wrapper>
        </UserArea>
      </Header>
      <Routing />
    </DashboardArea>
  )
}
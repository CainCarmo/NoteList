import { Helmet } from "react-helmet-async"

import { Title } from "../../components/Title"
import { Header } from "../../components/Header"
import { Wrapper } from "../../components/Wrapper"

import { HomeArea } from "./Home.style"

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | NoteList</title>
      </Helmet>

      <HomeArea>
        <Header display="flex" alignItems="center" justifyContent="space-between">
          <Title fontSize="1.5em" text="Anotações" />
          <select id="header__select">
            <option value="all"  >Todos</option>
            <option value="day"  >Neste Dia</option>
            <option value="week" >Nesta Semana</option>
            <option value="month">Nesta Semana</option>
            <option value="year" >Neste Ano</option>
          </select>
        </Header>
        <Wrapper display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="10px">
        </Wrapper>
      </HomeArea>
    </>
  )
}
import { Helmet } from "react-helmet-async"

import { Header } from "../../components/Header"
import { Title } from "../../components/Title"

import { ConfigurationArea } from "./Configuration.style"

export const Configuration = () => {
  return (
    <>
      <Helmet>
        <title>Configuração | NoteList</title>
      </Helmet>

      <ConfigurationArea>
        <Header display="flex" alignItems="center" justifyContent="start">
          <Title fontSize="1.5em" text="Configurações" />
        </Header>
      </ConfigurationArea>
    </>
  )
}

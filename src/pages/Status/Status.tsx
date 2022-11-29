import { Helmet } from "react-helmet-async"

import { Header } from "../../components/Header"
import { Title } from "../../components/Title"

import { StatusArea } from "./Status.style"

export const Status = () => {
  return (
    <>
      <Helmet>
        <title>Status | NoteList</title>
      </Helmet>

      <StatusArea>
        <Header display="flex" alignItems="center" justifyContent="start">
          <Title fontSize="1.5em" text="Status" />
        </Header>
      </StatusArea>
    </>
  )
}
import { styled } from "../../environments/stitches.config"

export const DashboardArea = styled("div", {
  height: "100vh",
  width: "100%",
  display: "grid",
  gridTemplateRows: "1fr 9fr",
  padding: "0 2rem"
})

export const Header = styled("header", {
  height: "auto",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "7fr 3fr",
  alignItems: "center",
  padding: "1rem 0"
})

export const Search = styled("div", {
  height: "auto",
  width: "70%",
  display: "flex",
  alignItems: "center",
  fontSize: "1em",
  borderRadius: "10px",
  backgroundColor: "#F2DEBA",
  "& > svg": {
    margin: "0 20px"
  },
  "& > div > #search__input": {
    width: "100%",
    position: "relative",
    fontSize: ".9em",
    padding: "1rem .5rem",
    backgroundColor: "transparent"
  }
})

export const UserArea = styled("div", {
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  "& > svg": {
    fontSize: "1.3em",
    padding: ".5rem",
    transition: ".4s",
    borderRadius: "50%",
    cursor: "pointer"
  },
  "& > svg:hover": {
    backgroundColor: "#3A8891"
  },
  "& > div": {
    width: "auto",
    marginLeft: "40px",
    transition: ".4s",
    paddingLeft: "10px",
    borderRadius: "50px",
    cursor: "pointer"
  },
  "& > div:hover": {
    backgroundColor: "#3A8891"
  },
  "& > div > .user__name > svg": {
    fontSize: ".6em",
    margin: "0 15px 0 5px"
  },
  "#user__picture": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  "#user__picture > img": {
    height: "60px",
    width: "60px",
    border: "2px solid #D3AD7F",
    borderRadius: "50%"
  }
})
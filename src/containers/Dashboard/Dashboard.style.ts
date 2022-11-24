import { styled } from "../../environments/stitches.config"

export const DashboardArea = styled("div", {
  height: "100vh",
  width: "100%",
  display: "grid",
  gridTemplateRows: "1fr 9fr"
})

export const Header = styled("header", {
  height: "auto",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "7fr 3fr",
  alignItems: "center",
  padding: "1rem 2rem ",
  // Mudar aqui
  backgroundColor: "red"
})

export const Search = styled("div", {
  height: "auto",
  width: "70%",
  display: "flex",
  alignItems: "center",
  fontSize: "1em",
  borderRadius: "10px",
  "& > svg": {
    marginRight: "20px"
  },
  "& > div > #search__input": {
    width: "100%",
    position: "relative",
    fontSize: ".9em",
    padding: "1rem .5rem",
    backgroundColor: "transparent"
  },
  "& > div > .underline::before": {
    height: "2px",
    width: "100%",
    position: "absolute",
    content: "",
    bottom: "4px",
    left: 0,
    borderRadius: "10px",
    backgroundColor: "rgba(0, 0, 0, .6)"
  },
  "& > div > .underline::after": {
    height: "2px",
    width: "100%",
    position: "absolute",
    content: "",
    bottom: "5px",
    left: 0,
    transition: ".3s all",
    transform: "scaleX(0)",
    borderRadius: "10px",
    backgroundColor: "#3A8891"
  },
  "#search:focus + .underline::after": {
    transform: "scaleX(1)"
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
    backgroundColor: "#F8F8FF"
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
    backgroundColor: "#F8F8FF"
  },
  "& > div > .user__name > svg": {
    fontSize: ".6em",
    margin: "0 15px 0 5px"
  },
  "& > div > img": {
    height: "50px",
    width: "50px",
    border: "2px solid #D3AD7F",
    borderRadius: "50%"
  }
})
import { styled } from "../../environments/stitches.config"

export const HomeArea = styled("main", {
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingTop: "50px",
  overflowY: "auto",
  "& > header > #header__select": {
    width: "200px",
    fontSize: "1em",
    padding: ".5rem",
    borderRadius: "10px",
    backgroundColor: "#F2DEBA",
    cursor: "pointer"
  }
})


import { styled } from "../../environments/stitches.config"

export const SidebarArea = styled("aside", {
  height: "100vh",
  width: "100%",
  display: "grid",
  gridAutoRows: "1fr 3fr 1fr",
  backgroundColor: "#F2DEBA",
  "& a": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
})

export const Logo = styled("h1", {
  fontSize: "2em",
  fontWeight: "300",
  letterSpacing: "1px"
})

export const Option = styled("li", {
  height: "auto",
  width: "90%",
  display: "grid",
  gridTemplateColumns: "1fr 9fr",
  padding: "1rem 1.5rem",
  listStyle: "none",
  fontSize: "1.1em",
  transition: ".2s all",
  borderRadius: "30px",
  backgroundColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "#3A8891"
  },
  "& > svg": {
    marginRight: "20px"
  }
})
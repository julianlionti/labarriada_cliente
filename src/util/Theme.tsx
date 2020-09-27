import { createMuiTheme } from "@material-ui/core"
import ShowCase from "../assets/fonts/showcase/ShowcaseSansMini.otf"

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary: "#df4730",
  secondary: "#ee9224",
  terciary: "#689448",
  forth: "#35b6ec"
}

export const getTheme = () =>
  createMuiTheme({
    palette: {
      primary: {
        main: colors.primary
      },
      secondary: {
        main: colors.secondary
      }
    },
    typography: {
      // fontFamily: "Showcase Sans Mini",
      // fontSize: 22,
      
      h1: {
        fontSize: 32
      }
    },
    mixins: {
      toolbar: {
        height: 150
      }
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          borderRadius: 36
        }
      },
      MuiToolbar: {
        root: {
          backgroundColor: colors.white,
          justifyContent: "space-between",
          alignItems: "stretch",
          color: colors.black
        }
      }
    }
  })

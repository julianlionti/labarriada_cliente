import { createMuiTheme } from "@material-ui/core"

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  primary: "#df4730",
  secondary: "#ee9224",
  terciary: "#689448",
  forth: "#35b6ec",
  primaryTrans: "rgba(0,0,0,0.50)"
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
      },
      MuiPaper: {
        rounded: {
          borderRadius: 0
        }
      }
    }
  })

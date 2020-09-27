import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  makeStyles
} from "@material-ui/core"
import React from "react"
import Categories from "../components/Categories"

export default () => {
  const classes = useClasses()
  return (
    <div className={classes.container}>
      <div className={classes.categorias}>
        <Categories />
      </div>
      <div className={classes.centro}>
        <span>Centro</span>
      </div>
      <div className={classes.derecha}>
        <span>Derecha</span>
      </div>
    </div>
  )
}

const useClasses = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center"
  },
  categorias: {},
  centro: {
    // flex: 1,
    backgroundColor: "red",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flex: 1
  },
  derecha: {
    backgroundColor: "green",
    width: 250
  }
}))

import {
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core"
import React from "react"
import { FaQuestionCircle } from "react-icons/fa"
import { colors } from "../util/Theme"

interface Categories {
  id: string
  nombre: string
}

export default () => {
  const classes = useClasses()

  const categorias: Categories[] = [
    { nombre: "Almacén", id: "almacen" },
    { nombre: "Frutas y verduras", id: "frutas_verduras" },
    { nombre: "Frescos", id: "frescos" },
    { nombre: "Panificados", id: "panificados" },
    { nombre: "Cosmética natural", id: "cosmetica" },
    { nombre: "Higiene y limpieza", id: "higiene_limpieza" },
    { nombre: "Veggie", id: "veggie" },
    { nombre: "Sin TACC", id: "sin_tacc" },
    { nombre: "Otras categorías", id: "otras" }
  ]

  return (
    <Paper>
      <List
        component="nav"
        subheader={
          <div className={classes.container}>
            <div className={classes.ribon}>
              <FaQuestionCircle className={classes.icon} />
              <Typography variant="body1">Categorias</Typography>
            </div>
          </div>
        }
      >
        {categorias.map(({ nombre, id }) => (
          <ListItem key={id} dense button className={classes.root} divider>
            <ListItemText primary={nombre} />
          </ListItem>
        ))}
      </List>
    </Paper>
  )
}

const useClasses = makeStyles((theme) => ({
  root: {
    width: 250
  },
  header: {
    backgroundColor: colors.terciary,
    color: theme.palette.common.white,
    display: "flex",
    alignItems: "center"
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  container: {
    width: 250,
    height: 50,
    boxShadow: theme.shadows[2],
    marginBottom: theme.spacing(1),
    color: theme.palette.common.white
  },
  ribon: {
    position: "absolute",
    width: 260,
    height: 50,
    backgroundColor: colors.terciary,
    top: 0,
    left: -10,
    boxShadow: theme.shadows[5],
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(4),
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: -10,
      left: 0,
      borderLeft: "5px solid transparent",
      borderRight: `5px solid ${colors.terciary}`,
      borderTop: `5px solid ${colors.terciary}`,
      borderBottom: "5px solid transparent"
    }
  }
}))

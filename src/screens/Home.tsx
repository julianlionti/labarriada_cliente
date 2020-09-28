import { Card, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import Categories from "../components/Categories"
import News from "../components/News"

export default () => {
  const classes = useClasses()
  return (
    <div className={classes.container}>
      <div className={classes.categorias}>
        <Categories />
      </div>
      <div className={classes.centro}>
        <News />
      </div>
      <div className={classes.derecha}>
        <Card className={`${classes.cartas} ${classes.entrega}`}>
          <Typography variant="h5">Fecha de próxima entrega:</Typography>
          <Typography variant="h3">17/10</Typography>
        </Card>
        <Card className={`${classes.cartas} ${classes.cierre}`}>
          <Typography variant="h5">Cierre de Periodo</Typography>
          <Typography variant="h3">25/10</Typography>
        </Card>
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
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    flex: 1
  },
  derecha: {},
  titulo: {},
  cartas: {
    width: 250,
    height: 200,
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: theme.palette.common.white,
    padding: theme.spacing(1)
  },
  entrega: {
    backgroundColor: theme.palette.primary.main
  },
  cierre: {
    backgroundColor: theme.palette.secondary.main
  }
}))

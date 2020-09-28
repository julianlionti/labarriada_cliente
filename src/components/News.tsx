import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Paper,
  Typography
} from "@material-ui/core"
import { Pagination } from "@material-ui/lab"
import { zIndex } from "material-ui/styles"
import React, { useCallback, useEffect, useMemo, useState } from "react"
import Slider from "react-slick"
import { colors } from "../util/Theme"

interface Noticias {
  imagen: string
  titulo: string
  descripcion: string
}

const paginas: Noticias[] = [
  {
    titulo: "Primer noticia",
    descripcion: "sad salkdasjlk djaslk djsalk djsakl djsalkd jklas e",
    imagen: "https://via.placeholder.com/500"
  },
  {
    titulo: "Segunda noticia",
    descripcion: "j aljkdhaskj dhsajk dhsakj djka",
    imagen: "https://via.placeholder.com/510"
  },
  {
    titulo: "Tecera noticia",
    descripcion:
      "sad asdsa das das dasl djsañkld jsalkd jsalk djlksa jdlkasjklas e",
    imagen: "https://via.placeholder.com/520"
  },
  {
    titulo: "Cuarta noticia",
    descripcion:
      " sdafgd sagsredf hdsf hfds djaslk djsalk djsakl djsalkd jklas e",
    imagen: "https://via.placeholder.com/530"
  }
]

export default () => {
  const [page, setPage] = useState(1)
  const classes = useClasses()

  const actual = useMemo(() => paginas[page - 1], [page])

  const goForward = useCallback((val) => {
    if (val <= paginas.length) setPage(val)
    else setPage(1)
  }, [])

  return (
    <Card className={classes.container}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={actual.imagen}
          title={actual.titulo}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {actual.titulo}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {actual.descripcion}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Pagination
          page={page}
          onChange={(_, val) => goForward(val)}
          className={classes.pages}
          color="primary"
          count={paginas.length}
          defaultPage={1}
          siblingCount={0}
        />
      </CardActions>
    </Card>
  )
}

const useClasses = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.forth,
    position: "relative"
  },
  media: {
    height: 250
  },
  info: {
    backgroundColor: colors.primaryTrans,
    position: "absolute",
    height: 150,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 50
  },
  pages: {
    margin: "auto"
  }
}))

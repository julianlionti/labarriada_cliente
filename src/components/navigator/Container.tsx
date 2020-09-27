import React, { useState, ReactNode, memo, Suspense, lazy } from "react"
import {
  CssBaseline,
  makeStyles,
  CircularProgress,
  LinearProgress
} from "@material-ui/core"
import { menuWidth, RoutesProps } from "./DrawerMenu"
import { useLocation } from "react-router-dom"

const DrawerMenu = lazy(() => import("./DrawerMenu"))
const Header = lazy(() => import("./Header"))

interface Props {
  children: ReactNode
  routes: RoutesProps[]
}

export const createRoutes = (props: () => RoutesProps[]) => props()

export default memo(({ children, routes }: Props) => {
  const { pathname } = useLocation()
  const classes = useClasses({ pathname })

  return (
    <div>
      <CssBaseline />
      <Suspense fallback={<LinearProgress />}>
        <Header routes={routes} />
      </Suspense>
      <main className={classes.container}>
        <div className={classes.cabecera} />
        <div className={classes.content}>
          <Suspense fallback={<CircularProgress />}>{children}</Suspense>
        </div>
      </main>
    </div>
  )
})

const useClasses = makeStyles((theme) => ({
  container: {
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "95%"
    },
    width: "80%",
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  },
  cabecera: {
    marginTop: 180
  },
  content: {
    height: "100%",
    marginBottom: 15
  }
}))

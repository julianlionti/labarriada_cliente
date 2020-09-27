import React, { memo } from "react"
import {
  AppBar,
  Toolbar,
  makeStyles,
  Breadcrumbs,
  Badge,
  IconButton,
  Typography,
  Avatar,
  TextField
} from "@material-ui/core"
import { menuWidth, RoutesProps } from "./DrawerMenu"
import {
  FaBars,
  FaHome,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaQuestion,
  FaSearch,
  FaShoppingBag,
  FaShoppingCart,
  FaUser
} from "react-icons/fa"
import { useLocation } from "react-router-dom"
import Logo from "../../assets/images/solo_logo.png"
import LogoTexto from "../../assets/images/solo_texto.png"
import MenuItem from "./MenuItem"
import { colors } from "../../util/Theme"

interface Props {
  routes: RoutesProps[]
}

export default memo(({ routes }: Props) => {
  const classes = useClasses()
  const { pathname } = useLocation()
  const actual = routes.find((e) => e.route === pathname)

  return (
    <AppBar position="fixed" className={classes.container}>
      <div className={classes.content}>
        <Toolbar disableGutters>
          <div className={classes.logoContainer}>
            <img
              src={Logo}
              alt="La Barriada Coperativa"
              className={classes.logo}
            />
          </div>
          <div className={classes.menu}>
            <div style={{ flex: 1 }}>
              <img
                src={LogoTexto}
                alt="La Barriada Coperativa"
                className={classes.logoTexto}
              />
            </div>
            <TextField
              fullWidth
              label="Buscar"
              placeholder="Buscar producto"
              variant="outlined"
              size="small"
              InputProps={{
                startAdornment: (
                  <IconButton color="inherit">
                    <FaSearch size={20}></FaSearch>
                  </IconButton>
                )
              }}
            ></TextField>
            <Breadcrumbs className={classes.menu}>
              <MenuItem
                title="Quienes somos"
                to={"/quienes"}
                Icon={FaQuestion}
              />
              <MenuItem
                title="Como comprar"
                to={"/como"}
                Icon={FaShoppingBag}
              />
              <MenuItem
                title="Puntos de venta"
                to={"/puntos"}
                Icon={FaMapMarkedAlt}
              />
              <MenuItem title="Contacto" to={"/contacto"} Icon={FaPhoneAlt} />
            </Breadcrumbs>
          </div>
          <div className={classes.shopping}>
            <div style={{ flex: 1, display: "flex", alignItems: "center" }}>
              <div>
                <Badge overlap="circle" badgeContent={4} color="primary">
                  <IconButton>
                    <Avatar className={classes.avatar}>
                      <FaShoppingCart className={classes.badgeIcon} />
                    </Avatar>
                  </IconButton>
                </Badge>
              </div>
            </div>
            <Typography>
              <span role="img" aria-label="Telefono">
                📞
              </span>
              15 4561 1234
            </Typography>
          </div>
        </Toolbar>
      </div>
    </AppBar>
  )
})

const useClasses = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    paddingBottom: theme.spacing(2)
    // height: 165
  },
  content: {
    margin: "auto",
    [theme.breakpoints.down("md")]: {
      width: "95%"
    },
    width: "80%"
  },
  logoTexto: {
    width: 450
  },
  logo: {
    width: 145,
    height: 145
  },
  badgeIcon: {
    width: 25,
    height: 25
  },
  logoContainer: {
    // width: 150,
    display: "flex",
    alignItems: "center"
  },
  menu: {
    paddingTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  shopping: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 150
  },
  avatar: {
    backgroundColor: colors.primary
  }
}))

import { Link, makeStyles } from "@material-ui/core"
import React from "react"
import { FaHome } from "react-icons/fa"

interface Props {
  title: string
  to: string
  Icon?: any
}

export default ({ title, to, Icon }: Props) => {
  const classes = useClasses()
  return (
    <Link color="inherit" href={to}>
      <Icon className={classes.icon} />
      {title}
    </Link>
  )
}

const useClasses = makeStyles((theme) => ({
  icon: {
    width: 20,
    height: 20,
    marginRight: theme.spacing(1)
  }
}))

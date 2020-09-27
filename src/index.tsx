import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import "./assets/fonts/showcase/ShowcaseSansMini.otf"
import "./index.css"

ReactDOM.render(<App />, document.getElementById("root"))
serviceWorker.unregister()

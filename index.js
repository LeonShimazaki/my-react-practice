import React from "react"
import ReactDom from "react-dom"

import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"

function App() {
  return(
    <div>
        <nav><Navbar/></nav>
        <MainContent/>
        <Footer/>
    </div>
  )
}

export default App

ReactDom.render(<App/>, document.getElementById("root"))

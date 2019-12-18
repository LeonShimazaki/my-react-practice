// From scratch, initialize the React app
// Render an <App /> component
// Create the <App /> component from scratch
// Have the <App /> component render 3 or 4 checkboxes with paragraphs or spans next to it
// like you're making a todo list with some hard-coded items on it

import React from "react"
import ReactDom from "react-dom"

import Navbar from "./Navbar"
import MainContent from "./MainContent"
import Footer from "./Footer"

const firstName = "Leon"
const lastName = "Shimazaki"


function App() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "morning"
    }
    if (hours > 12 && hours < 17) {
        timeOfDay = "afternoon"
    }
    if (hours > 17) {
        timeOfDay = "nighttime"
    }
    return(
        <div>
            <Navbar/>
            <h1>Hello {`${firstName} ${lastName}`}</h1>
            <h1>Good {timeOfDay}</h1>
            <MainContent/>
            <Footer/>
        </div>
    )
}

export default App

ReactDom.render(<App/>, document.getElementById("root"))

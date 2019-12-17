import React from "react"
import ReactDom from "react-dom"

function MyApp() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>)
}

ReactDom.render(
  <MyApp/>,
  document.getElementById("root")
)

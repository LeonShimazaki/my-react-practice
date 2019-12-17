import React from "react"
import ReactDom from "react-dom"

/*
function MyName () {
  return <h1>Leon Shimazaki</h1>
}
function MyBlurb () {
  return <p>Hi I am a 23 year old graduate studying programming.</p>
}
function MyVacation () {
  return 
    <ol>
      <li>Japan</li>
      <li>Canada</li>
      <li>Korea</li>
    </ol>
}
*/

function MyInfo () {
  return(
    <div>
      <h1>Leon Shimazaki</h1>
      <p>Hi I am a 23 year old graduate studying programming.</p>
      <ol>
        <li>Japan</li>
        <li>Canada</li>
        <li>Korea</li>
      </ol>
    </div>)
}

ReactDom.render(
  <MyInfo/>,
  document.getElementById("root")
)

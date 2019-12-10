import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

function Body() {
  return (
    <p className="App-intro">
      To get started, Edit <code>src/App.js</code> and save to reload.
    </p>
  );
}
class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myObj.b}</div>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header
          title="Hello world"
          num={5}
          myObj={{
            a: 5,
            b: 6
          }}
        />
        <Body />
      </div>
    );
  }
}

export default App;

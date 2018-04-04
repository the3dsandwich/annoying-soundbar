import React, { Component } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div className="main_container">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;

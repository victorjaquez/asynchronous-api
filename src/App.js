import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./FetchRandomUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FetchRandomUser />
      </div>
    );
  }
}

export default App;

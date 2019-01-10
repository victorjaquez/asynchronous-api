import React, { Component } from "react";
import "./App.css";
import FetchRandomUser from "./FetchRandomUser";
import RandomUsers from "./RandomUsers";

class App extends Component {
  capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <div className="App">
        <FetchRandomUser capitalize={this.capitalizeFirstLetter} />
        <RandomUsers capitalize={this.capitalizeFirstLetter} />
      </div>
    );
  }
}

export default App;

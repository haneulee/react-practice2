import React, { Component } from "react";
import CountryList from "./CountryList";
import Footer from "./Footer";
import styles from "./styles";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
      list: [
        { no: 1, country: "egypt", visited: false },
        { no: 2, country: "turkey", visited: true },
        { no: 3, country: "korea", visited: true }
      ]
    };
  }
  render() {
    return (
      <div className="container">
        <h1>{this.state.msg}</h1>
        <hr style={styles}/>
        <CountryList countries={this.state.list} /><Footer/>
      </div>
    );
  }
}

export default App;

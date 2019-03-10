import React, { Component } from "react";
import CountryList from "./CountryList";
import Footer from "./Footer";
import styles from "./styles";
import update from "immutability-helper"
import MyButton from "./MyButton"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "hello",
      list: [
        { no: 1, country: "egypt", visited: false },
        { no: 2, country: "turkey", visited: true },
        { no: 3, country: "korea", visited: true }
      ],
      itemlist: []
    };
  }
  addItem() {
    if (!this.num) this.num = 0;
    this.num++;
    let newItem = update(this.state.itemlist, {
      $push: [
        {no: new Date().getTime(),
        item: "아이템" + this.num}
      ]
    })
    this.setState({itemlist: newItem})
  }
  // subtract = () => {
  //   this.setState({num: this.state.num - 1})
  // }
  render() {
    return (
      <div className="container">
        <h1>{this.state.msg}</h1>
        <hr style={styles}/>
        <MyButton addItem={this.addItem.bind(this)}>add</MyButton>
        {/* <MyButton subtract={this.subtract}>subtract</MyButton> */}
        <CountryList itemlist={this.state.itemlist} /><Footer/>
      </div>
    );
  }
}

export default App;

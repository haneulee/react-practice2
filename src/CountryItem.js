import React, { Component } from "react";
import styles from "./styles";

class CountryItem extends Component {
  render() {
    return (
      <li style={styles.listItemStyle}
        className={
          this.props.visited ? "list-group-item active" : "list-groupt-item"
        }
      >
        {this.props.country}
      </li>
    );
  }
}

export default CountryItem;

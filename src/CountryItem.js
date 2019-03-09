import React, { Component } from "react";
import styles from "./styles";
import PropTypes from "prop-types"

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

CountryItem.propTypes = {
    visited: PropTypes.bool.isRequired,
    country: function(props, propName, componentName) {
        if (props[propName].indexOf(["*", "!"]) === -1) {
            return new Error(`${propName} 속성의 값은 특수문자를 허용하지 않습니다. (${componentName} 컴포넌트)`)
        }
    }
}

CountryItem.defaultProps = {
    visited: false,
    country: "korea"
}

export default CountryItem;

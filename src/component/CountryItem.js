import React, { PureComponent } from "react";
import styles from "./styles";
import PropTypes from "prop-types";

class CountryItem extends PureComponent {
  render() {
    return (
      <li style={styles.listItemStyle} className="list-group-item active">
        {this.props.no} : {this.props.item}
      </li>
    );
  }
}

CountryItem.propTypes = {
  // visited: PropTypes.bool.isRequired,
  // country: function(props, propName, componentName) {
  //     if (props[propName].indexOf(["*", "!"]) === -1) {
  //         return new Error(`${propName} 속성의 값은 특수문자를 허용하지 않습니다. (${componentName} 컴포넌트)`)
  //     }
  // }
  no: PropTypes.number.isRequired,
  item: PropTypes.string.isRequired
};

CountryItem.defaultProps = {
  no: 0,
  item: "아이템 1"
};

export default CountryItem;

import React, { Component } from "react";
import CountryItem from "./CountryItem";
import PropTypes from "prop-types"

class CountryList extends Component {
  render() {
    let countries = this.props.itemlist.map((item, index) => {
      return <CountryItem key={item.no} {...item} />;
    });
    return <ul className="list-group">{countries}</ul>;
  }
}

CountryList.propTypes = {
    itemlist: PropTypes.arrayOf(PropTypes.object)
}

export default CountryList;

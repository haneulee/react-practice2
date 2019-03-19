import React, { Component } from "react";
import ReactDOM from "react-dom";

class Portal2 extends React.Component {
  constructor(props) {
    super(props);

    this.modalArea = document.getElementById("modal-area");
    this.container = document.createElement("div");
  }

  componentDidMount() {
    this.modalArea.appendChild(this.container);
  }

  componentWillUnmount() {
    this.modalArea.removeChild(this.container);
  }

  render() {
    //자식 컴포넌트를 container로 감싸서 modal-area내부에 추가함
    return ReactDOM.createPortal(this.props.children, this.container);
  }
}

export default Portal2;

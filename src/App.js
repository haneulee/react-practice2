import React, { Component } from "react";
import CountryList from "./CountryList";
import Todo from "./Todo";
import Footer from "./Footer";
import styles from "./styles";
import update from "immutability-helper";
import MyButton from "./MyButton";
// import Portal from "./Portal";
// import { Portal } from "react-portal";
import Modal from "./Modal";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "todo list",
      todolist: [
        { no: 1, todo: "react study", done: false },
        { no: 2, todo: "clean rooms", done: true },
        { no: 3, todo: "brunch", done: false }
      ],
      showModal: false
    };
  }
  componentDidMount() {
    axios
      .post("http://sample.bmaster.kro.kr/contacts", {
        name: "sky",
        tel: "010-0000-0000",
        address: "seoul"
      })
      .then(Response => {
        if (Response.data.status !== "success") {
          throw new Error("data add error");
        }
        console.log(Response);
        return axios.get(
          "http://sample.bmaster.kro.kr/contacts/" + Response.data.no
        );
      })
      .then(Response => {
        console.log(Response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  toggleModalBox = () => {
    this.setState({ showModal: !this.state.showModal });
  };
  add = todo => {
    let newList = update(this.state.todolist, {
      $push: [{ no: new Date().getTime(), todo: todo, done: false }]
    });
    this.setState({ todolist: newList });
  };
  delete = no => {
    let index = this.state.todolist.findIndex(todo => todo.no === no);
    let newList = update(this.state.todolist, {
      $splice: [[index, 1]]
    });
    this.setState({ todolist: newList });
  };
  toggle = no => {
    let index = this.state.todolist.findIndex(todo => todo.no === no);
    let toggle = !this.state.todolist[index].done;
    let newList = update(this.state.todolist, {
      [index]: {
        done: { $set: toggle }
      }
    });
    this.setState({ todolist: newList });
  };
  render() {
    const { showModal } = this.state;
    return (
      <div className="container">
        <h1 style={styles.title}>{this.state.msg}</h1>
        <hr style={styles} />
        {/* <MyButton addItem={this.addItem.bind(this)}>add</MyButton> */}
        {/* <MyButton subtract={this.subtract}>subtract</MyButton> */}
        {/* <CountryList itemlist={this.state.itemlist} /> */}
        <Todo
          todolist={this.state.todolist}
          add={this.add}
          delete={this.delete}
          toggle={this.toggle}
          isLog="true"
        />
        <button onClick={this.toggleModalBox}>modal</button>
        {/* <Portal node={document && document.getElementById("modal-area")}>
          <Modal
            showModal={showModal}
            header="modal title"
            toggleModalBox={this.toggleModalBox}
          >
            <p>모달 컨텐츠~~</p>
          </Modal>
        </Portal> */}
        <Footer />
      </div>
    );
  }
}

export default App;

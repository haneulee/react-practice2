import React, { Component } from "react";
import CountryList from "./CountryList";
import Todo from "./Todo";
import Footer from "./Footer";
import styles from "./styles";
import update from "immutability-helper";
import MyButton from "./MyButton";
// import Portal from "./Portal";
import { Portal } from "react-portal";
import Modal from "./Modal";
import axios from "axios";
import { Container } from "flux/utils";
import ItemStore from "../flux/ItemStore";
import ItemAction from "../flux/ItemAction";
import MyTime from "./MyTime";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "todo list",
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
    // let newList = update(this.state.todolist, {
    //   $push: [{ no: new Date().getTime(), todo: todo, done: false }]
    // });
    // this.setState({ todolist: newList });

    this.props.addTodo(todo);
  };
  delete = no => {
    // let index = this.state.todolist.findIndex(todo => todo.no === no);
    // let newList = update(this.state.todolist, {
    //   $splice: [[index, 1]]
    // });
    // this.setState({ todolist: newList });
    this.props.deleteTodo(no);
  };
  toggle = no => {
    // let index = this.state.todolist.findIndex(todo => todo.no === no);
    // let toggle = !this.state.todolist[index].done;
    // let newList = update(this.state.todolist, {
    //   [index]: {
    //     done: { $set: toggle }
    //   }
    // });
    // this.setState({ todolist: newList });
    this.props.toggleTodo(no);
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
          todolist={this.props.todolist}
          add={this.add}
          delete={this.delete}
          toggle={this.toggle}
          isLog="true"
        />
        <button onClick={this.toggleModalBox}>modal</button>
        <MyTime
          changeTime={this.props.changeTime}
          curTime={this.props.curTime}
        />
        <Portal node={document && document.getElementById("modal-area")}>
          <Modal
            showModal={showModal}
            header="modal title"
            toggleModalBox={this.toggleModalBox}
          >
            <p>모달 컨텐츠~~</p>
          </Modal>
        </Portal>
        <Footer />
      </div>
    );
  }
}

// container 고차 함수를 이용해 itemstore객체를 store로 등록하고
// itemstore의 상태 데이터를 app 컴포넌트의 state로 설정함
// App.getStores = () => [ItemStore];
// App.calculateState = prevState => {
//   return ItemStore.getState();
// };
// const AppContainer = Container.create(App);

export default App;

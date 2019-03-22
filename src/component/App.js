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
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Main from "./Main";

import Header from "./Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.addTodo(todo);
  };
  delete = no => {
    this.props.deleteTodo(no);
  };
  toggle = no => {
    this.props.toggleTodo(no);
  };
  render() {
    const { showModal } = this.state;
    return (
      <Router>
        <div className="container">
          <Header />
          {/* <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/members" component={Members} />
            <Route
              path="/todolist"
              render={props => (
                <TodoList
                  {...props}
                  todolist={this.props.todolist}
                  changeTime={this.props.changeTime}
                  curTime={this.props.curTime}
                  add={this.add}
                  delete={this.delete}
                  toggle={this.toggle}
                  toggleModalBox={this.toggleModalBox}
                />
              )}
            />
            <Route
              path="/songs"
              render={props => <SongList {...props} songs={this.state.songs} />}
            />
            <Redirect exact from="/" to="/home" />
            <Route component={NotFound} />
          </Switch> */}
          <Main
            {...this.props}
            add={this.add}
            delete={this.delete}
            toggle={this.toggle}
            toggleModalBox={this.toggleModalBox}
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
      </Router>
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

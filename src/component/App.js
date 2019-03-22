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
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Members from "./Members";
import TodoList from "./TodoList";
import SongList from "./SongList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      songs: [
        {
          id: 1,
          title: "fallin for you",
          musician: "colbie callet",
          youtube_link: "PABUI_EX_hw"
        },
        {
          id: 2,
          title: "can't hurry love",
          musician: "the supremes",
          youtube_link: "EJDPhjQft04"
        },
        {
          id: 3,
          title: "landslide",
          musician: "dixie chicks",
          youtube_link: "V2N7gYom9-A"
        },
        {
          id: 4,
          title: "can't let go",
          musician: "linda ronstadt",
          youtube_link: "P-EpGKXmoe4"
        },
        {
          id: 5,
          title: "doctor my eyes",
          musician: "jackson browne",
          youtube_link: "7JIFKS_1oZk"
        },
        {
          id: 6,
          title: "we gotta get you a woman",
          musician: "todd rundgren",
          youtube_link: "EyUjbBViAGE"
        },
        {
          id: 7,
          title: "hip to my heart",
          musician: "band perry",
          youtube_link: "vpLCFnD9LFo"
        }
      ]
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
      <Router>
        <div className="container">
          <Header />
          <Route exact path="/" component={Home} />
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

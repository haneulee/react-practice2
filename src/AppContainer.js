import App from "./App";
import TodoActionCreator from "./redux/TodoActionCreator";
import { connect } from "react-redux";
import Todo from "./Todo";

const mapStateToProps = state => {
  return {
    todolist: state.todolist
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(TodoActionCreator.addTodo(todo)),
    deleteTodo: no => dispatch(TodoActionCreator.deleteTodo(no)),
    toggleTodo: no => dispatch(TodoActionCreator.toggleTodo(no))
  };
};

//스토어의 상태와 디스패치 메서드를 app 컴포넌트에 속성으로 넣어 새로운 appcontainer컴포넌트를 생성
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
export default AppContainer;

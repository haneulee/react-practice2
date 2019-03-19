import Constant from "../Constant";

const TodoActionCreator = {
  addTodo(todo) {
    return {
      type: Constant.ADD_TODO,
      payload: { todo: todo }
    };
  },
  deleteTodo(id) {
    return {
      type: Constant.DELETE_TODO,
      payload: { no: id }
    };
  },
  toggleTodo(id) {
    return {
      type: Constant.TOGGLE_TODO,
      payload: { no: id }
    };
  }
};

export default TodoActionCreator;

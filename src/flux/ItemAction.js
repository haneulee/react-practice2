import Constant from "./Constant";
import AppDispatcher from "./AppDispatcher";

const ItemActions = {
  addTodo(todo) {
    let id = new Date().getTime();
    AppDispatcher.dispatch({
      type: Constant.ADD_TODO,
      payload: { no: id, todo: todo, done: false }
    });
  },
  deleteTodo(id) {
    AppDispatcher.dispatch({
      type: Constant.DELETE_TODO,
      payload: { no: id }
    });
  },
  toggleTodo(id) {
    AppDispatcher.dispatch({
      type: Constant.TOGGLE_TODO,
      payload: { no: id }
    });
  }
};

export default ItemActions;

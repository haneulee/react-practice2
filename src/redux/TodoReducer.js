import Constant from "../Constant";
import update from "immutability-helper";

const initialState = {
  todolist: [
    { no: 1, todo: "react study", done: false },
    { no: 2, todo: "clean rooms", done: true },
    { no: 3, todo: "brunch", done: false }
  ]
};

const TodoReducer = (state = initialState, action) => {
  let index, newTodo, newTodolist, toggle;
  switch (action.type) {
    case Constant.ADD_TODO:
      newTodo = {
        no: new Date().getTime(),
        todo: action.payload.todo,
        done: false
      };
      newTodolist = update(state.todolist, { $push: [newTodo] });
      return { todolist: newTodolist };
    case Constant.DELETE_TODO:
      index = state.todolist.findIndex(x => x.no === action.payload.no);
      newTodolist = update(state.todolist, { $splice: [[index, 1]] });

      return { todolist: newTodolist };

    case Constant.TOGGLE_TODO:
      index = state.todolist.findIndex(x => x.no === action.payload.no);
      toggle = state.todolist[index] && !state.todolist[index].done;

      newTodolist = update(state.todolist, {
        [index]: {
          done: { $set: toggle }
        }
      });

      return { todolist: newTodolist };
    default:
      return state;
  }
};

export default TodoReducer;

import Constant from "../Constant";
import update from "immutability-helper";

const initialState = {
  todolist: [
    { no: 1, todo: "react study", done: false },
    { no: 2, todo: "clean rooms", done: true },
    { no: 3, todo: "brunch", done: false }
  ]
};

const TodoReducer = (todolist = initialState.todolist, action) => {
  let index, newTodo, newTodolist, toggle;
  switch (action.type) {
    case Constant.ADD_TODO:
      newTodo = {
        no: new Date().getTime(),
        todo: action.payload.todo,
        done: false
      };
      newTodolist = update(todolist, { $push: [newTodo] });
      return newTodolist;
    case Constant.DELETE_TODO:
      index = todolist.findIndex(x => x.no === action.payload.no);
      newTodolist = update(todolist, { $splice: [[index, 1]] });

      return newTodolist;

    case Constant.TOGGLE_TODO:
      index = todolist.findIndex(x => x.no === action.payload.no);
      toggle = todolist[index] && !todolist[index].done;

      newTodolist = update(todolist, {
        [index]: {
          done: { $set: toggle }
        }
      });

      return newTodolist;
    default:
      return todolist;
  }
};

export default TodoReducer;

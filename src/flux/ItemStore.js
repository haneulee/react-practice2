import { Store } from "flux/utils";
import AppDispatcher from "./AppDispatcher";
import Constant from "./Constant";
import update from "immutability-helper";

let iemName = "";
let todolist = [];

class ItemStore extends Store {
  //아래 데이터들은 캡슐화
  getState() {
    return {
      //   itemName: itemName,
      todolist: todolist
    };
  }

  //action을 전달받는 메서드
  __onDispatch(action) {
    switch (action.type) {
      case Constant.ADD_TODO:
        todolist = update(todolist, { $push: [action.payload] });
        this.__emitChange();
        break;
      case Constant.DELETE_TODO:
        let index = todolist.findIndex(x => x.no === action.payload.no);
        if (index > -1) {
          todolist = update(todolist, { $splice: [[index, 1]] });
          this.__emitChange();
        }
        break;
      case Constant.TOGGLE_TODO:
        // itemName = action.payload.itemName;

        let index2 = todolist.findIndex(x => x.no === action.payload.no);
        if (index2 > -1) {
          console.log(index2, todolist);
          let toggle = todolist[index2] && !todolist[index2].done;
          todolist = update(todolist, {
            [index2]: {
              done: { $set: toggle }
            }
          });
          this.__emitChange();
        }
        break;
    }
  }
}

export default new ItemStore(AppDispatcher);

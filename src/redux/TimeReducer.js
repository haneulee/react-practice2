import Constant from "../Constant";

const initialState = {
  curTime: new Date()
};

const TimeReducer = (curTime = initialState.curTime, action) => {
  switch (action.type) {
    case Constant.CHANGE_TIME:
      return new Date();
    default:
      return curTime;
  }
};

export default TimeReducer;

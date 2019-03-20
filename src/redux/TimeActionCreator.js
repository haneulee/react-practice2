import Constant from "../Constant";

const TimeActionCreator = {
  changeTime() {
    return { type: Constant.CHANGE_TIME };
  },
  asyncChangeTime() {
    return (dispatch, getState) => {
      let { curTime } = getState();
      dispatch({
        type: "change time start",
        prevTime: curTime.toLocaleTimeString()
      });
      setTimeout(() => {
        dispatch(this.changeTime());
      }, 1000);
    };
  }
};

export default TimeActionCreator;

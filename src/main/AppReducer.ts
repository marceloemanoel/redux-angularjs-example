import AbstractReducer from "./store/AbstractReducer";
import {SelectSubRedditAction} from "./AppActions";
import AppState from "./AppState";

const initialState: AppState = {
  subRedditOptions: [
    "reactjs",
    "frontend",
    "scala"
  ],
  selectedSubReddit: "reactjs",
};

const AppReducer = new AbstractReducer(initialState, {
  [SelectSubRedditAction.name]: (state: AppState, action: SelectSubRedditAction) => {
    return {
      ...state,
      selectedSubReddit: action.subReddit
    };
  },
}).reducer;

export default AppReducer;

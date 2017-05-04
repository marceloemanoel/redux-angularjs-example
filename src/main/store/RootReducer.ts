import {combineReducers} from "redux";
import AppReducer from "../AppReducer";

const RootReducer = combineReducers({
  app: AppReducer
});

export default RootReducer;

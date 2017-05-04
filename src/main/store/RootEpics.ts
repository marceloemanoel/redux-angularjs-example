import {combineEpics} from "redux-observable";
import AppEpic from "../AppEpic";

export default combineEpics(
  AppEpic
);

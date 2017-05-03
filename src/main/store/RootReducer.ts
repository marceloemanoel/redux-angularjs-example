import { Reducer, combineReducers } from "redux";
import SubRedditReducer from "../common/subreddit/SubRedditReducer";
import AppReducer from "../AppReducer";

const RootReducer = combineReducers({
  subReddit: SubRedditReducer,
  app: AppReducer
});

export default RootReducer;

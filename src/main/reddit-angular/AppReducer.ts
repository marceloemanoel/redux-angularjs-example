import {Action, Reducer, combineReducers } from "redux";
import AbstractReducer from "./store/AbstractReducer";
import {SELECT_SUBREDDIT, SelectSubRedditAction} from "./AppActions";
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
    [SELECT_SUBREDDIT]: (state: AppState, action: SelectSubRedditAction) => {
        return {
            ...state,
            selectedSubReddit: action.subReddit
        };
    },
}).reducer;

export default AppReducer;
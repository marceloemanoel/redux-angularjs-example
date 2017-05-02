import {Action, Reducer, combineReducers } from "redux";
import AbstractReducer from "../../store/AbstractReducer";
import {INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS, ReceivePostsAction} from "../../AppActions";
import Post from "../Post";
import SubRedditState from "./SubRedditState";

const initialState: SubRedditState = {
    didInvalidate: false,
    isFetching: false,
    items: [],
    lastUpdated: Date.now()
};

const PostReducer = new AbstractReducer(initialState, {
    [INVALIDATE_SUBREDDIT]: (state: SubRedditState, action: Action) => {
        return {
            ...state,
            didInvalidate: true
        };
    },
    [REQUEST_POSTS]: (state: SubRedditState, action: Action) => {
        return {
            ...state,
            isFetching: true,
            didInvalidate: false
        };
    },
    [RECEIVE_POSTS]: (state: SubRedditState, action: ReceivePostsAction) => {
        return {
            ...state,
            isFetching: false,
            didInvalidate: false,
            items: action.posts,
            lastUpdated: action.receivedAt
        };
    }
}).reducer;

export default PostReducer;
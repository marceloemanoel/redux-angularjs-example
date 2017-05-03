import {Action} from "redux";
import AbstractReducer from "../../store/AbstractReducer";
import {InvalidateSubRedditAction, RECEIVE_POSTS, ReceivePostsAction, REQUEST_POSTS} from "../../AppActions";
import SubRedditState from "./SubRedditState";

const initialState: SubRedditState = {
    didInvalidate: false,
    isFetching: false,
    items: [],
    lastUpdated: Date.now()
};

const PostReducer = new AbstractReducer(initialState, {
    [InvalidateSubRedditAction.name]: (state: SubRedditState, action: InvalidateSubRedditAction) => {
        debugger;
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
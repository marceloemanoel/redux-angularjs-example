import AbstractReducer from "../../store/AbstractReducer";
import {InvalidateSubRedditAction, ReceivePostsAction, RequestPostsAction} from "../../AppActions";
import SubRedditState from "./SubRedditState";

const initialState: SubRedditState = {
  didInvalidate: false,
  isFetching: false,
  items: [],
  lastUpdated: Date.now()
};

const PostReducer = new AbstractReducer(initialState, {
  [InvalidateSubRedditAction.name]: (state: SubRedditState) => {
    return {
      ...state,
      didInvalidate: true
    };
  },
  [RequestPostsAction.name]: (state: SubRedditState) => {
    return {
      ...state,
      isFetching: true,
      didInvalidate: false
    };
  },
  [ReceivePostsAction.name]: (state: SubRedditState, action: ReceivePostsAction) => {
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

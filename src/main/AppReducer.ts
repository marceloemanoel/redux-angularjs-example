import {abstractReducer} from "./store/AbstractReducer";
import SubRedditReducer from "./common/subreddit/SubRedditReducer";
import {BaseAction, InvalidateSubRedditAction, ReceivePostsAction, RequestPostsAction, SelectSubRedditAction} from "./AppActions";
import AppState from "./AppState";

const initialState: AppState = {
  subRedditOptions: [
    "reactjs",
    "frontend",
    "scala"
  ],
  selectedSubReddit: "reactjs",
  subReddits: {}
};

const subRedditAction = (state: AppState, action: BaseAction) => {
  return {
    ...state,
    subReddits: {
      ...state.subReddits,
      [action.subReddit]: SubRedditReducer(state.subReddits[action.subReddit], action)
    }
  };
};

const AppReducer = abstractReducer(initialState, {
  [SelectSubRedditAction.name]: (state: AppState, action: SelectSubRedditAction) => {
    return {
      ...state,
      selectedSubReddit: action.subReddit
    };
  },
  [InvalidateSubRedditAction.name]: subRedditAction,
  [RequestPostsAction.name]: subRedditAction,
  [ReceivePostsAction.name]: subRedditAction
});

export default AppReducer;

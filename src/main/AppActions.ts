import { Action } from "redux";
import Post from "./common/Post";

export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const REQUEST_POSTS = "REQUEST_POSTS";

export class InvalidateSubRedditAction implements Action {

    public readonly type = InvalidateSubRedditAction.name;

    constructor(public subReddit: string) {}

    asPlainObject(): Action {
        return Object.assign({}, this);
    }
}

export function receivePosts(posts: Post[], receivedAt: number, subReddit: string): ReceivePostsAction {
    return {
        type: RECEIVE_POSTS,
        subReddit,
        posts,
        receivedAt
    };
}

export interface RequestPostsAction extends Action {
    subReddit: string;
}

export function requestPosts(subReddit: string): RequestPostsAction {
    return {
        type: REQUEST_POSTS,
        subReddit
    };
}

export interface SelectSubRedditAction extends Action {
    subReddit: string;
}

export function selectSubReddit(subReddit: string): SelectSubRedditAction {
  return {
    type: SELECT_SUBREDDIT,
    subReddit
  };
}

export interface ReceivePostsAction extends Action {
    posts: Post[];
    receivedAt: number;
    subReddit: string;
}

// function fetchPosts(subreddit) {
//   return dispatch => {
//     dispatch(requestPosts(subreddit))
//     return fetch(`https://www.reddit.com/r/${subreddit}.json`)
//       .then(response => response.json())
//       .then(json => dispatch(receivePosts(subreddit, json)))
//   }
// }

// function shouldFetchPosts(state, subreddit) {
//   const posts = state.postsBySubreddit[subreddit]
//   if (!posts) {
//     return true
//   }
//   else if (posts.isFetching) {
//     return false
//   }
//   else {
//     return posts.didInvalidate
//   }
// }

export function fetchPostsIfNeeded(subreddit: string): Action {
    return {
        type: subreddit
    };
//   return (dispatch, getState) => {
//     if (shouldFetchPosts(getState(), subreddit)) {
//       return dispatch(fetchPosts(subreddit))
//     }
//   }
}
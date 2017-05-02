import * as actions from "./AppActions";
import { Action, Store } from "redux";
import { Observable } from "rxjs";
import { Epic, ActionsObservable } from "redux-observable";
import AppState from "./AppState";
import State from "./store/State";

const AppEpic: Epic<Action, State> =
    (action$: ActionsObservable<Action>, store: Store<State>): Observable<Action> => {
        return action$.ofType(actions.SELECT_SUBREDDIT)
                      .filter((action: actions.SelectSubRedditAction) => {
                          const state = store.getState();
                        //   const subReddit = state.subReddits[action.subReddit];
                        //   if (!subReddit) {
                                return true;
                        //   }
                        //   else if (subReddit.isFetching) {
                                // return false;
                        //   }
                        //   return subReddit.didInvalidate;
                      })
                      .mergeMap((action: actions.SelectSubRedditAction) => {
                          const subReddit = action.subReddit;
                          fetch(`https://www.reddit.com/r/${subReddit}.json`)
                                      .then((response: any) => response.json())
                                      .then((json: any) => {
                                          const posts = json.data.children.map((obj: any) => obj.data);
                                          store.dispatch(actions.receivePosts(posts, Date.now(), subReddit))
                                      })
                                      .catch((error: Error) => console.error(error));

                          return Observable.of(actions.requestPosts(subReddit));
                      });
    };

export default AppEpic;
import {ReceivePostsAction, RequestPostsAction, SelectSubRedditAction} from "./AppActions";
import {Action, Store} from "redux";
import {Observable} from "rxjs";
import {ActionsObservable, Epic} from "redux-observable";
import State from "./store/State";

const AppEpic: Epic<Action, State> =
  (action$: ActionsObservable<Action>, store: Store<State>): Observable<Action> => {
    return action$.ofType(SelectSubRedditAction.name)
      .filter((action: SelectSubRedditAction) => {
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
      .mergeMap((action: SelectSubRedditAction) => {
        const subReddit = action.subReddit;
        fetch(`https://www.reddit.com/r/${subReddit}.json`)
          .then((response: any) => response.json())
          .then((json: any) => {
            const posts = json.data.children.map((obj: any) => obj.data);
            store.dispatch(new ReceivePostsAction(posts, Date.now(), subReddit).asPlainObject());
          })
          .catch((error: Error) => console.error(error));

        return Observable.of(new RequestPostsAction(subReddit).asPlainObject());
      });
  };

export default AppEpic;

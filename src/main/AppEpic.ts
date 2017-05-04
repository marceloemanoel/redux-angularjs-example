import {InvalidateSubRedditAction, ReceivePostsAction, RequestPostsAction, SelectSubRedditAction} from "./AppActions";
import {Action, Store} from "redux";
import {Observable} from "rxjs";
import {ActionsObservable, Epic} from "redux-observable";
import State from "./store/State";

function shouldLoadReddit(store: Store<State>): (action: Action) => boolean {
  return (action: SelectSubRedditAction) => {
    const state = store.getState();
    const subReddit = state.app.subReddits[action.subReddit];

    return (!subReddit || !subReddit.isFetching || subReddit.didInvalidate);
  };
}

function toReceiveAction(subReddit: string): (response: Response) => Action {
  return (json: any) => {
    const posts = json.data.children.map((obj: any) => obj.data);
    return new ReceivePostsAction(posts, Date.now(), subReddit).asPlainObject();
  };
}

const loadSubReddit = (action: SelectSubRedditAction) => {
  const subRedditUrl = `https://www.reddit.com/r/${action.subReddit}.json`;

  const request = new RequestPostsAction(action.subReddit).asPlainObject();
  const response$ = Observable.fromPromise(fetch(subRedditUrl))
    .flatMap((response: Response) => Observable.fromPromise(response.json()))
    .map(toReceiveAction(action.subReddit));

  return Observable.of(request).concat(response$);
};

const AppEpic: Epic<Action, State> =
  (action$: ActionsObservable<Action>, store: Store<State>): Observable<Action> => {
    return action$.ofType(SelectSubRedditAction.name, InvalidateSubRedditAction.name)
      .filter(shouldLoadReddit(store))
      .mergeMap(loadSubReddit);
  };

export default AppEpic;

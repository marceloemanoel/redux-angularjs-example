import {SelectSubRedditAction} from "./AppActions";
import {Dispatch, Store} from "redux";
import State from "./store/State";
import AppState from "./AppState";

export default class AppController {
  static $inject: string[] = ["store"];

  private dispatch: Dispatch<AppState>;

  constructor(private store: Store<State>) {
    this.dispatch = store.dispatch;
    this.dispatch(new SelectSubRedditAction(this.selectedSubReddit));
  }

  private get state(): AppState {
    return this.store.getState().app;
  }

  get selectedSubReddit(): string {
    return this.state.selectedSubReddit;
  }

  get subRedditOptions(): string[] {
    return this.state.subRedditOptions;
  }

  changeSubReddit = (subReddit: string): void => {
    this.dispatch(new SelectSubRedditAction(subReddit));
  }
}

import * as actions from "../../AppActions";
import {Store} from "redux";
import State from "../../store/State";
import SubRedditState from "./SubRedditState";
import Post from "../Post";

export default class SubRedditController {
  static $inject: string[] = ["store"];

  subReddit: string;

  constructor(private store: Store<State>) {
    console.log("created");
  }

  private get state(): SubRedditState {
    const state = this.store.getState();
    const appState = state.app;
    return appState.subReddits[this.subReddit];
  }

  get isFetching(): boolean {
    return this.state.isFetching;
  }

  get isLoading(): boolean {
    return this.state.isFetching && this.state.items.length === 0;
  }

  get isEmpty(): boolean {
    return !this.state.isFetching && this.state.items.length === 0;
  }

  get lastUpdated(): string {
    return this.state.lastUpdated && new Date(this.state.lastUpdated).toLocaleTimeString();
  }

  get items(): Post[] {
    return this.state.items;
  }

  refreshSubReddit($event: Event): void {
    $event.preventDefault();
    $event.stopImmediatePropagation();

    this.store.dispatch(new actions.InvalidateSubRedditAction(this.subReddit));
  }
}

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
        return this.store.getState().subReddit;
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

    refreshSubReddit(): void {
        this.store.dispatch(new actions.InvalidateSubRedditAction("").asPlainObject());
    }
}

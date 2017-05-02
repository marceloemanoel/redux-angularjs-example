import { Reducer, ReducersMapObject, Action } from "redux";

export default class AbstractReducer<State> {
    constructor(private initialSate: State,
                private reducers: ReducersMapObject) {}

    reducer = (state: State, action: Action): Reducer<State> => {
        const reducer = this.reducers[action.type];
        return (reducer ? reducer(state, action) : this.initialSate);
    }
}

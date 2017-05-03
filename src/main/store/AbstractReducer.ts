import { Reducer, ReducersMapObject, Action } from "redux";

export default class AbstractReducer<State> {
    constructor(private initialState: State,
                private reducers: ReducersMapObject) {}

    reducer = (state: State = this.initialState, action: Action): Reducer<State> => {
        const reducer = this.reducers[action.type];
        return (reducer ? reducer(state, action) : state);
    }
}

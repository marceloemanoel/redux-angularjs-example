import { Action, Reducer, ReducersMapObject } from "redux";

export function abstractReducer<State>(initialState: State, reducers: ReducersMapObject) {
  return (state: State = initialState, action: Action): Reducer<State> => {
    const reducer = reducers[action.type];
    return (reducer ? reducer(state, action) : state);
  };
}

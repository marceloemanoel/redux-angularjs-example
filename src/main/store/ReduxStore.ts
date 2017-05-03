import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";

import RootReducer from "./RootReducer";
import RootEpics from "./RootEpics";

interface Window {
    [key: string]: any;
}
const win: Window = window;
const composeEnhancers = (
    win["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
        ? win["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
        : compose
);

const enhancer = composeEnhancers(
  applyMiddleware(createEpicMiddleware(RootEpics))
);

const initialState = {};

export default createStore(
    RootReducer,
    initialState,
    enhancer
);

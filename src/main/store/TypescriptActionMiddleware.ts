import {Action, Dispatch, Store} from "redux";
import AbstractActionCreator from "./AbstractActionCreator";

export default <S>(store: Store<S>) => (next: Dispatch<S>) => (action: Action | AbstractActionCreator) => {
  return next(action instanceof AbstractActionCreator ? action.create() : action);
};

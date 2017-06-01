import { Action } from "redux";

abstract class AbstractActionCreator {
  constructor(public readonly type: string) {
  }

  public create(): Action {
    return Object.assign({}, this);
  }
}

export default AbstractActionCreator;

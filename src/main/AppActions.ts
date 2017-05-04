import {Action} from "redux";
import Post from "./common/Post";

export abstract class BaseAction implements Action {
  constructor(public readonly type: string) {
  }

  public asPlainObject(): Action {
    return Object.assign({}, this);
  }
}

export class InvalidateSubRedditAction extends BaseAction {
  constructor(public subReddit: string) {
    super(InvalidateSubRedditAction.name);
  }
}

export class ReceivePostsAction extends BaseAction {
  constructor(public posts: Post[],
              public receivedAt: number,
              public subReddit: string) {
    super(ReceivePostsAction.name);
  }
}

export class RequestPostsAction extends BaseAction {
  constructor(public subReddit: string) {
    super(RequestPostsAction.name);
  }
}

export class SelectSubRedditAction extends BaseAction {
  constructor(public subReddit: string) {
    super(SelectSubRedditAction.name);
  }
}

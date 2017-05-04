import {Action} from "redux";
import Post from "./common/Post";

export abstract class BaseAction implements Action {
  constructor(public readonly type: string,
              public readonly subReddit: string) {
  }

  public asPlainObject(): Action {
    return Object.assign({}, this);
  }
}

export class InvalidateSubRedditAction extends BaseAction {
  constructor(subReddit: string) {
    super(InvalidateSubRedditAction.name, subReddit);
  }
}

export class ReceivePostsAction extends BaseAction {
  constructor(public posts: Post[],
              public receivedAt: number,
              subReddit: string) {
    super(ReceivePostsAction.name, subReddit);
  }
}

export class RequestPostsAction extends BaseAction {
  constructor(subReddit: string) {
    super(RequestPostsAction.name, subReddit);
  }
}

export class SelectSubRedditAction extends BaseAction {
  constructor(subReddit: string) {
    super(SelectSubRedditAction.name, subReddit);
  }
}

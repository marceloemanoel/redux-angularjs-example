import AbstractActionCreator from "./store/AbstractActionCreator";
import Post from "./common/Post";

export class BaseAction extends AbstractActionCreator {
  constructor(public readonly type: string,
              public readonly subReddit: string) {
    super(type);
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

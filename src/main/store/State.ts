import SubRedditState from "../common/subreddit/SubRedditState";
import AppState from "../AppState";

interface State {
  app: AppState;
  subReddit: SubRedditState;
}

export default State;

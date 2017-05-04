import SubRedditState from "./common/subreddit/SubRedditState";

interface AppState {
  subRedditOptions: string[];
  selectedSubReddit: string;
  subReddits: {
    [key: string]: SubRedditState
  };
}

export default AppState;

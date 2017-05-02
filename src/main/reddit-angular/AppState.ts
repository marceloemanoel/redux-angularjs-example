import SubRedditState from "./common/subreddit/SubRedditState";

interface AppState {
    subRedditOptions: string[];
    selectedSubReddit: string;
}

export default AppState;
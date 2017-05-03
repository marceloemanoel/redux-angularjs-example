import Post from "../Post";

type SubRedditState = {
    didInvalidate: boolean;
    isFetching: boolean;
    items: Post[];
    lastUpdated: number;
}

export default SubRedditState;
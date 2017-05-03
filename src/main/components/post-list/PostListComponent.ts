import * as angular from "angular";
import Post from "../../common/Post";

const templateUrl: string = require("./PostList.html");

const PostListComponent: angular.IComponentOptions = {
    templateUrl,
    bindings: {
        posts: "<"
    }
};

export default PostListComponent;

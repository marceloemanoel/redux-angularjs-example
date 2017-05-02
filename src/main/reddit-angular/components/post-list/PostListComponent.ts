import * as angular from "angular";
import Post from "../../common/Post";

class PostListController {
    posts: Post[];

    $onChanges = (changes: any) => {
        if(changes.posts) {
            this.posts = angular.copy(changes.posts);
        }
    }
}

const templateUrl: string = require("./PostList.html");

const PostListComponent: angular.IComponentOptions = {
    templateUrl,
    // controller:  PostListController,
    bindings: {
        posts: "<"
    }
}

export default PostListComponent;

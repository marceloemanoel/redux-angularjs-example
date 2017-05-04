import * as angular from "angular";

const templateUrl: string = require("./PostList.html");

const PostListComponent: angular.IComponentOptions = {
  templateUrl,
  bindings: {
    posts: "<"
  }
};

export default PostListComponent;

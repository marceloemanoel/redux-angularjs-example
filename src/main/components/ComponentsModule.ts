import * as angular from "angular";

import PostListComponent from "./post-list/PostListComponent";
import SubRedditSelectorComponent from "./subreddit-selector/SubRedditSelectorComponent";

export default angular
  .module("app.components", [])
  .component("postList", PostListComponent)
  .component("subRedditSelector", SubRedditSelectorComponent)
  .name;

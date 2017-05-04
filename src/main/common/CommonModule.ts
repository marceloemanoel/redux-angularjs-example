import * as angular from "angular";

import ReduxStoreModule from "../store/ReduxStoreModule";
import SubRedditComponent from "./subreddit/SubRedditComponent";
import ComponentsModule from "../components/ComponentsModule";

export default angular
  .module("app.common", [
    ReduxStoreModule,
    ComponentsModule
  ])
  .component("reddit", SubRedditComponent)
  .name;

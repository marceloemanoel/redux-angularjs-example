import * as angular from "angular";
import ReduxStore from "./ReduxStore";

export default angular
    .module("redux-store", [])
    .constant("store", ReduxStore)
    .name
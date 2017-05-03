import * as angular from "angular";
import SubRedditController from "./SubRedditController";

const templateUrl: string = require("./SubReddit.html");

const SubRedditComponent: angular.IComponentOptions = {
    templateUrl,
    controller: SubRedditController
};

export default SubRedditComponent;

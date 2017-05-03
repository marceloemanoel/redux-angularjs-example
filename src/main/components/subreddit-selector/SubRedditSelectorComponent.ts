import * as angular from "angular";
import SubRedditSelectorController from "./SubRedditSelectorController";

const templateUrl: string = require("./SubRedditSelector.html");

const SubRedditSelectorComponent: angular.IComponentOptions = {
    templateUrl,
    controller: SubRedditSelectorController,
    bindings: {
        options: "<",
        value: "@",
        onChange: "&"
    }
}

export default SubRedditSelectorComponent;
import * as angular from "angular";
import AppController from "./AppController";

const templateUrl: string = require("./App.html");

const AppComponent: angular.IComponentOptions = {
    templateUrl,
    controller: AppController
};

export default AppComponent;

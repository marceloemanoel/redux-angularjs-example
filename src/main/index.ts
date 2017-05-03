import * as angular from "angular";
import AppModule from "./AppModule";

angular.element(document).ready(() => {
  angular.bootstrap(document.querySelector("app"), [AppModule]);
});

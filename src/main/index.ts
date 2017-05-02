import * as angular from "angular";
import AppModule from "./reddit-angular/AppModule";

angular.element(document).ready(() => {
  angular.bootstrap(document.querySelector("app"), [AppModule]);
});

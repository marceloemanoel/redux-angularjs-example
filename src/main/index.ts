import * as angular from "angular";
import AppModule from "./AppModule";

angular.element(document).ready(() => {
  const app = document.createElement("app");
  document.body.appendChild(app);
  angular.bootstrap(app, [AppModule]);
});

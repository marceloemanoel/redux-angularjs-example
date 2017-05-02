import * as angular from "angular";
import CommonModule from "./common/CommonModule";
import ComponentsModule from "./components/ComponentsModule";
import ApplicationComponent from "./AppComponent";

export default angular
    .module("app", [
        CommonModule,
        ComponentsModule
    ])
    .component("app", ApplicationComponent)
    .run((store: any, $rootScope: any) => {
        store.subscribe(() => {
            $rootScope.$applyAsync();
        });
    })

    .name;
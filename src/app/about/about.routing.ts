import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AboutComponent} from "./about.component";

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    component: AboutComponent
  }
]);

@NgModule({
  imports:[
    routes
  ],
  exports: [
    RouterModule
  ]
})
export class AboutRoutingModule{

}

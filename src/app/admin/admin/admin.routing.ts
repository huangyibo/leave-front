import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminListComponent} from "./admin-list.component";

export const routes : ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      {
        path: 'list',
        component: AdminListComponent
      }
    ]
  }
]);

@NgModule({
  imports: [
    routes
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule {}

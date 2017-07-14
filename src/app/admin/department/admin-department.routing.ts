import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AdminDepartmentListComponent} from "./admin-department-list.component";

export const routes : ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      {
        path: 'list',
        component: AdminDepartmentListComponent
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
export class AdminDepartmentRoutingModule {}

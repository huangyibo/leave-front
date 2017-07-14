import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {AdminDepartmentRoutingModule} from "./admin-department.routing";
import {AdminDepartmentListComponent} from "./admin-department-list.component";

@NgModule({
  imports: [
    SharedModule,
    AdminDepartmentRoutingModule
  ],
  declarations: [
    AdminDepartmentListComponent
  ],
  providers: [
  ]
})
export class AdminDepartmentModule{}

import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {AdminUserRoutingModule} from "./admin-user.routing";
import {AdminUserCreateComponent} from "./admin-user-create.component";


@NgModule({
  imports: [
    SharedModule,
    AdminUserRoutingModule
  ],
  declarations: [
    AdminUserCreateComponent
  ],
  providers: [
  ]
})
export class AdminUserModule{}

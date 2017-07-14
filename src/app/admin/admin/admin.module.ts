import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {AdminRoutingModule} from "./admin.routing";
import {AdminListComponent} from "./admin-list.component";

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminListComponent
  ],
  providers: [
  ]
})
export class AdminModule{}

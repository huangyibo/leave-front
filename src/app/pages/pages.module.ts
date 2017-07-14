
import {NgModule} from "@angular/core";
import {SharedModule} from "../shared/shared.module";
import {AlertModule, DatepickerModule} from "ng2-bootstrap";
import {PagesRoutingModule} from "./pages-routing.module";
import {LeaveRequestsComponent} from "./leave-requests/leave-requests.component";
import {ListLeaveRequestsComponent} from "./leave-requests/for-officer/list-leave-requests.component";
import {BreadcrumbService} from "../shared/services/breadcrumb.service";
@NgModule({
  imports: [
    PagesRoutingModule
  ],
  declarations: [
  ]
})
export class PagesModule{

}

import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {OfficerListLeaveRequestsComponent} from "./officer-list-leave-requests.component";
import {OfficerLeaveRequestsComponent} from "./officer-leave-requests.component";
import {OfficerLeaveRoutingModule} from "./officer-leave.routing";
import {DatepickerModule} from "ng2-bootstrap";
import {OfficerHistoryLeaveComponent} from "./officer-history-leave/officer-history-leave.component";

@NgModule({
  imports: [
    SharedModule,
    DatepickerModule.forRoot(),
    OfficerLeaveRoutingModule
  ],
  declarations: [
    OfficerListLeaveRequestsComponent,
    OfficerLeaveRequestsComponent,
    OfficerHistoryLeaveComponent
  ],
  providers: [

  ]
})
export class OfficerLeaveModule {

}

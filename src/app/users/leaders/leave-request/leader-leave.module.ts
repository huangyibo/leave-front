import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {LeaderLeaveRoutingModule} from "./leader-leave.routing";
import {LeaderListLeaveRequestsComponent} from "./leader-list-leave-requests.component";
import {LeaderLeaveRequestsComponent} from "./leader-leave-requests.component";
import {ListLeaderLeaveRequestsComponent} from "./list-leader-leave-requests.component";
import {LeaderHistoryLeaveComponent} from "./leader-history-leave/leader-history-leave.component";
import {LeaderLeaveReportStatisticsComponent} from "./leave-report-statistics/leave-report-statistics.component";

@NgModule({
  imports: [
    SharedModule,
    LeaderLeaveRoutingModule
  ],
  declarations: [
    LeaderListLeaveRequestsComponent,
    LeaderLeaveRequestsComponent,
    ListLeaderLeaveRequestsComponent,
    LeaderHistoryLeaveComponent,
    LeaderLeaveReportStatisticsComponent
  ],
  providers: [

  ]
})
export class LeaderLeaveModule{}

import {NgModule} from "@angular/core";
import {SharedModule} from "../../../shared/shared.module";
import {TopLeaderLeaveRoutingModule} from "./top-leader-leave.routing";
import {ReviewLeaderLeaveComponent} from "./for-leader/review-leader-leave/review-leader-leave.component";
import {ReviewOfficerLeaveComponent} from "./for-officer/review-officer-leave/review-officer-leave.component";
import {ResumeLeaderLeaveComponent} from "./for-leader/resume-leader-leave/resume-leader-leave.component";
import {ResumeOfficerLeaveComponent} from "./for-officer/resume-officer-leave/resume-officer-leave.component";
import {TopLeaderLeaveReportStatisticsComponent} from "./leave-report-statistics/leave-report-statistics.component";
@NgModule({
  imports: [
    SharedModule,
    TopLeaderLeaveRoutingModule
  ],
  declarations: [
    ReviewLeaderLeaveComponent,
    ReviewOfficerLeaveComponent,
    ResumeLeaderLeaveComponent,
    ResumeOfficerLeaveComponent,
    TopLeaderLeaveReportStatisticsComponent
  ],
  providers: [
  ]
})
export class TopLeaderLeaveModule{}

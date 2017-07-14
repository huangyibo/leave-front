import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ReviewLeaderLeaveComponent} from "./for-leader/review-leader-leave/review-leader-leave.component";
import {ReviewOfficerLeaveComponent} from "./for-officer/review-officer-leave/review-officer-leave.component";
import {ResumeLeaderLeaveComponent} from "./for-leader/resume-leader-leave/resume-leader-leave.component";
import {ResumeOfficerLeaveComponent} from "./for-officer/resume-officer-leave/resume-officer-leave.component";
import {TopLeaderLeaveReportStatisticsComponent} from "./leave-report-statistics/leave-report-statistics.component";

export const routes : ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      {
        path: 'review',
        children: [
          {
            path: 'leader',
            component: ReviewLeaderLeaveComponent
          },
          {
            path: 'officer',
            component: ReviewOfficerLeaveComponent
          }
        ]
      },
      {
        path: 'resume',
        children: [
          {
            path: 'leader',
            component: ResumeLeaderLeaveComponent
          },
          {
            path: 'officer',
            component: ResumeOfficerLeaveComponent
          }
        ]
      },
      {
        path: "report",
        component: TopLeaderLeaveReportStatisticsComponent
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
export class TopLeaderLeaveRoutingModule {}

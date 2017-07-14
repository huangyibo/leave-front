import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {LeaderLeaveRequestsComponent} from "./leader-leave-requests.component";
import {LeaderListLeaveRequestsComponent} from "./leader-list-leave-requests.component";
import {ListLeaderLeaveRequestsComponent} from "./list-leader-leave-requests.component";
import {LeaderHistoryLeaveComponent} from "./leader-history-leave/leader-history-leave.component";
import {LeaderLeaveReportStatisticsComponent} from "./leave-report-statistics/leave-report-statistics.component";

export const routes : ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      {
        path: '',
        component: LeaderLeaveRequestsComponent
      },
      {
        path: 'officer-leave-list',
        component: LeaderListLeaveRequestsComponent
      },
      {
        path: 'list',
        component: ListLeaderLeaveRequestsComponent
      },
      {
        path: 'history',
        component: LeaderHistoryLeaveComponent
      },
      {
        path: 'report',
        component: LeaderLeaveReportStatisticsComponent
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
export class LeaderLeaveRoutingModule {}

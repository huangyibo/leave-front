import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {OfficerLeaveRequestsComponent} from "./officer-leave-requests.component";
import {OfficerListLeaveRequestsComponent} from "./officer-list-leave-requests.component";
import {OfficerHistoryLeaveComponent} from "./officer-history-leave/officer-history-leave.component";

export const routes : ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      {
        path: '',
        component: OfficerLeaveRequestsComponent
      },
      {
        path: 'list',
        component: OfficerListLeaveRequestsComponent
      },
      {
        path: 'history',
        component: OfficerHistoryLeaveComponent
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
export class OfficerLeaveRoutingModule{}

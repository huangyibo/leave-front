import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
const routes: Routes = [/*
  {
    path: '',
    children: [
      {
        path: 'leave-request',
        component: LeaveRequestsComponent,
        data: {
          title: 'SMMU卫生勤务学系请假单'
        }
      },
      {
        path: 'list-leave-requests',
        component: ListLeaveRequestsComponent,
        data: {
          title: '请假审核状态'
        }
      }
    ]
  }*/
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {}

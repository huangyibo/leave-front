import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {FullLayoutComponent} from "./layouts/full-layout.component";
import {HomeComponent} from "./home/home.component";
import {SimpleLayoutComponent} from "./layouts/simple-layout.component";

const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  // Root
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
      },
      {
        path: 'leader/leave-request',
        loadChildren: './users/leaders/leave-request/leader-leave.module#LeaderLeaveModule'
      },
      {
        path: 'officer/leave-request',
        loadChildren: './users/officers/leave-request/officer-leave.module#OfficerLeaveModule'
      },
      {
        path: 'top-leader/leave-request',
        loadChildren: './users/top-leaders/leave-request/top-leader-leave.module#TopLeaderLeaveModule'
      },
      {
        path: 'admin',
        loadChildren: './admin/admin/admin.module#AdminModule'
      },
      {
        path: 'admin/department',
        loadChildren: './admin/department/admin-department.module#AdminDepartmentModule'
      },
      {
        path: 'admin/user',
        loadChildren: './admin/user/admin-user.module#AdminUserModule'
      },
      {
        path: '',
        component: HomeComponent
        // canActivate: [NoAuthGuard]
      }
    ]
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path:'',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  }
], { useHash: true });

@NgModule({
  imports: [
    rootRouting
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}

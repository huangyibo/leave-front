import {NgModule, ModuleWithProviders} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./auth.component";
import {p500Component} from "./pages/500.component";
import {p404Component} from "./pages/404.component";
import {NoAuthGuard} from "./no-auth-guard.service";


export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: '',
    children: [
      {
        path:'login',
        component: AuthComponent,
        data: {
          title: '用户登录'
        }
      },
      {
        path: 'register',
        component: AuthComponent,
        data: {
          title: '用户注册'
        }
      },
      {
        path: '404',
        component: p404Component,
        data: {
          title: '404错误'
        }
      },
      {
        path: '500',
        component: p500Component,
        data: {
          title: '500错误'
        }
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
export class AuthRoutingModule{}

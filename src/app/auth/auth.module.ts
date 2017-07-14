import {NgModule} from "@angular/core";
import {AuthComponent} from "./auth.component";
import {NoAuthGuard} from "./no-auth-guard.service";
import {SharedModule} from "../shared/shared.module";
import {AuthRoutingModule} from "./auth.routing";
import {p500Component} from "./pages/500.component";
import {p404Component} from "./pages/404.component";

@NgModule({
  imports: [
    SharedModule,
    AuthRoutingModule
  ],
  declarations: [
    AuthComponent,
    p404Component,
    p500Component
  ],
  providers: [
    NoAuthGuard
  ]
})
export class AuthModule {}

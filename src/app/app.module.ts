import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, Http} from "@angular/http";
import {AppComponent} from "./app.component";
import {ButtonsModule, AlertModule, DatepickerModule, CarouselModule} from "ng2-bootstrap";
import {ApiService} from "./shared/services/api.serivce";
import {AboutService} from "./shared/services/about.service";
import {AdminService} from "./shared/services/admin.service";
import {AuthGuardService} from "./shared/services/auth-guard.service";
import {DepartmentService} from "./shared/services/department.service";
import {HomeService} from "./shared/services/home.service";
import {JwtService} from "./shared/services/jwt.service";
import {LeaveRequestService} from "./shared/services/leave-request.service";
import {RoleService} from "./shared/services/role.service";
import {UserService} from "./shared/services/user.service";
import {AdminJwtService} from "./shared/services/admin-jwt.service";
// import {FooterComponent} from "./shared/layout/footer.component";
import {ToasterModule} from "angular2-toaster/angular2-toaster";
import {SharedModule} from "./shared/shared.module";
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from "ng2-translate";
import {MessageService} from "./shared/services/message.service";
import {LocaleTranslateService} from "./shared/services/translate.service";
import {LoggerService} from "./shared/services/logger.service";
import {BreadcrumbService} from "./shared/services/breadcrumb.service";
import {HomeComponent} from "./home/home.component";
import {NoAuthGuard} from "./auth/no-auth-guard.service";
import {AppRoutingModule} from "./app.routing";
import {SimpleLayoutComponent} from "./layouts/simple-layout.component";
import {FullLayoutComponent} from "./layouts/full-layout.component";
/*import {BreadcrumbComponent} from "./shared/widgets/breadcrumb/breadcrumb.component";
import {AppHeaderComponent} from "./shared/widgets/app-header/app-header.component";
import {AppFooterComponent} from "./shared/widgets/app-footer/app-footer.component";
import {MenuAsideComponent} from "./shared/widgets/menu-aside/menu-aside.component";
import {ControlSidebarComponent} from "./shared/widgets/control-sidebar/control-sidebar.component";
import {MessagesBoxComponent} from "./shared/widgets/messages-box/messages-box.component";
import {NotificationBoxComponent} from "./shared/widgets/notification-box/notification-box.component";
import {TasksBoxComponent} from "./shared/widgets/tasks-box/tasks-box.component";
import {UserBoxComponent} from "./shared/widgets/user-box/user-box.component";*/

/*const rootRouting: ModuleWithProviders = RouterModule.forRoot([
  // Root

], { useHash: true });*/


export function createTranslateLoader( http: Http) {
  return new TranslateStaticLoader( http, '../public/assets/i18n', '.json');
}

let modules = [
  AlertModule.forRoot(),
  DatepickerModule.forRoot(),
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  HttpModule,
  SharedModule,
  ButtonsModule.forRoot(),
  CarouselModule.forRoot(),
  TranslateModule.forRoot({
    deps: [Http],
    provide: TranslateLoader,
    useFactory: (createTranslateLoader)
  }),
  ToasterModule
];


/*let widgets = [
  BreadcrumbComponent,
  AppHeaderComponent,
  AppFooterComponent,
  MenuAsideComponent,
  ControlSidebarComponent,
  MessagesBoxComponent,
  NotificationBoxComponent,
  TasksBoxComponent,
  UserBoxComponent
];*/


let services = [
  ApiService,
  AboutService,
  AdminService,
  AuthGuardService,
  DepartmentService,
  HomeService,
  JwtService,
  LeaveRequestService,
  RoleService,
  UserService,
  AdminJwtService,
  MessageService,
  LocaleTranslateService,
  LoggerService,
  BreadcrumbService,
  NoAuthGuard
];

let pages = [
  HomeComponent,
  FullLayoutComponent,
  SimpleLayoutComponent
];

@NgModule({
  declarations: [
    AppComponent,
    ...pages
  ],
  imports: [
    ...modules

  ],
  providers: [
    ...services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

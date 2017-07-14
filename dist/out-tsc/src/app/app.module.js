var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule, Http } from "@angular/http";
import { AppComponent } from "./app.component";
import { ButtonsModule, AlertModule, DatepickerModule, CarouselModule } from "ng2-bootstrap";
import { ApiService } from "./shared/services/api.serivce";
import { AboutService } from "./shared/services/about.service";
import { AdminService } from "./shared/services/admin.service";
import { AuthGuardService } from "./shared/services/auth-guard.service";
import { DepartmentService } from "./shared/services/department.service";
import { HomeService } from "./shared/services/home.service";
import { JwtService } from "./shared/services/jwt.service";
import { LeaveRequestService } from "./shared/services/leave-request.service";
import { RoleService } from "./shared/services/role.service";
import { UserService } from "./shared/services/user.service";
import { AdminJwtService } from "./shared/services/admin-jwt.service";
import { ToasterModule } from "angular2-toaster/angular2-toaster";
import { SharedModule } from "./shared/shared.module";
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from "ng2-translate";
import { MessageService } from "./shared/services/message.service";
import { LocaleTranslateService } from "./shared/services/translate.service";
import { LoggerService } from "./shared/services/logger.service";
import { BreadcrumbService } from "./shared/services/breadcrumb.service";
import { HomeComponent } from "./home/home.component";
import { NoAuthGuard } from "./auth/no-auth-guard.service";
import { AppRoutingModule } from "./app.routing";
import { SimpleLayoutComponent } from "./layouts/simple-layout.component";
import { FullLayoutComponent } from "./layouts/full-layout.component";
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
export function createTranslateLoader(http) {
    return new TranslateStaticLoader(http, '../public/assets/i18n', '.json');
}
var modules = [
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
var services = [
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
var pages = [
    HomeComponent,
    FullLayoutComponent,
    SimpleLayoutComponent
];
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent
            ].concat(pages),
            imports: modules.slice(),
            providers: services.slice(),
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var ng2_bootstrap_1 = require("ng2-bootstrap");
var api_serivce_1 = require("./shared/services/api.serivce");
var about_service_1 = require("./shared/services/about.service");
var admin_service_1 = require("./shared/services/admin.service");
var auth_guard_service_1 = require("./shared/services/auth-guard.service");
var department_service_1 = require("./shared/services/department.service");
var home_service_1 = require("./shared/services/home.service");
var jwt_service_1 = require("./shared/services/jwt.service");
var leave_request_service_1 = require("./shared/services/leave-request.service");
var role_service_1 = require("./shared/services/role.service");
var user_service_1 = require("./shared/services/user.service");
var admin_jwt_service_1 = require("./shared/services/admin-jwt.service");
// import {FooterComponent} from "./shared/layout/footer.component";
var auth_module_1 = require("./auth/auth.module");
var router_1 = require("@angular/router");
var angular2_toaster_1 = require('angular2-toaster/angular2-toaster');
var shared_module_1 = require("./shared/shared.module");
var ng2_translate_1 = require("ng2-translate");
var message_service_1 = require("./shared/services/message.service");
var translate_service_1 = require("./shared/services/translate.service");
var logger_service_1 = require("./shared/services/logger.service");
var breadcrumb_service_1 = require("./shared/services/breadcrumb.service");
var home_component_1 = require("./pages/home/home.component");
var page_num_component_1 = require("./pages/page-num/page-num.component");
var no_auth_guard_service_1 = require("./auth/no-auth-guard.service");
var app_routing_module_1 = require("./app-routing.module");
/*import {BreadcrumbComponent} from "./shared/widgets/breadcrumb/breadcrumb.component";
import {AppHeaderComponent} from "./shared/widgets/app-header/app-header.component";
import {AppFooterComponent} from "./shared/widgets/app-footer/app-footer.component";
import {MenuAsideComponent} from "./shared/widgets/menu-aside/menu-aside.component";
import {ControlSidebarComponent} from "./shared/widgets/control-sidebar/control-sidebar.component";
import {MessagesBoxComponent} from "./shared/widgets/messages-box/messages-box.component";
import {NotificationBoxComponent} from "./shared/widgets/notification-box/notification-box.component";
import {TasksBoxComponent} from "./shared/widgets/tasks-box/tasks-box.component";
import {UserBoxComponent} from "./shared/widgets/user-box/user-box.component";*/
var rootRouting = router_1.RouterModule.forRoot([], { useHash: true });
function createTranslateLoader(http) {
    return new ng2_translate_1.TranslateStaticLoader(http, '../public/assets/i18n', '.json');
}
exports.createTranslateLoader = createTranslateLoader;
var modules = [
    platform_browser_1.BrowserModule,
    forms_1.FormsModule,
    http_1.HttpModule,
    auth_module_1.AuthModule,
    rootRouting,
    shared_module_1.SharedModule,
    ng2_bootstrap_1.ButtonsModule.forRoot(),
    angular2_toaster_1.ToasterModule,
    ng2_translate_1.TranslateModule.forRoot({
        deps: [http_1.Http],
        provide: ng2_translate_1.TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ng2_bootstrap_1.AlertModule.forRoot(),
    ng2_bootstrap_1.DatepickerModule.forRoot()
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
    api_serivce_1.ApiService,
    about_service_1.AboutService,
    admin_service_1.AdminService,
    auth_guard_service_1.AuthGuardService,
    department_service_1.DepartmentService,
    home_service_1.HomeService,
    jwt_service_1.JwtService,
    leave_request_service_1.LeaveRequestService,
    role_service_1.RoleService,
    user_service_1.UserService,
    admin_jwt_service_1.AdminJwtService,
    message_service_1.MessageService,
    translate_service_1.LocaleTranslateService,
    logger_service_1.LoggerService,
    breadcrumb_service_1.BreadcrumbService,
    no_auth_guard_service_1.NoAuthGuard
];
var pages = [
    home_component_1.HomeComponent,
    page_num_component_1.PageNumComponent
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ].concat(pages),
            imports: modules.concat([
                app_routing_module_1.AppRoutingModule
            ]),
            providers: services.slice(),
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

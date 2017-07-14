"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ng2_translate_1 = require("ng2-translate");
var router_1 = require("@angular/router");
var list_errors_component_1 = require("./list-errors.component");
var show_authed_directive_1 = require("./show-authed.directive");
var breadcrumb_component_1 = require("./widgets/breadcrumb/breadcrumb.component");
var app_header_component_1 = require("./widgets/app-header/app-header.component");
var app_footer_component_1 = require("./widgets/app-footer/app-footer.component");
var menu_aside_component_1 = require("./widgets/menu-aside/menu-aside.component");
var control_sidebar_component_1 = require("./widgets/control-sidebar/control-sidebar.component");
var messages_box_component_1 = require("./widgets/messages-box/messages-box.component");
var notification_box_component_1 = require("./widgets/notification-box/notification-box.component");
var tasks_box_component_1 = require("./widgets/tasks-box/tasks-box.component");
var user_box_component_1 = require("./widgets/user-box/user-box.component");
var footer_component_1 = require("./layout/footer.component");
var header_component_1 = require("./layout/header.component");
var widgets = [
    breadcrumb_component_1.BreadcrumbComponent,
    app_header_component_1.AppHeaderComponent,
    app_footer_component_1.AppFooterComponent,
    menu_aside_component_1.MenuAsideComponent,
    control_sidebar_component_1.ControlSidebarComponent,
    messages_box_component_1.MessagesBoxComponent,
    notification_box_component_1.NotificationBoxComponent,
    tasks_box_component_1.TasksBoxComponent,
    user_box_component_1.UserBoxComponent
];
var layouts = [
    header_component_1.HeaderComponent,
    footer_component_1.FooterComponent
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                ng2_translate_1.TranslateModule
            ],
            declarations: [
                list_errors_component_1.ListErrorsComponent,
                show_authed_directive_1.ShowAuthedDirective
            ].concat(widgets, layouts),
            exports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                router_1.RouterModule,
                ng2_translate_1.TranslateModule,
                list_errors_component_1.ListErrorsComponent,
                show_authed_directive_1.ShowAuthedDirective
            ].concat(widgets, layouts)
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var full_layout_component_1 = require("./layouts/full-layout.component");
var layouts_module_1 = require("./layouts/layouts.module");
var home_component_1 = require("./home/home.component");
var no_auth_guard_service_1 = require("./auth/no-auth-guard.service");
var page_num_component_1 = require("./page-num/page-num.component");
exports.routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: full_layout_component_1.FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'home',
                component: home_component_1.HomeComponent
            },
            {
                canActivate: [no_auth_guard_service_1.NoAuthGuard],
                component: page_num_component_1.PageNumComponent,
                path: 'page/:id'
            }
        ]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                layouts_module_1.LayoutsModule,
                router_1.RouterModule.forRoot([
                    exports.routes
                ], { useHash: true })
            ],
            declarations: [
                home_component_1.HomeComponent,
                page_num_component_1.PageNumComponent
            ],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

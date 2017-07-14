var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { p500Component } from "./pages/500.component";
import { p404Component } from "./pages/404.component";
export var routes = RouterModule.forChild([
    {
        path: '',
        children: [
            {
                path: 'login',
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
export var AuthRoutingModule = (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        NgModule({
            imports: [
                routes
            ],
            exports: [
                RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/auth/auth.routing.js.map
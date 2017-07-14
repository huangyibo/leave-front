var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { BreadcrumbService } from "../shared/services/breadcrumb.service";
import { UserService } from "../shared/services/user.service";
export var HomeComponent = (function () {
    function HomeComponent(breadServ, userService) {
        this.breadServ = breadServ;
        this.userService = userService;
        this.date = new Date();
        // TODO
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // setttings the header for the home
        this.breadServ.clear();
        this.breadServ.set({
            description: '',
            display: true,
            header: '主页',
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                }
            ]
        });
        // 获取 real_name
        this.userService.currentUser.subscribe(function (user) {
            _this.real_name = user.real_name;
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        // removing the header
        this.breadServ.clear();
    };
    HomeComponent = __decorate([
        Component({
            selector: 'app-home',
            styleUrls: ['./home.component.css'],
            templateUrl: './home.component.html'
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/home/home.component.js.map
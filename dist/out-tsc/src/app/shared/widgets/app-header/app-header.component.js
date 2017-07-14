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
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
export var AppHeaderComponent = (function () {
    function AppHeaderComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        // TODO
    }
    AppHeaderComponent.prototype.logout = function () {
        this.userService.purgeAuth();
        this.router.navigateByUrl('/auth/login');
    };
    AppHeaderComponent = __decorate([
        Component({
            selector: 'app-header',
            styleUrls: ['./app-header.component.css'],
            templateUrl: './app-header.component.html'
        }), 
        __metadata('design:paramtypes', [UserService, Router])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/widgets/app-header/app-header.component.js.map
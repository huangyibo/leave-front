var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
import { LocaleTranslateService } from "../../services/translate.service";
export var UserBoxComponent = (function () {
    function UserBoxComponent(userService, router, localeTranslateService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.localeTranslateService = localeTranslateService;
        this.currentUser = new User();
        this.logout = function () {
            _this.userService.purgeAuth();
            _this.router.navigate(['/auth/login']);
            // this.auth.logout();
        };
        this.userManage = function () {
        };
        this.translate = function (msg) {
            return _this.localeTranslateService.getTranslate().instant(msg);
        };
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    UserBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    __decorate([
        Output(), 
        __metadata('design:type', Object)
    ], UserBoxComponent.prototype, "translate", void 0);
    UserBoxComponent = __decorate([
        Component({
            /* tslint:disable */
            selector: '.userBox',
            /* tslint:enable */
            styleUrls: ['./user-box.component.css'],
            templateUrl: './user-box.component.html'
        }), 
        __metadata('design:paramtypes', [UserService, Router, LocaleTranslateService])
    ], UserBoxComponent);
    return UserBoxComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/widgets/user-box/user-box.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_model_1 = require("../../models/user.model");
var UserBoxComponent = (function () {
    function UserBoxComponent(userService, router, localeTranslateService) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.localeTranslateService = localeTranslateService;
        this.currentUser = new user_model_1.User();
        this.logout = function () {
            _this.router.navigate(['/']);
            // this.auth.logout();
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
        core_1.Output()
    ], UserBoxComponent.prototype, "translate", void 0);
    UserBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.userBox',
            /* tslint:enable */
            styleUrls: ['./user-box.component.css'],
            templateUrl: './user-box.component.html'
        })
    ], UserBoxComponent);
    return UserBoxComponent;
}());
exports.UserBoxComponent = UserBoxComponent;

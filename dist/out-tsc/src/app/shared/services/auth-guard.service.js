var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
export var AuthGuardService = (function () {
    function AuthGuardService(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.userService.isAuthenticated.take(1);
    };
    AuthGuardService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [Router, UserService])
    ], AuthGuardService);
    return AuthGuardService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/auth-guard.service.js.map
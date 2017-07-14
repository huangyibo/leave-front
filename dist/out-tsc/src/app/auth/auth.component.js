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
import { Errors } from "../shared/models/errors.model";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { User } from "../shared/models/user.model";
export var AuthComponent = (function () {
    function AuthComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authType = '';
        this.isLoginUrl = null;
        this.title = '';
        this.buttonName = '';
        this.errors = new Errors();
        this.isSubmitting = false;
        // authForm: FormGroup;
        this.user = new User();
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.url.subscribe(function (data) {
            // Get the last piece of the URL (it's either 'login' or 'register')
            _this.authType = data[data.length - 1].path;
            // Set a tile for the page accordingly
            _this.title = (_this.authType === 'login') ? "用户登录" : "用户注册";
            _this.buttonName = (_this.authType === 'login') ? "登录" : "注册";
            _this.isLoginUrl = (_this.authType === 'login');
        });
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = new Errors();
        if (this.isLoginUrl) {
            this.userService
                .attemptAuth(this.authType, this.user)
                .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, function (err) {
                console.log(err.message);
                _this.errors.errors['error'] = err.message;
                _this.isSubmitting = false;
            });
        }
        else {
            this.userService
                .save(this.user)
                .subscribe(function (data) { return _this.router.navigateByUrl('/login'); }, function (err) {
                _this.errors.errors['error'] = err.message;
                _this.isSubmitting = false;
            });
        }
    };
    AuthComponent = __decorate([
        Component({
            selector: 'auth-page',
            templateUrl: "./auth.component.html",
            styleUrls: ['./auth.component.css']
        }), 
        __metadata('design:paramtypes', [ActivatedRoute, Router, UserService])
    ], AuthComponent);
    return AuthComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/auth/auth.component.js.map
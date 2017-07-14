"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var errors_model_1 = require("../shared/models/errors.model");
var user_model_1 = require("../shared/models/user.model");
var AuthComponent = (function () {
    function AuthComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authType = '';
        this.isLoginUrl = null;
        this.title = '';
        this.buttonName = '';
        this.errors = new errors_model_1.Errors();
        this.isSubmitting = false;
        // authForm: FormGroup;
        this.user = new user_model_1.User();
        // use FormBuilder to create a form group //private fb: FormBuilder
        /*this.authForm = this.fb.group({
         'email': ['', Validators.required],
         'password': ['', Validators.required]
         });*/
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
            // add form control for email if this is the register page
            /*if (this.authType === 'register') {
             this.authForm.addControl('email', new FormControl());
             }*/
        });
    };
    AuthComponent.prototype.submitForm = function () {
        var _this = this;
        this.isSubmitting = true;
        this.errors = new errors_model_1.Errors();
        if (this.isLoginUrl) {
            this.userService
                .attemptAuth(this.authType, this.user)
                .subscribe(function (data) { return _this.router.navigateByUrl('/'); }, (function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            }));
        }
        else {
            this.userService
                .save(this.user)
                .subscribe(function (data) { return _this.router.navigateByUrl('/login'); }, function (err) {
                _this.errors = err;
                _this.isSubmitting = false;
            });
        }
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'auth-page',
            templateUrl: "./auth.component.html",
            styleUrls: ['./auth.component.css']
        })
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;

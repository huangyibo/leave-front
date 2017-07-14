"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var user_model_1 = require("../../models/user.model");
var MenuAsideComponent = (function () {
    function MenuAsideComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.currentUser = new user_model_1.User();
        this.links = [];
        // getting the current url
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () {
        // TODO
    };
    __decorate([
        core_1.Input()
    ], MenuAsideComponent.prototype, "links", void 0);
    MenuAsideComponent = __decorate([
        core_1.Component({
            selector: 'app-menu-aside',
            styleUrls: ['./menu-aside.component.css'],
            templateUrl: './menu-aside.component.html'
        })
    ], MenuAsideComponent);
    return MenuAsideComponent;
}());
exports.MenuAsideComponent = MenuAsideComponent;

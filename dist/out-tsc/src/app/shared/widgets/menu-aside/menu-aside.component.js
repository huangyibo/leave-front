var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { User } from "../../models/user.model";
import { UserService } from "../../services/user.service";
export var MenuAsideComponent = (function () {
    function MenuAsideComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.currentUser = new User();
        this.links = [];
        // getting the current url
        this.router.events.subscribe(function (evt) { return _this.currentUrl = evt.url; });
        this.userService.currentUser.subscribe(function (user) { return _this.currentUser = user; });
    }
    MenuAsideComponent.prototype.ngOnInit = function () {
        // TODO
    };
    __decorate([
        Input(), 
        __metadata('design:type', Array)
    ], MenuAsideComponent.prototype, "links", void 0);
    MenuAsideComponent = __decorate([
        Component({
            selector: 'app-menu-aside',
            styleUrls: ['./menu-aside.component.css'],
            templateUrl: './menu-aside.component.html'
        }), 
        __metadata('design:paramtypes', [UserService, Router])
    ], MenuAsideComponent);
    return MenuAsideComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/widgets/menu-aside/menu-aside.component.js.map
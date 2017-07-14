"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ShowAuthedDirective = (function () {
    function ShowAuthedDirective(templateRef, userService, viewContainerRef) {
        this.templateRef = templateRef;
        this.userService = userService;
        this.viewContainerRef = viewContainerRef;
    }
    ShowAuthedDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.isAuthenticated.subscribe(function (isAuthenticated) {
            if (isAuthenticated && _this.condition || !isAuthenticated && !_this.condition) {
                _this.viewContainerRef.createEmbeddedView(_this.templateRef);
            }
            else {
                _this.viewContainerRef.clear();
            }
        });
    };
    Object.defineProperty(ShowAuthedDirective.prototype, "showAuthed", {
        set: function (condition) {
            this.condition = condition;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], ShowAuthedDirective.prototype, "showAuthed", null);
    ShowAuthedDirective = __decorate([
        core_1.Directive({ selector: '[showAuthed]' })
    ], ShowAuthedDirective);
    return ShowAuthedDirective;
}());
exports.ShowAuthedDirective = ShowAuthedDirective;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TasksBoxComponent = (function () {
    function TasksBoxComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.tasksLength = { 0: '9' };
        // TODO
        userService.currentUser.subscribe(function (user) {
            _this.user = user;
        });
    }
    TasksBoxComponent.prototype.ngOnInit = function () {
        // TODO
    };
    __decorate([
        core_1.Input()
    ], TasksBoxComponent.prototype, "user", void 0);
    TasksBoxComponent = __decorate([
        core_1.Component({
            /* tslint:disable */
            selector: '.tasksBox',
            /* tslint:enable */
            styleUrls: ['./tasks-box.component.css'],
            templateUrl: './tasks-box.component.html'
        })
    ], TasksBoxComponent);
    return TasksBoxComponent;
}());
exports.TasksBoxComponent = TasksBoxComponent;

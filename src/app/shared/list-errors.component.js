"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ListErrorsComponent = (function () {
    function ListErrorsComponent() {
        this.formattedErrors = [];
        this.error = null;
        this.isError = false;
    }
    ListErrorsComponent.prototype.ngOnInit = function () {
        this.isError = false;
    };
    Object.defineProperty(ListErrorsComponent.prototype, "errors", {
        set: function (error) {
            if (error) {
                this.error = error;
                this.isError = true;
            }
            else {
                this.isError = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ListErrorsComponent.prototype, "errorInfo", {
        get: function () {
            return this.error;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], ListErrorsComponent.prototype, "errors", null);
    __decorate([
        core_1.Output()
    ], ListErrorsComponent.prototype, "errorInfo", null);
    ListErrorsComponent = __decorate([
        core_1.Component({
            selector: 'list-errors',
            templateUrl: './list-errors.component.html',
            styleUrls: ['./list-errors.component.css']
        })
    ], ListErrorsComponent);
    return ListErrorsComponent;
}());
exports.ListErrorsComponent = ListErrorsComponent;

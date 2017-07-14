"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var jwt_service_1 = require("./jwt.service");
var AdminJwtService = (function (_super) {
    __extends(AdminJwtService, _super);
    function AdminJwtService() {
        _super.apply(this, arguments);
    }
    AdminJwtService.prototype.getToken = function () {
        return window.localStorage['adminJwtToken'];
    };
    AdminJwtService.prototype.saveToken = function (token) {
        window.localStorage['adminJwtToken'] = token;
    };
    AdminJwtService.prototype.destroyToken = function () {
        window.localStorage.removeItem('adminJwtToken');
    };
    AdminJwtService = __decorate([
        core_1.Injectable()
    ], AdminJwtService);
    return AdminJwtService;
}(jwt_service_1.JwtService));
exports.AdminJwtService = AdminJwtService;

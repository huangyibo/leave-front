var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { BehaviorSubject, ReplaySubject, Observable } from "rxjs";
import { ApiService } from "./api.serivce";
import { Http } from "@angular/http";
import { Admin } from "../models/admin.model";
import { AdminJwtService } from "./admin-jwt.service";
export var AdminService = (function () {
    function AdminService(apiService, http, adminJwtService) {
        this.apiService = apiService;
        this.http = http;
        this.adminJwtService = adminJwtService;
        this.currentAdminSubject = new BehaviorSubject(new Admin());
        this.currentAdmin = this.currentAdminSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in local storage with server & load user's info.
    // This runs once on application startup.
    AdminService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.adminJwtService.getToken()) {
            this.apiService.get('/token/admin')
                .subscribe(function (data) { return _this.setAuth(data.admin); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    AdminService.prototype.setAuth = function (admin) {
        // Save JWT sent from server in local storage
        this.adminJwtService.saveToken(admin.token);
        // Set current admin data into observable
        this.currentAdminSubject.next(admin);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    };
    AdminService.prototype.purgeAuth = function () {
        // Remove JWT from local storage
        this.adminJwtService.destroyToken();
        // Set current admin to an empty object
        this.currentAdminSubject.next(new Admin());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    AdminService.prototype.attemptAuth = function (type, admin) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/token/admin' + route, admin)
            .map(function (data) {
            _this.setAuth(data.admin);
            return data.admin;
        });
    };
    // Get current logined admin
    AdminService.prototype.getCurrentAdmin = function () {
        return this.currentAdminSubject.getValue();
    };
    // Update the admin on the server (level, email, etc)
    AdminService.prototype.update = function (admin) {
        var _this = this;
        var adminId = this.getCurrentAdmin().id;
        return this.apiService
            .put('/admin/' + adminId, admin)
            .map(function (data) {
            // Update the current Admin observable
            _this.currentAdminSubject.next(data.admin);
            return data.admin;
        });
    };
    // save the admin on the server
    AdminService.prototype.save = function (admin) {
        this.invalidate();
        if (admin.id) {
            return this.apiService
                .put('/admin/' + admin.id, admin)
                .map(function (data) {
                return data.admin;
            });
        }
        else {
            return this.apiService
                .post('/admin', admin)
                .map(function (data) {
                return data.admin;
            });
        }
    };
    // Delete an admin on the server.
    AdminService.prototype.delete = function (adminId) {
        this.invalidate();
        return this.apiService.delete('/admin/' + adminId).map(function (data) {
            // return response message
            return data;
        });
    };
    // Logout the current admin on the server.
    AdminService.prototype.logout = function () {
        return this.apiService.get('/token/admin/logout');
    };
    AdminService.prototype.invalidate = function () {
        var currentAdmin = this.getCurrentAdmin();
        if (currentAdmin.level === 'two') {
            return Observable.throw(new Error('该管理员权限不满足!'));
        }
    };
    AdminService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ApiService, Http, AdminJwtService])
    ], AdminService);
    return AdminService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/admin.service.js.map
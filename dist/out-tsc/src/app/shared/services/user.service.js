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
import { BehaviorSubject, ReplaySubject } from "rxjs";
import { User } from "../models/user.model";
import { ApiService } from "./api.serivce";
import { Http } from "@angular/http";
import { JwtService } from "./jwt.service";
import { Page } from "../models/page.model";
export var UserService = (function () {
    function UserService(apiService, http, jwtService) {
        this.apiService = apiService;
        this.http = http;
        this.jwtService = jwtService;
        this.currentUserSubject = new BehaviorSubject(new User());
        this.currentUser = this.currentUserSubject.asObservable().distinctUntilChanged();
        this.isAuthenticatedSubject = new ReplaySubject(1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    // Verify JWT in local storage with server & load user's info.
    // This runs once on application startup.
    UserService.prototype.populate = function () {
        var _this = this;
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken()) {
            this.apiService.get('/token/user')
                .subscribe(function (data) { return _this.setAuth(data.user); }, function (err) { return _this.purgeAuth(); });
        }
        else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    };
    UserService.prototype.setAuth = function (user) {
        // set default header img
        user.header_img = "public/assets/img/user1-128x128.jpg";
        // Save JWT sent from server in local storage
        this.jwtService.saveToken(user.token);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
        // Set current user data into observable
        this.currentUserSubject.next(user);
    };
    UserService.prototype.purgeAuth = function () {
        // Remove JWT from local storage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next(new User());
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    };
    UserService.prototype.attemptAuth = function (type, user) {
        var _this = this;
        var route = (type === 'login') ? '/login' : '';
        return this.apiService.post('/token/user' + route, user)
            .map(function (data) {
            _this.setAuth(data.user);
            return data.user;
        });
    };
    // Get Current Logined User
    UserService.prototype.getCurrentUser = function () {
        return this.currentUserSubject.getValue();
    };
    // Update the user on the server (real_name, password, email, etc)
    UserService.prototype.update = function (user) {
        var _this = this;
        var userId = this.getCurrentUser().id;
        return this.apiService
            .put('/user/' + userId, user)
            .map(function (data) {
            // Update the currentUser observable
            _this.currentUserSubject.next(data.user);
            return data.user;
        });
    };
    // Create the user on the server
    UserService.prototype.save = function (user) {
        var _this = this;
        if (user.id) {
            return this.update(user);
        }
        else {
            return this.apiService
                .post('/user', user)
                .map(function (data) {
                // Update the currentUser observable
                _this.currentUserSubject.next(data.user);
                return data.user;
            });
        }
    };
    UserService.prototype.list = function (page_no, limit, userFilter) {
        var options = Page.generateUrlOptions(page_no, limit);
        return this.apiService
            .post('/user/list' + options, userFilter)
            .map(function (data) {
            return data;
        });
    };
    // Delete an user on the server by ID
    UserService.prototype.delete = function (userId) {
        return this.apiService
            .delete('/user/' + userId)
            .map(function (data) {
            // return response message
            return data;
        });
    };
    // Logout current user
    UserService.prototype.logout = function () {
        this.apiService
            .get('/token/user/logout');
    };
    UserService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ApiService, Http, JwtService])
    ], UserService);
    return UserService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/user.service.js.map
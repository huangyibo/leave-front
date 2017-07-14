"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var environment_1 = require('../../../environments/environment');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var ApiService = (function () {
    function ApiService(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    ApiService.prototype.setHeader = function () {
        var headersConfig = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };
        if (this.jwtService.getToken()) {
            headersConfig['Authorization'] = "Token " + this.jwtService.getToken();
            headersConfig['token'] = this.jwtService.getToken();
            headersConfig['X-Auth-Token'] = this.jwtService.getToken();
        }
        return new http_1.Headers(headersConfig);
    };
    ApiService.prototype.formatErrors = function (error) {
        return Rx_1.Observable.throw(error.json());
    };
    ApiService.prototype.get = function (path, params) {
        if (params === void 0) { params = new http_1.URLSearchParams(); }
        return this.http.get("" + environment_1.environment.api_url + path, { headers: this.setHeader(), search: params })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.put = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.put("" + environment_1.environment.api_url + path, JSON.stringify(body), { headers: this.setHeader() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.post = function (path, body) {
        if (body === void 0) { body = {}; }
        return this.http.post("" + environment_1.environment.api_url + path, JSON.stringify(body), { headers: this.setHeader() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService.prototype.delete = function (path) {
        return this.http.delete("" + environment_1.environment.api_url + path, { headers: this.setHeader() })
            .catch(this.formatErrors)
            .map(function (res) { return res.json(); });
    };
    ApiService = __decorate([
        core_1.Injectable()
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

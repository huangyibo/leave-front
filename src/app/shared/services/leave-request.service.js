"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var LeaveRequestService = (function () {
    function LeaveRequestService(apiService) {
        this.apiService = apiService;
    }
    LeaveRequestService.prototype.get = function (leaveRequestId) {
        return this.apiService
            .get('/leave-request/' + leaveRequestId)
            .map(function (data) {
            return data.leave_request;
        });
    };
    LeaveRequestService.prototype.delete = function (leaveRequestId) {
        return this.apiService
            .delete('/leave-request' + leaveRequestId);
    };
    LeaveRequestService.prototype.save = function (leaveRequest) {
        if (leaveRequest.id) {
            return this.apiService
                .put('/leave-request/' + leaveRequest.id, leaveRequest)
                .map(function (data) {
                return data.leave_request;
            });
        }
        else {
            return this.apiService
                .post('/leave-request', leaveRequest)
                .map(function (data) {
                return data.leave_request;
            });
        }
    };
    LeaveRequestService.prototype.list = function () {
        return this.apiService
            .get('/leave-request/')
            .map(function (data) {
            return data.leave_requests;
        });
    };
    LeaveRequestService.prototype.count = function () {
        return this.apiService
            .get('/leave-request/count')
            .map(function (data) {
            return data.value;
        });
    };
    LeaveRequestService = __decorate([
        core_1.Injectable()
    ], LeaveRequestService);
    return LeaveRequestService;
}());
exports.LeaveRequestService = LeaveRequestService;

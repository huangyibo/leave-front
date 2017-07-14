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
import { ApiService } from "./api.serivce";
import { LeaveRequestFilter } from "../models/leave-request-filter.model";
import { Page } from "../models/page.model";
export var LeaveRequestService = (function () {
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
    LeaveRequestService.prototype.reportLeaveRequests = function (page_no, limit, leaveRequestFilter) {
        var options = Page.generateUrlOptions(page_no, limit);
        if (leaveRequestFilter == null || leaveRequestFilter.category == null) {
            leaveRequestFilter = new LeaveRequestFilter();
            leaveRequestFilter.category = "ALL";
        }
        return this.apiService
            .post('/leave-request/report' + options, leaveRequestFilter)
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService.prototype.resumeLeaveRequests = function (page_no, limit, category) {
        var options = Page.generateUrlOptionWithCategory(category, page_no, limit);
        return this.apiService
            .get("/leave-request/resume" + options)
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService.prototype.reviewLeaveRequests = function (page_no, limit, category) {
        var options = Page.generateUrlOptionWithCategory(category, page_no, limit);
        return this.apiService
            .get("/leave-request/review" + options)
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService.prototype.signLeaveRequests = function (page_no, limit) {
        var options = Page.generateUrlOptions(page_no, limit);
        return this.apiService
            .get("/leave-request/sign" + options)
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService.prototype.signLeaveRequestByID = function (leave_request_id) {
        return this.apiService
            .put("/leave-request/" + leave_request_id + "/sign")
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService.prototype.historyLeaveRequests = function (page_no, limit) {
        var options = Page.generateUrlOptions(page_no, limit);
        return this.apiService
            .get("/leave-request/history" + options)
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService.prototype.currentLeaveRequests = function (page_no, limit) {
        var options = Page.generateUrlOptions(page_no, limit);
        return this.apiService
            .get("/leave-request/current" + options)
            .map(function (data) {
            return data;
        });
    };
    LeaveRequestService = __decorate([
        Injectable(), 
        __metadata('design:paramtypes', [ApiService])
    ], LeaveRequestService);
    return LeaveRequestService;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/shared/services/leave-request.service.js.map
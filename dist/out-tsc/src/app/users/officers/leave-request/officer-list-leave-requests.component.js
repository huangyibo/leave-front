var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Page } from "../../../shared/models/page.model";
import { Component } from "@angular/core";
import { BreadcrumbService } from "../../../shared/services/breadcrumb.service";
import { LeaveRequestService } from "../../../shared/services/leave-request.service";
import { LeaveRequest } from "../../../shared/models/leave-request.model";
import { Errors } from "../../../shared/models/errors.model";
import { User } from "../../../shared/models/user.model";
import { UserService } from "../../../shared/services/user.service";
import { ToasterService, ToasterConfig } from "angular2-toaster";
export var OfficerListLeaveRequestsComponent = (function () {
    function OfficerListLeaveRequestsComponent(breadcrumbService, userService, toasterService, leaveRequestService) {
        this.breadcrumbService = breadcrumbService;
        this.userService = userService;
        this.leaveRequestService = leaveRequestService;
        this.errors = new Errors();
        this.isLoading = false;
        this.submitingLeaveRequest = new LeaveRequest();
        this.editingLeaveRequest = new LeaveRequest();
        this.editingLeaveIndex = 0;
        this.isSubmiting = false;
        this.currentUser = new User();
        this.page = new Page();
        this.currentPage = 1;
        this.rowCount = 0;
        this.hasPrePage = false;
        this.hasNextPage = false;
        this.toasterconfig = new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 3000
        });
        this.toasterService = toasterService;
    }
    OfficerListLeaveRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // settings the header for about
        this.breadcrumbService.set({
            header: '请假审核状态',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/officer/leave-request/list'],
                    title: '请假审核状态'
                }
            ]
        });
        this.hasPrePage = false;
        this.hasNextPage = false;
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // this.isLoading = false;
        });
        this.page = new Page();
        this.page.current_page = 1;
        this.page.has_pre_page = false;
        this.page.has_next_page = false;
        this.getPage(1);
    };
    OfficerListLeaveRequestsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    OfficerListLeaveRequestsComponent.prototype.editLeave = function (leaveId) {
        var _this = this;
        var i = 0;
        this.leaveRequests.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var leaveItem = data_1[_i];
                if (leaveItem.id === leaveId) {
                    _this.editingLeaveRequest = leaveItem;
                    _this.editingLeaveIndex = i;
                    break;
                }
                i = i + 1;
            }
        });
        console.log("test:" + this.page.list[0].top_leader_agree);
    };
    OfficerListLeaveRequestsComponent.prototype.updateLeave = function () {
        var _this = this;
        this.isSubmiting = true;
        // this.leaveRequests[this.editingLeaveIndex] = this.editingLeaveRequest;
        this.submitingLeaveRequest = LeaveRequest.filterRepeat(this.editingLeaveRequest, this.submitingLeaveRequest);
        this.leaveRequestService.save(this.submitingLeaveRequest).subscribe(function (leave) {
            _this.leaveRequests = _this.leaveRequests.map(function (data) {
                _this.submitingLeaveRequest = data[_this.editingLeaveIndex];
                data[_this.editingLeaveIndex] = _this.editingLeaveRequest;
                return data;
            });
            _this.isSubmiting = false;
            _this.editingLeaveRequest = new LeaveRequest();
            _this.editingLeaveIndex = 0;
            $('#leave-modify').modal('hide');
            _this.popToast('success', null, '更新请假信息成功');
        }, function (err) {
            _this.isSubmiting = false;
            _this.popToast('error', null, err.message);
        });
    };
    OfficerListLeaveRequestsComponent.prototype.getPage = function (page_no) {
        var _this = this;
        this.isLoading = true;
        this.leaveRequests = this.leaveRequestService.currentLeaveRequests(page_no, 10)
            .do(function (data) {
            if (data != null) {
                _this.page = data;
                _this.currentPage = (data.current_page == null) ? 1 : data.current_page;
                _this.rowCount = (data.row_count == null) ? 1 : data.row_count;
            }
            else {
                _this.currentPage = 1;
                _this.rowCount = 0;
            }
        })
            .map(function (data) {
            if (data) {
                return data.list;
            }
            else {
                return [];
            }
        });
    };
    OfficerListLeaveRequestsComponent.prototype.signLeave = function (leaveId) {
        var _this = this;
        this.leaveRequestService.signLeaveRequestByID(leaveId).subscribe(function (data) {
            _this.popToast('success', null, data.toString());
            _this.leaveRequests = _this.leaveRequests
                .do(function (data) {
                var i = 0;
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var leaveItem = data_2[_i];
                    if (leaveItem.id === leaveId) {
                        leaveItem.signed_status = true;
                        data[i] = leaveItem;
                        break;
                    }
                    i++;
                }
            }).map(function (data) { return data; });
        }, function (err) {
            _this.popToast('error', null, (!err.message) ? '网络不稳定，请假签到失败' : err.message);
        });
    };
    OfficerListLeaveRequestsComponent.prototype.revokeLeave = function (leaveId) {
        var _this = this;
        this.leaveRequestService.delete(leaveId).subscribe(function (data) {
            _this.getPage(_this.page.current_page);
            _this.popToast('success', null, '请假撤销成功');
        }, function (err) {
            _this.popToast('error', null, (err.message == null) ? '网络不稳定，请假撤销失败' : err.message);
        });
    };
    OfficerListLeaveRequestsComponent.prototype.detailLeave = function (leaveId) {
        this.editLeave(leaveId);
    };
    OfficerListLeaveRequestsComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    OfficerListLeaveRequestsComponent = __decorate([
        Component({
            selector: 'officer-list-leave-requests',
            templateUrl: './officer-list-leave-requests.component.html',
            styleUrls: ['./officer-list-leave-requests.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, LeaveRequestService])
    ], OfficerListLeaveRequestsComponent);
    return OfficerListLeaveRequestsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/officers/leave-request/officer-list-leave-requests.component.js.map
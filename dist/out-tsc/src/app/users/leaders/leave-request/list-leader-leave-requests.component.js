var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ChangeDetectorRef } from "@angular/core";
import { BreadcrumbService } from "../../../shared/services/breadcrumb.service";
import { Errors } from "../../../shared/models/errors.model";
import { LeaveRequest } from "../../../shared/models/leave-request.model";
import { User } from "../../../shared/models/user.model";
import { Page } from "../../../shared/models/page.model";
import { ToasterConfig, ToasterService } from "angular2-toaster";
import { UserService } from "../../../shared/services/user.service";
import { LeaveRequestService } from "../../../shared/services/leave-request.service";
export var ListLeaderLeaveRequestsComponent = (function () {
    function ListLeaderLeaveRequestsComponent(breadcrumbService, userService, toasterService, ref, leaveRequestService) {
        this.breadcrumbService = breadcrumbService;
        this.userService = userService;
        this.leaveRequestService = leaveRequestService;
        // leaveRequests: LeaveRequest[] = [];
        this.errors = new Errors();
        this.isLoading = false;
        this.submitingLeaveRequest = new LeaveRequest();
        this.editingLeaveRequest = new LeaveRequest();
        this.isSubmiting = false;
        this.currentUser = new User();
        this.page = new Page();
        this.currentPage = 1;
        this.rowCount = 0;
        this.toasterconfig = new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 1500
        });
        this.toasterService = toasterService;
        this.ref = ref;
    }
    ListLeaderLeaveRequestsComponent.prototype.ngOnInit = function () {
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
                    link: ['/pages/list-leave-requests'],
                    title: '请假审核状态'
                }
            ]
        });
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
    ListLeaderLeaveRequestsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    ListLeaderLeaveRequestsComponent.prototype.editLeave = function (leaveId) {
        var _this = this;
        this.leaveRequests.subscribe(function (data) {
            var i = 0;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var leaveItem = data_1[_i];
                if (leaveItem.id === leaveId) {
                    _this.editingLeaveRequest = leaveItem;
                    _this.editingLeaveIndex = data.indexOf(leaveItem);
                    break;
                }
                i = i + 1;
            }
        });
    };
    ListLeaderLeaveRequestsComponent.prototype.updateLeave = function () {
        var _this = this;
        this.isSubmiting = true;
        this.submitingLeaveRequest = LeaveRequest.filterRepeat(this.submitingLeaveRequest, this.editingLeaveRequest);
        this.leaveRequestService.save(this.submitingLeaveRequest).subscribe(function (leave) {
            _this.isSubmiting = false;
            _this.editingLeaveRequest = leave;
            $('#leave-modify').modal('hide');
            _this.popToast('success', null, '更新请假信息成功');
        }, function (err) {
            _this.isSubmiting = false;
            _this.popToast('error', null, err.message);
        });
        this.leaveRequests = this.leaveRequests.map(function (data) {
            data.forEach(function (value, index) {
                if (value.id == _this.editingLeaveRequest.id) {
                    data[index] = _this.editingLeaveRequest;
                }
            });
            return data;
        });
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    ListLeaderLeaveRequestsComponent.prototype.getPage = function (page_no) {
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
    ListLeaderLeaveRequestsComponent.prototype.signLeave = function (leaveId) {
        var _this = this;
        this.leaveRequestService.signLeaveRequestByID(leaveId).subscribe(function (data) {
            _this.popToast('success', null, data.toString());
            _this.leaveRequests = _this.leaveRequests
                .map(function (data) {
                data.forEach(function (value, index) {
                    if (value.id == leaveId) {
                        data[index].signed_status = true;
                    }
                });
                return data;
            });
            _this.ref.markForCheck();
            _this.ref.detectChanges();
        }, function (err) {
            _this.popToast('error', null, (!err.message) ? '网络不稳定，请假签到失败' : err.message);
        });
    };
    ListLeaderLeaveRequestsComponent.prototype.revokeLeave = function (leaveId) {
        var _this = this;
        this.leaveRequestService.delete(leaveId).subscribe(function (data) {
            _this.getPage(_this.page.current_page);
            _this.popToast('success', null, '请假撤销成功');
        }, function (err) {
            _this.popToast('error', null, (err.message == null) ? '网络不稳定，请假撤销失败' : err.message);
        });
    };
    ListLeaderLeaveRequestsComponent.prototype.detailLeave = function (leaveId) {
        this.editLeave(leaveId);
    };
    ListLeaderLeaveRequestsComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    ListLeaderLeaveRequestsComponent = __decorate([
        Component({
            selector: 'officer-list-leave-requests',
            templateUrl: './list-leader-leave-requests.component.html',
            styleUrls: ['./list-leader-leave-requests.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, ChangeDetectorRef, LeaveRequestService])
    ], ListLeaderLeaveRequestsComponent);
    return ListLeaderLeaveRequestsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/leaders/leave-request/list-leader-leave-requests.component.js.map
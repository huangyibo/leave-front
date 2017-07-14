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
import { BreadcrumbService } from "../../../../../shared/services/breadcrumb.service";
import { LeaveRequest } from "../../../../../shared/models/leave-request.model";
import { Errors } from "../../../../../shared/models/errors.model";
import { User } from "../../../../../shared/models/user.model";
import { Page } from "../../../../../shared/models/page.model";
import { ToasterService, ToasterConfig } from "angular2-toaster";
import { UserService } from "../../../../../shared/services/user.service";
import { LeaveRequestService } from "../../../../../shared/services/leave-request.service";
export var ResumeOfficerLeaveComponent = (function () {
    function ResumeOfficerLeaveComponent(breadcrumbService, userService, toasterService, ref, leaveRequestService) {
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
        this.toasterconfig = new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 1500
        });
        this.toasterService = toasterService;
        this.ref = ref;
    }
    ResumeOfficerLeaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        // settings the header for about
        this.breadcrumbService.set({
            header: '学员销假管理',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/top-leader/leave-request/resume/officer'],
                    title: '学员销假管理'
                }
            ]
        });
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            // this.isLoading = false;
        });
        this.page = new Page();
        this.page.has_pre_page = false;
        this.page.has_next_page = false;
        this.getPage(1);
    };
    ResumeOfficerLeaveComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    ResumeOfficerLeaveComponent.prototype.editLeave = function (leaveId) {
        var _this = this;
        var i = 0;
        this.leaveRequests.subscribe(function (data) {
            if (data) {
                data.forEach(function (value, index) {
                    if (value.id == leaveId) {
                        _this.editingLeaveRequest = value;
                        _this.editingLeaveIndex = index;
                        return;
                    }
                });
            }
        });
    };
    ResumeOfficerLeaveComponent.prototype.getPage = function (page_no) {
        var _this = this;
        this.isLoading = true;
        this.leaveRequests = this.leaveRequestService.resumeLeaveRequests(page_no, 10, 'OFFICER')
            .do(function (data) {
            if (!(data == null)) {
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
            if (!data) {
                return [];
            }
            else {
                return data.list;
            }
        });
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    ResumeOfficerLeaveComponent.prototype.fakeLeave = function (leaveId) {
        var _this = this;
        this.isLoading = true;
        var leaveRequest = new LeaveRequest();
        leaveRequest.id = leaveId;
        leaveRequest.fake_status = true;
        this.leaveRequestService.save(leaveRequest).subscribe(function (data) {
            _this.isLoading = false;
            _this.getPage(_this.currentPage);
            _this.popToast('success', null, '销假成功！');
        }, function (error) {
            _this.isLoading = false;
            _this.popToast('warning', null, (!error.message) ? "网络不稳定，您的销假请求失败" : error.message);
        });
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    ResumeOfficerLeaveComponent.prototype.remindSignLeave = function (leaveId, user_id, user_name) {
        this.popToast('success', null, '您已成功提醒' + user_name + '签到！');
    };
    ResumeOfficerLeaveComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    ResumeOfficerLeaveComponent = __decorate([
        Component({
            selector: 'top-leader-resume-officer-leave',
            templateUrl: 'resume-officer-leave.component.html',
            styleUrls: ['resume-officer-leave.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, ChangeDetectorRef, LeaveRequestService])
    ], ResumeOfficerLeaveComponent);
    return ResumeOfficerLeaveComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/top-leaders/leave-request/for-officer/resume-officer-leave/resume-officer-leave.component.js.map
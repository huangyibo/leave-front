var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { BreadcrumbService } from "../../../shared/services/breadcrumb.service";
import { UserService } from "../../../shared/services/user.service";
import { LeaveRequest } from "../../../shared/models/leave-request.model";
import { LeaveRequestService } from "../../../shared/services/leave-request.service";
import { Errors } from "../../../shared/models/errors.model";
import { Router } from "@angular/router";
import { DateUtils } from "../../../shared/utils/date.utils";
import { ToasterConfig, ToasterService } from "angular2-toaster";
export var LeaderLeaveRequestsComponent = (function () {
    function LeaderLeaveRequestsComponent(breadcrumbService, leaveRequestService, router, toasterService, userService) {
        this.breadcrumbService = breadcrumbService;
        this.leaveRequestService = leaveRequestService;
        this.router = router;
        this.userService = userService;
        this.btnSubmitName = '提 交';
        this.btnResetName = '取消';
        this.isLoading = false;
        this.leaveRequest = new LeaveRequest();
        this.errors = new Errors();
        this.toasterconfig = new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 4000
        });
        this.toasterService = toasterService;
    }
    LeaderLeaveRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // settings the header for about
        this.breadcrumbService.set({
            header: 'SMMU卫生勤务学系请假单',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/leader/leave-request'],
                    title: '申请请假'
                }
            ]
        });
        this.leaveRequest = new LeaveRequest();
        // setting the current user
        this.userService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
            _this.leaveRequest.user_id = _this.currentUser.id;
        });
    };
    LeaderLeaveRequestsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    LeaderLeaveRequestsComponent.prototype.submitLeave = function () {
        var _this = this;
        this.isLoading = true;
        this.errors = new Errors();
        this.leaveRequest.apply_time = DateUtils.formatDateTime(new Date());
        this.leaveRequestService.save(this.leaveRequest)
            .subscribe(function (leaveRequest) {
            _this.leaveRequest = leaveRequest;
            _this.isLoading = false;
            _this.popToast('success', null, "请假信息提交成功，正在跳转至请假审核状态页面");
            _this.router.navigateByUrl('/leader/leave-request/list');
        }, function (error) {
            _this.errors.errors['error'] = error.message;
            _this.popToast('error', null, (!error.message) ? '网络不稳定，请假信息提交失败' : error.message);
            _this.isLoading = false;
        });
    };
    LeaderLeaveRequestsComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    LeaderLeaveRequestsComponent = __decorate([
        Component({
            selector: 'leader-leave-requests',
            templateUrl: './leader-leave-requests.component.html',
            styleUrls: ['./leader-leave-requests.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, LeaveRequestService, Router, ToasterService, UserService])
    ], LeaderLeaveRequestsComponent);
    return LeaderLeaveRequestsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/leaders/leave-request/leader-leave-requests.component.js.map
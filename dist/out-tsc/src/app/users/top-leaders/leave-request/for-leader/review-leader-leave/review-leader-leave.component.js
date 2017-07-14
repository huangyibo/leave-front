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
import { Errors } from "../../../../../shared/models/errors.model";
import { LeaveRequest } from "../../../../../shared/models/leave-request.model";
import { User } from "../../../../../shared/models/user.model";
import { Page } from "../../../../../shared/models/page.model";
import { ToasterConfig, ToasterService } from "angular2-toaster";
import { UserService } from "../../../../../shared/services/user.service";
import { LeaveRequestService } from "../../../../../shared/services/leave-request.service";
import { DateUtils } from "../../../../../shared/utils/date.utils";
export var ReviewLeaderLeaveComponent = (function () {
    function ReviewLeaderLeaveComponent(breadcrumbService, userService, toasterService, ref, leaveRequestService) {
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
    ReviewLeaderLeaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        // settings the header for about
        this.breadcrumbService.set({
            header: '科室干部请假审核',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/top-leader/leave-request/review/leader'],
                    title: '科室干部请假审核'
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
    ReviewLeaderLeaveComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    ReviewLeaderLeaveComponent.prototype.editLeave = function (leaveId) {
        var _this = this;
        var i = 0;
        this.leaveRequests.subscribe(function (data) {
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var leaveItem = data_1[_i];
                if (leaveItem.id == leaveId) {
                    _this.editingLeaveRequest = leaveItem;
                    _this.editingLeaveIndex = i;
                    break;
                }
                i = i + 1;
            }
        });
    };
    ReviewLeaderLeaveComponent.prototype.getPage = function (page_no) {
        var _this = this;
        this.isLoading = true;
        this.leaveRequests = this.leaveRequestService.reviewLeaveRequests(page_no, 10, 'LEADER')
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
    ReviewLeaderLeaveComponent.prototype.submitReview = function () {
        this.reviewLeave(this.editingLeaveRequest.id, this.editingLeaveRequest.top_leader_agree, this.editingLeaveRequest.top_leader_comment);
    };
    ReviewLeaderLeaveComponent.prototype.reviewLeave = function (leaveId, top_leader_agree, top_leader_comment) {
        var _this = this;
        this.isLoading = true;
        var leaveRequest = new LeaveRequest();
        leaveRequest.id = leaveId;
        leaveRequest.top_leader_id = this.currentUser.id;
        leaveRequest.top_leader_agree = top_leader_agree;
        leaveRequest.top_leader_comment = (top_leader_comment == null) ? '无' : top_leader_comment;
        leaveRequest.top_leader_comm_time = DateUtils.formatDateTime(new Date());
        this.leaveRequestService.save(leaveRequest).subscribe(function (data) {
            _this.isLoading = false;
            $('#leave-detail').modal('hide');
            _this.getPage(_this.currentPage);
            _this.popToast('success', null, '请假审核成功');
        }, function (err) {
            _this.isLoading = false;
            _this.popToast('warning', null, (!err.message) ? "网络不稳定，您的审核请求失败" : err.message);
        });
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    ReviewLeaderLeaveComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    ReviewLeaderLeaveComponent = __decorate([
        Component({
            selector: 'top-leader-list-leader-leave',
            templateUrl: 'review-leader-leave.component.html',
            styleUrls: ['review-leader-leave.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, ChangeDetectorRef, LeaveRequestService])
    ], ReviewLeaderLeaveComponent);
    return ReviewLeaderLeaveComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/top-leaders/leave-request/for-leader/review-leader-leave/review-leader-leave.component.js.map
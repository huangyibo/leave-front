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
import { Errors } from "../../../shared/models/errors.model";
import { LeaveRequest } from "../../../shared/models/leave-request.model";
import { User } from "../../../shared/models/user.model";
import { Page } from "../../../shared/models/page.model";
import { ToasterService, ToasterConfig } from "angular2-toaster";
import { UserService } from "../../../shared/services/user.service";
import { LeaveRequestService } from "../../../shared/services/leave-request.service";
import { DateUtils } from "../../../shared/utils/date.utils";
export var LeaderListLeaveRequestsComponent = (function () {
    function LeaderListLeaveRequestsComponent(breadcrumbService, userService, toasterService, leaveRequestService) {
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
        /*this.page = new Page<LeaveRequest>();
        this.page.current_page = 1;*/
    }
    LeaderListLeaveRequestsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // settings the header for about
        this.breadcrumbService.set({
            header: '请假审批',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/leader/leave-request/officer-leave-list'],
                    title: '请假审批'
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
    LeaderListLeaveRequestsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    LeaderListLeaveRequestsComponent.prototype.editLeave = function (leaveId) {
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
    LeaderListLeaveRequestsComponent.prototype.getPage = function (page_no) {
        var _this = this;
        this.isLoading = true;
        this.leaveRequests = this.leaveRequestService.reviewLeaveRequests(page_no, 10)
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
    };
    LeaderListLeaveRequestsComponent.prototype.submitReview = function () {
        this.reviewLeave(this.editingLeaveRequest.id, this.editingLeaveRequest.leader_agree, this.editingLeaveRequest.leader_comment);
    };
    LeaderListLeaveRequestsComponent.prototype.reviewLeave = function (leaveId, leader_agree, leader_comment) {
        var _this = this;
        this.isLoading = true;
        var leaveRequest = new LeaveRequest();
        leaveRequest.id = leaveId;
        leaveRequest.leader_id = this.currentUser.id;
        leaveRequest.leader_agree = leader_agree;
        leaveRequest.leader_comment = (leader_comment == null) ? '无' : leader_comment;
        leaveRequest.leader_comm_time = DateUtils.formatDateTime(new Date());
        this.leaveRequests = this.leaveRequests
            .map(function (data) {
            console.log("data:.........." + data);
            if (data) {
                var i = 0;
                for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                    var leaveItem = data_2[_i];
                    if (leaveItem.id === leaveId) {
                        leaveItem.leader_agree = leader_agree;
                        leaveItem.leader_id = _this.currentUser.id;
                        leaveItem.leader_comment = (leader_comment == null) ? '无' : leader_comment;
                        data[i] = leaveItem;
                        break;
                    }
                    i++;
                }
            }
            return data;
        });
        this.leaveRequestService.save(leaveRequest).subscribe(function (data) {
            _this.isLoading = false;
            $('#leave-detail').modal('hide');
            _this.getPage(_this.currentPage);
            _this.popToast('success', null, '请假审核成功');
        }, function (err) {
            _this.isLoading = false;
            _this.popToast('warning', null, (!err.message) ? "网络不稳定，您的审核请求失败" : err.message);
        });
    };
    LeaderListLeaveRequestsComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    LeaderListLeaveRequestsComponent = __decorate([
        Component({
            selector: 'leader-list-leave-requests',
            templateUrl: './leader-list-leave-requests.component.html',
            styleUrls: ['./leader-list-leave-requests.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, LeaveRequestService])
    ], LeaderListLeaveRequestsComponent);
    return LeaderListLeaveRequestsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/leaders/leave-request/leader-list-leave-requests.component.js.map
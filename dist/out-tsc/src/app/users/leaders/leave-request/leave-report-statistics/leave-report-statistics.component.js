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
import { BreadcrumbService } from "../../../../shared/services/breadcrumb.service";
import { Errors } from "../../../../shared/models/errors.model";
import { LeaveRequest } from "../../../../shared/models/leave-request.model";
import { Page } from "../../../../shared/models/page.model";
import { ToasterService, ToasterConfig } from "angular2-toaster";
import { UserService } from "../../../../shared/services/user.service";
import { LeaveRequestService } from "../../../../shared/services/leave-request.service";
import { LeaveRequestFilter } from "../../../../shared/models/leave-request-filter.model";
export var LeaderLeaveReportStatisticsComponent = (function () {
    function LeaderLeaveReportStatisticsComponent(breadcrumbService, userService, toasterService, ref, leaveRequestService) {
        this.breadcrumbService = breadcrumbService;
        this.userService = userService;
        this.leaveRequestService = leaveRequestService;
        this.errors = new Errors();
        this.isLoading = false;
        this.editingLeaveRequest = new LeaveRequest();
        this.isSubmiting = false;
        this.leaveRequestFilter = new LeaveRequestFilter();
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
    LeaderLeaveReportStatisticsComponent.prototype.ngOnInit = function () {
        // settings the header for about
        this.breadcrumbService.set({
            header: '请假报表统计',
            display: true,
            levels: [
                {
                    icon: 'dashboard',
                    link: ['/'],
                    title: '主页'
                },
                {
                    icon: 'clock-o',
                    link: ['/leader/leave-request/report'],
                    title: '请假报表统计'
                }
            ]
        });
        this.page = new Page();
        this.page.current_page = 1;
        this.page.has_pre_page = false;
        this.page.has_next_page = false;
        this.leaveRequestFilter = new LeaveRequestFilter();
        this.getPage(1);
        /*$(function () {
          $('#datetimepicker1').datetimepicker();
        });*/
    };
    LeaderLeaveReportStatisticsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    LeaderLeaveReportStatisticsComponent.prototype.editLeave = function (leaveId) {
        var _this = this;
        this.leaveRequests.subscribe(function (data) {
            data.forEach(function (value, index) {
                if (value.id === leaveId) {
                    _this.editingLeaveRequest = value;
                    _this.editingLeaveIndex = index;
                    return;
                }
            });
        });
    };
    LeaderLeaveReportStatisticsComponent.prototype.getPage = function (page_no, leaveRequestFilter) {
        var _this = this;
        this.isLoading = true;
        this.leaveRequests = this.leaveRequestService.reportLeaveRequests(page_no, 10, leaveRequestFilter)
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
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    LeaderLeaveReportStatisticsComponent.prototype.resetLeaveFilter = function () {
        this.leaveRequestFilter = new LeaveRequestFilter();
    };
    LeaderLeaveReportStatisticsComponent.prototype.filterLeave = function () {
        this.getPage(1, this.leaveRequestFilter);
        $('#leave-filter').modal('hide');
        this.popToast('success', null, '根据您的查询条件，请假报表加载成功！');
    };
    LeaderLeaveReportStatisticsComponent.prototype.searchByRealName = function () {
        if (!this.leaveRequestFilter.user_name) {
            this.popToast('info', null, '请输入姓名检索！');
            return;
        }
        this.getPage(1, this.leaveRequestFilter);
        this.popToast('success', null, '根据输入的姓名，检索请假信息成功！');
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    LeaderLeaveReportStatisticsComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    LeaderLeaveReportStatisticsComponent = __decorate([
        Component({
            selector: 'leader-leave-report-statistics',
            templateUrl: 'leave-report-statistics.component.html',
            styleUrls: ['leave-report-statistics.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, ChangeDetectorRef, LeaveRequestService])
    ], LeaderLeaveReportStatisticsComponent);
    return LeaderLeaveReportStatisticsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/leaders/leave-request/leave-report-statistics/leave-report-statistics.component.js.map
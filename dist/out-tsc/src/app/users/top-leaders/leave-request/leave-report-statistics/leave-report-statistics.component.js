var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Department } from "../../../../shared/models/department.model";
import { Component, ChangeDetectorRef } from "@angular/core";
import { BreadcrumbService } from "../../../../shared/services/breadcrumb.service";
import { Errors } from "../../../../shared/models/errors.model";
import { LeaveRequest } from "../../../../shared/models/leave-request.model";
import { Page } from "../../../../shared/models/page.model";
import { ToasterService, ToasterConfig } from "angular2-toaster";
import { UserService } from "../../../../shared/services/user.service";
import { LeaveRequestService } from "../../../../shared/services/leave-request.service";
import { LeaveRequestFilter } from "../../../../shared/models/leave-request-filter.model";
import { DepartmentService } from "../../../../shared/services/department.service";
import { UserType } from "../../../../shared/models/user-type.model";
import { LoadingAnimateService } from "ng2-loading-animate";
export var TopLeaderLeaveReportStatisticsComponent = (function () {
    function TopLeaderLeaveReportStatisticsComponent(breadcrumbService, userService, toasterService, ref, _loadingSvc, departmentService, leaveRequestService) {
        this.breadcrumbService = breadcrumbService;
        this.userService = userService;
        this._loadingSvc = _loadingSvc;
        this.departmentService = departmentService;
        this.leaveRequestService = leaveRequestService;
        this.errors = new Errors();
        this.isLoading = false;
        this.editingLeaveRequest = new LeaveRequest();
        this.isSubmiting = false;
        // search condition configuration
        this.leaveRequestFilter = new LeaveRequestFilter();
        this.page = new Page();
        this.currentPage = 1;
        this.rowCount = 0;
        // Department config
        this.departments = [];
        this.userTypes = [];
        this.toasterconfig = new ToasterConfig({
            showCloseButton: true,
            tapToDismiss: false,
            timeout: 1500
        });
        this.toasterService = toasterService;
        this.ref = ref;
    }
    TopLeaderLeaveReportStatisticsComponent.prototype.ngOnInit = function () {
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
                    link: ['/top-leader/leave-request/report'],
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
        this.getDepartments();
        this.getUserTypes();
        /*$(function () {
         $('#datetimepicker1').datetimepicker();
         });*/
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.ngOnDestroy = function () {
        this.breadcrumbService.clear();
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.editLeave = function (leaveId) {
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
    TopLeaderLeaveReportStatisticsComponent.prototype.getPage = function (page_no, leaveRequestFilter) {
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
    TopLeaderLeaveReportStatisticsComponent.prototype.resetLeaveFilter = function () {
        this.leaveRequestFilter = new LeaveRequestFilter();
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.filterLeave = function () {
        this.start();
        this.getPage(1, this.leaveRequestFilter);
        $('#leave-filter').modal('hide');
        this.popToast('success', null, '根据您的查询条件，请假报表加载成功！');
        this.stop();
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.searchByRealName = function () {
        if (!this.leaveRequestFilter.user_name) {
            this.popToast('info', null, '请输入姓名检索！');
            return;
        }
        this.getPage(1, this.leaveRequestFilter);
        this.popToast('success', null, '根据输入的姓名，检索请假信息成功！');
        this.ref.markForCheck();
        this.ref.detectChanges();
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.popToast = function (type, title, body) {
        var toast = {
            type: type,
            title: title,
            body: body
        };
        this.toasterService.pop(toast);
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.list().subscribe(function (data) {
            _this.departments = data;
            var allDepartment = new Department();
            allDepartment.id = null;
            allDepartment.name = '全部';
            _this.departments.push(allDepartment);
        });
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.getUserTypes = function () {
        var _this = this;
        UserType.listUserType().subscribe(function (data) {
            _this.userTypes = data;
        });
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.start = function () {
        this._loadingSvc.setValue(true);
    };
    TopLeaderLeaveReportStatisticsComponent.prototype.stop = function () {
        this._loadingSvc.setValue(false);
    };
    TopLeaderLeaveReportStatisticsComponent = __decorate([
        Component({
            selector: 'top-leader-leave-report-statistics',
            templateUrl: 'leave-report-statistics.component.html',
            styleUrls: ['./leave-report-statistics.component.css']
        }), 
        __metadata('design:paramtypes', [BreadcrumbService, UserService, ToasterService, ChangeDetectorRef, LoadingAnimateService, DepartmentService, LeaveRequestService])
    ], TopLeaderLeaveReportStatisticsComponent);
    return TopLeaderLeaveReportStatisticsComponent;
}());
//# sourceMappingURL=F:/复旦大学/两军大请假销假系统/version/v-20170710/smmu/leave/src/src/app/users/top-leaders/leave-request/leave-report-statistics/leave-report-statistics.component.js.map